import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Exercise } from './schemas/exercise.schema';
import { Model } from 'mongoose';

@Injectable()
export class ExercisesService {
  constructor(@InjectModel(Exercise.name) private exerciseModel: Model<Exercise>) {}

  create(createExerciseDto: CreateExerciseDto) {
    const exerciseToSave = new this.exerciseModel(createExerciseDto);
    return exerciseToSave.save();
  }

  search(term: string) {
    return this.exerciseModel.find({ name: { $regex: term, $options: 'i' } }).exec();
  }

  findAll() {
    return this.exerciseModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
