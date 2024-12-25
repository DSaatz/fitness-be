import { DietGoal } from "./enums/diet-goal-enum";
import { sex } from "./enums/sex-enum"; //the sex enum might be not needed if I stick to the Katch-McArdle formula
import { ActivityLevel } from "./enums/activity-level-enum";

export class CalorieCalculator{
    private readonly dietSummant = 200; // Additional 200 calories to either cut or bulk slowly 

    public calculateMaintenanceCalories(
        weight: number,
        bodyFatPercentage: number,
        activityLevel: ActivityLevel
    ): number{
        const leandBodyMass = weight * (1 - bodyFatPercentage / 100);

        //Basal Metabolic Rate using Katch-McArdle formula
        const bmr = 370 + 21.6 * leandBodyMass;

        const activityMultipliers: Record<ActivityLevel, number> = {
            sedentary: 1.2,
            lightlyActive: 1.375,
            moderatelyActive: 1.55,
            veryActive: 1.725,
            extraActive: 1.9,
          };

          const maintenanceCalories = bmr * activityMultipliers[activityLevel];

          return Math.round(maintenanceCalories);
    }

    public calculateCaloricIntake(
        maintenanceCalories: number,
        dietGoal: DietGoal
    ): number{

        const calorieAdjustments: Record<DietGoal, number> = {
            cut: -this.dietSummant,
            maintain: 0,
            bulk: this.dietSummant,
          };

          return maintenanceCalories + calorieAdjustments[dietGoal];
        }
}