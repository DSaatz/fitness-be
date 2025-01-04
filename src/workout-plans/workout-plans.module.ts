import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkoutPlansService } from './workout-plans.service';
import { WorkoutPlansController } from './workout-plans.controller';
import { WorkoutPlan, WorkoutPlansSchema } from './schemas/workout-plans.schema';
import { Exercise, ExerciseSchema } from '../exercises/schemas/exercise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WorkoutPlan.name, schema: WorkoutPlansSchema },
      { name: Exercise.name, schema: ExerciseSchema }
    ])
  ],
  controllers: [WorkoutPlansController],
  providers: [WorkoutPlansService],
  exports: [MongooseModule.forFeature([{ name: WorkoutPlan.name, schema: WorkoutPlansSchema }])]
})
export class WorkoutPlansModule {}