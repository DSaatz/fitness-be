import { CalorieCalculator } from './calorie-calculator';
import { ActivityLevel } from './enums/activity-level-enum';
import { DietGoal } from './enums/diet-goal-enum';

describe('CalorieCalculator', () => {
  let calculator: CalorieCalculator;

  beforeEach(() => {
    calculator = new CalorieCalculator();
  });

  describe('calculateMaintenanceCalories', () => {
    it.each([
      [ActivityLevel.Sedentary, 1.2],
      [ActivityLevel.LightlyActive, 1.375],
      [ActivityLevel.ModeratelyActive, 1.55],
      [ActivityLevel.VeryActive, 1.725],
      [ActivityLevel.ExtraActive, 1.9],
    ])('should apply correct multiplier for %s activity level', (activityLevel, multiplier) => {
      const weight = 70;
      const bodyFatPercentage = 15;
      const leanMass = weight * (1 - bodyFatPercentage / 100);
      const expectedBMR = 370 + (21.6 * leanMass);
      const expectedMaintenance = Math.round(expectedBMR * multiplier);

      const result = calculator.calculateMaintenanceCalories(
        weight,
        bodyFatPercentage,
        activityLevel,
      );

      expect(result).toBe(expectedMaintenance);
    });
  });

  describe('calculateCaloricIntake', () => {
    const maintenanceCalories = 2500;

    it.each([
      [DietGoal.Cut, -200],
      [DietGoal.Maintain, 0],
      [DietGoal.Bulk, 200],
    ])('should adjust maintenance calories correctly for %s goal', (goal, adjustment) => {
      const result = calculator.calculateCaloricIntake(maintenanceCalories, goal);
      expect(result).toBe(maintenanceCalories + adjustment);
    });
  });
});