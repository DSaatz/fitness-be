import { Controller, Get, Post, Put, Delete, Body, Param, NotFoundException } from '@nestjs/common';
import { WorkoutPlansService } from './workout-plans.service';

@Controller('workout-plans')
export class WorkoutPlansController {
  constructor(private readonly workoutPlansService: WorkoutPlansService) {}

  @Post()
  create(@Body() createDto: { name: string; description: string; exerciseNames: string[] }) {
    return this.workoutPlansService.create(createDto);
  }

  @Get()
  findAll() {
    return this.workoutPlansService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workoutPlansService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateDto: { name?: string; description?: string; exerciseNames?: string[] },
  ) {
    return this.workoutPlansService.update(id, updateDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.workoutPlansService.delete(id);
  }
}