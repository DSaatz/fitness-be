import { Injectable } from '@nestjs/common';
import { CalorieCalculator } from './calorie-calculator';
import { DietGoal } from './enums/diet-goal-enum';
import { ActivityLevel } from './enums/activity-level-enum';


@Injectable()
export class CaloriesService {
    private readonly calorieCalculator: CalorieCalculator;

    constructor() {
        this.calorieCalculator = new CalorieCalculator();
    }

    caluclateDailyCalories(
        weight: number,
        bodyFatPercentage: number,
        activityLevel: ActivityLevel,
        dietGoal: DietGoal,
    ){
        const maintenanceCalories = this.calorieCalculator.calculateMaintenanceCalories(weight, bodyFatPercentage, activityLevel);

        const recommendedCalories = this.calorieCalculator.calculateCaloricIntake(maintenanceCalories, dietGoal);

        return {
            maintenanceCalories,
            recommendedCalories,
            dietGoal,
            activityLevel,
        }
    }
}
