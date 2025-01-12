import { Injectable } from '@nestjs/common';
import { CreateExerciseRecordDto } from './dto/create-exercise-record.dto';
import { UpdateExerciseRecordDto } from './dto/update-exercise-record.dto';
import { InjectModel } from '@nestjs/mongoose';
import { ExerciseRecord } from './schemas/exercise-record.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExerciseRecordService {
  constructor(@InjectModel(ExerciseRecord.name) private exerciseRecordModel: Model<ExerciseRecord>) {}
  async create(createExerciseRecordDto: CreateExerciseRecordDto) {
    const exerciseRecordToSave = new this.exerciseRecordModel(createExerciseRecordDto);
    return exerciseRecordToSave.save();
  }

  async findAll() {
    return this.exerciseRecordModel.find().exec();
  }

  async findOne(id: string) {
    return this.exerciseRecordModel.findById(id).exec();
  }

  async update(id: string, updateData: any) {
    const sanitizedData = Object.fromEntries(
      Object.entries(updateData).filter(([_, value]) => value !== undefined)
    );
  
    return this.exerciseRecordModel
      .findByIdAndUpdate(id, sanitizedData, { new: true })
      .exec();
  }
  
  
  

  async remove(id: string) {
    return this.exerciseRecordModel.findByIdAndDelete(id).exec();
  }

  getAllRecordsByUserId(userId: string) {
    return this.exerciseRecordModel.find({userId}).exec();
  }
}
