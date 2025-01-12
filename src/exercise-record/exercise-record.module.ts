import { Module } from '@nestjs/common';
import { ExerciseRecordService } from './exercise-record.service';
import { ExerciseRecordController } from './exercise-record.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExerciseRecord, ExerciseRecordSchema } from './schemas/exercise-record.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ExerciseRecord.name, schema: ExerciseRecordSchema }])],
  controllers: [ExerciseRecordController],
  providers: [ExerciseRecordService],
})
export class ExerciseRecordModule {}
