import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaloriesModule } from './calories/calories.module';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';
import { WorkoutPlansModule } from './workout-plans/workout-plans.module';
import { MacrosModule } from './macros/macros.module';

@Module({
  imports: [CaloriesModule, ExercisesModule, UsersModule, WorkoutPlansModule, MacrosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
