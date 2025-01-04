import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/users.schema';
import { Model, Types } from 'mongoose';
import { WorkoutPlan } from 'src/workout-plans/schemas/workout-plans.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>,
              @InjectModel(WorkoutPlan.name)private workoutPlanModel: Model<WorkoutPlan>) {}

  create(createUserDto: CreateUserDto) {
    const userToSave = new this.userModel(createUserDto);
    return userToSave.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }


  async addWorkoutPlan(userId: string, workoutPlanId: string): Promise<User | null> {
    try {
      if (!Types.ObjectId.isValid(userId)) {
         throw new NotFoundException('Invalid user id');
       }
     if (!Types.ObjectId.isValid(workoutPlanId)) {
         throw new NotFoundException('Invalid workout plan id');
     }
     console.log("Workout plan id received:", workoutPlanId); // Debugging step
     const user = await this.userModel.findById(userId);
      console.log("User found:", user)
     if (!user) {
       throw new NotFoundException('User not found');
     }
     const workoutPlan = await this.workoutPlanModel.findById(workoutPlanId);
      console.log("Workout plan found:", workoutPlan)
       if (!workoutPlan){
          throw new NotFoundException('Workout plan not found');
       }
 
     user.workoutPlans.push(workoutPlan);
     return user.save();
    } catch (error) {
         console.error("Error inside addWorkoutPlan", error);
         throw new Error("Error in addWorkoutPlan service")
    }
   }
 
    async removeWorkoutPlan(userId: string, workoutPlanId: string): Promise<User | null> {
     if (!Types.ObjectId.isValid(userId)) {
       throw new NotFoundException('Invalid user id');
       }
 
     if (!Types.ObjectId.isValid(workoutPlanId)) {
         throw new NotFoundException('Invalid workout plan id');
       }
 
       const user = await this.userModel.findById(userId);
 
       if (!user) {
         throw new NotFoundException('User not found');
       }
       const initialLength = user.workoutPlans.length;
       user.workoutPlans = user.workoutPlans.filter(plan => plan._id.toString() !== workoutPlanId); //Compare objectIds
       if (user.workoutPlans.length === initialLength){
          throw new NotFoundException('Workout plan not found in user');
       }
       return user.save();
     }
}
