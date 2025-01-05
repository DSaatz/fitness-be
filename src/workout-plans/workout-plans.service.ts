import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { WorkoutPlan } from './schemas/workout-plans.schema';
import { Exercise } from '../exercises/schemas/exercise.schema';

@Injectable()
export class WorkoutPlansService {
  constructor(
    @InjectModel(WorkoutPlan.name) private workoutPlanModel: Model<WorkoutPlan>,
    @InjectModel(Exercise.name) private exerciseModel: Model<Exercise>,
  ) {}

  async create(createWorkoutPlanDto: { name: string; description: string; exercises: string[] }) {
    if (!Array.isArray(createWorkoutPlanDto.exercises) || !createWorkoutPlanDto.exercises.length) {
      throw new Error('Exercises must be a non-empty array');
    }
  
    const exerciseIds = createWorkoutPlanDto.exercises.map((id) => new Types.ObjectId(id));
    console.log('Converted exercise IDs:', exerciseIds);
  
    const exercises = await this.exerciseModel
      .find({ _id: { $in: exerciseIds } })
      .exec();
  
    if (!exercises.length) {
      throw new NotFoundException('No exercises found with the provided IDs');
    }
  
    const workoutPlan = new this.workoutPlanModel({
      name: createWorkoutPlanDto.name,
      description: createWorkoutPlanDto.description,
      exercises: exerciseIds,
    });
  
    return workoutPlan.save();
  }
  
  

  async findAll() {
    return this.workoutPlanModel.find().populate('exercises').exec();
  }

  async findOne(id: string) {
    const workoutPlan = await this.workoutPlanModel
      .findById(id)
      .populate('exercises')
      .exec();
      
    if (!workoutPlan) {
      throw new NotFoundException('Workout plan not found');
    }
    
    return workoutPlan;
  }

  async update(id: string, updateDto: { name?: string; description?: string; exerciseNames?: string[] }) {
    const updateData: any = { ...updateDto };
    
    if (updateDto.exerciseNames) {
      const exercises = await this.exerciseModel
        .find({ name: { $in: updateDto.exerciseNames } })
        .exec();
      
      updateData.exercises = exercises.map(exercise => exercise._id);
    }
    
    const updated = await this.workoutPlanModel
      .findByIdAndUpdate(id, updateData, { new: true })
      .populate('exercises')
      .exec();
      
    if (!updated) {
      throw new NotFoundException('Workout plan not found');
    }
    
    return updated;
  }

  async delete(id: string) {
    const deleted = await this.workoutPlanModel.findByIdAndDelete(id).exec();
    if (!deleted) {
      throw new NotFoundException('Workout plan not found');
    }
    return deleted;
  }
}