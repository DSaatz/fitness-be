import { Test, TestingModule } from '@nestjs/testing';
import { CaloriesService } from './calories.service';
import { ActivityLevel } from './enums/activity-level-enum';
import { DietGoal } from './enums/diet-goal-enum';

describe('CaloriesService', () => {
  let service: CaloriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaloriesService],
    }).compile();

    service = module.get<CaloriesService>(CaloriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('calculateDailyCalories', () => {
    it('should calculate maintenance calories correctly for moderately active person', () => {
      const result = service.calculateDailyCalories(
        70, // weight in kg
        15, // body fat percentage
        ActivityLevel.ModeratelyActive,
        DietGoal.Maintain,
      );

      // 70kg at 15% body fat = 59.5kg lean mass
      // BMR = 370 + (21.6 * 59.5) = 1655.2
      // Moderately active multiplier = 1.55
      // Expected maintenance = 1655.2 * 1.55 ≈ 2566
      expect(result.maintenanceCalories).toBeCloseTo(2566, -1);
      expect(result.recommendedCalories).toBe(result.maintenanceCalories);
    });

    it('should calculate cutting calories correctly', () => {
      const result = service.calculateDailyCalories(
        70,
        15,
        ActivityLevel.ModeratelyActive,
        DietGoal.Cut,
      );

      const expectedMaintenance = result.maintenanceCalories;
      expect(result.recommendedCalories).toBe(expectedMaintenance - 200);
    });

    it('should calculate bulking calories correctly', () => {
      const result = service.calculateDailyCalories(
        70,
        15,
        ActivityLevel.ModeratelyActive,
        DietGoal.Bulk,
      );

      const expectedMaintenance = result.maintenanceCalories;
      expect(result.recommendedCalories).toBe(expectedMaintenance + 200);
    });
  });
});