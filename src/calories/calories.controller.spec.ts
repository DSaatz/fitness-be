import { Test, TestingModule } from '@nestjs/testing';
import { CaloriesController } from './calories.controller';
import { CaloriesService } from './calories.service';
import { ActivityLevel } from './enums/activity-level-enum';
import { DietGoal } from './enums/diet-goal-enum';

describe('CaloriesController', () => {
  let controller: CaloriesController;
  let service: CaloriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaloriesController],
      providers: [CaloriesService],
    }).compile();

    controller = module.get<CaloriesController>(CaloriesController);
    service = module.get<CaloriesService>(CaloriesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('calculateCalories', () => {
    it('should return calorie calculations', () => {
      const dto = {
        weight: 70,
        bodyFatPercentage: 15,
        activityLevel: ActivityLevel.ModeratelyActive,
        dietGoal: DietGoal.Maintain,
      };

      const result = controller.calculateCalories(dto);

      expect(result).toEqual({
        maintenanceCalories: expect.any(Number),
        recommendedCalories: expect.any(Number),
        dietGoal: dto.dietGoal,
        activityLevel: dto.activityLevel,
      });
    });
  });
});