import { Controller, Post, Body } from '@nestjs/common';
import { CaloriesService } from './calories.service';
import { DietGoal } from './enums/diet-goal-enum';
import { ActivityLevel } from './enums/activity-level-enum';

class CalculateCaloriesDto {
    weight: number;
    bodyFatPercentage: number;
    activityLevel: ActivityLevel;
    dietGoal: DietGoal;
  }

@Controller('calories')
export class CaloriesController {
    constructor(private readonly caloriesService: CaloriesService) {}

    @Post('calculate')
    calculateCalories(@Body() dto: CalculateCaloriesDto) {
        return this.caloriesService.calculateDailyCalories(
            dto.weight,
            dto.bodyFatPercentage,
            dto.activityLevel,
            dto.dietGoal,
        );
    }
}
