import { Module } from '@nestjs/common';
import { CaloriesService } from './calories.service';
import { CaloriesController } from './calories.controller';

@Module({
  controllers: [CaloriesController],
  providers: [CaloriesService],
  exports: [CaloriesService],
})
export class CaloriesModule {}