import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJourneyDto } from './dto/create-journey.dto';
import { UpdateJourneyDto } from './dto/update-journey.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Journey } from './schemas/journey.schema';
import { Model } from 'mongoose';

@Injectable()
export class JourneyService {
  constructor(@InjectModel(Journey.name) private journeyModel: Model<Journey>) {}

    async create(createJourneyDto: CreateJourneyDto) {
        const journeyToSave = new this.journeyModel(createJourneyDto);
        return journeyToSave.save();
    }

  async findAll() {
      return this.journeyModel.find().exec();
  }

    async findOne(userId: string): Promise<Journey | null> {
        const journey = await this.journeyModel.findOne({ userId }).exec();
        if (!journey) {
            throw new NotFoundException(`Journey with userId ${userId} not found`);
        }
        return journey
    }

    async update(userId: string, updateJourneyDto: UpdateJourneyDto): Promise<Journey | null> {
          const updatedJourney = await this.journeyModel
              .findOneAndUpdate({ userId }, updateJourneyDto, { new: true })
              .exec();

          if (!updatedJourney) {
              throw new NotFoundException(`Journey with userId ${userId} not found`);
          }
      return updatedJourney;
    }

    async remove(userId: string) {
      const deleted = await this.journeyModel.findOneAndDelete({ userId }).exec();
      if (!deleted) {
        throw new NotFoundException(`Journey with userId ${userId} not found`);
      }
      return deleted;
    }
}