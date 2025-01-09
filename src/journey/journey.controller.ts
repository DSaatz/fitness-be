import { Controller, Get, Post, Body, Put, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { JourneyService } from './journey.service';
import { CreateJourneyDto } from './dto/create-journey.dto';
import { UpdateJourneyDto } from './dto/update-journey.dto';

@Controller('journey')
export class JourneyController {
  constructor(private readonly journeyService: JourneyService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createJourneyDto: CreateJourneyDto) {
    return this.journeyService.create(createJourneyDto);
  }

  @Get()
  findAll() {
      return this.journeyService.findAll();
  }

  @Get(':userId')
  findOne(@Param('userId') userId: string) {
    return this.journeyService.findOne(userId);
  }

  @Put(':userId')
  @UsePipes(new ValidationPipe())
  update(@Param('userId') userId: string, @Body() updateJourneyDto: UpdateJourneyDto) {
    return this.journeyService.update(userId, updateJourneyDto);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: string) {
    return this.journeyService.remove(userId);
  }
}