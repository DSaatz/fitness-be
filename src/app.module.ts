import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaloriesModule } from './calories/calories.module';
import { ExercisesModule } from './exercises/exercises.module';
import { UsersModule } from './users/users.module';
import { WorkoutPlansModule } from './workout-plans/workout-plans.module';
import { MacrosModule } from './macros/macros.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
import { ConfigModule } from '@nestjs/config';
import { JourneyModule } from './journey/journey.module';
import { BlogpostModule } from './blogpost/blogpost.module';
import { ExerciseRecordModule } from './exercise-record/exercise-record.module';
dotenv.config();

@Module({
  imports: [CaloriesModule, ExercisesModule, UsersModule, WorkoutPlansModule, MacrosModule,
    MongooseModule.forRoot(process.env.MONGO_URL),
      ConfigModule.forRoot({
        isGlobal: true,
      }),
      JourneyModule,
      BlogpostModule,
      ExerciseRecordModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
