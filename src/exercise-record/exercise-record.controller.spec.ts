import { Test, TestingModule } from '@nestjs/testing';
import { ExerciseRecordController } from './exercise-record.controller';
import { ExerciseRecordService } from './exercise-record.service';

describe('ExerciseRecordController', () => {
  let controller: ExerciseRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExerciseRecordController],
      providers: [ExerciseRecordService],
    }).compile();

    controller = module.get<ExerciseRecordController>(ExerciseRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
