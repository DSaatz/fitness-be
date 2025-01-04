import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AddWorkoutPlanDto } from './dto/add-workout-plan.dto';
import { RemoveWorkoutPlanDto } from './dto/remove-workout-plan.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      return await this.usersService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
      return await this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
      return await this.usersService.remove(id);
  }

  @Post('/:userId/workout-plan')
  async addWorkoutPlan(@Param('userId') userId: string, @Body() addWorkoutPlanDto: AddWorkoutPlanDto) {
    console.log('Received Body: ', addWorkoutPlanDto);  
    try {
          return await this.usersService.addWorkoutPlan(userId, addWorkoutPlanDto.workoutPlanId)
      } catch (error) {
           if(error instanceof NotFoundException){
              throw error;
            }
            throw new Error("Error adding workout plan")
      }
  }

  @Delete('/:userId/workout-plan')
  async removeWorkoutPlan(@Param('userId') userId: string, @Body() removeWorkoutPlanDto: RemoveWorkoutPlanDto) {
      try {
           return await this.usersService.removeWorkoutPlan(userId, removeWorkoutPlanDto.workoutPlanId)
      } catch (error) {
           if(error instanceof NotFoundException){
              throw error;
            }
            throw new Error("Error removing workout plan")
      }
    }
}