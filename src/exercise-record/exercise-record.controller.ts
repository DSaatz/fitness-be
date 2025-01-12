import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ExerciseRecordService } from './exercise-record.service';
import { CreateExerciseRecordDto } from './dto/create-exercise-record.dto';
import { UpdateExerciseRecordDto } from './dto/update-exercise-record.dto';

@Controller('exercise-record')
export class ExerciseRecordController {
  constructor(private readonly exerciseRecordService: ExerciseRecordService) {}

  @Post()
  create(@Body() createExerciseRecordDto: CreateExerciseRecordDto) {
    return this.exerciseRecordService.create(createExerciseRecordDto);
  }

  @Get()
  findAll() {
    return this.exerciseRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.exerciseRecordService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: any) {
    return this.exerciseRecordService.update(id, body);
  }  
  
  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.exerciseRecordService.remove(id);
  }

  @Get('user/:userId')
  getAllRecordsByUserId(@Param('userId') userId: string) {
    return this.exerciseRecordService.getAllRecordsByUserId(userId);
  }
}
