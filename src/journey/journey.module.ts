import { Module } from '@nestjs/common';
import { JourneyController } from './journey.controller';
import { JourneyService } from './journey.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Journey, JourneySchema } from './schemas/journey.schema';

@Module({
  imports: [
        MongooseModule.forFeature([{ name: Journey.name, schema: JourneySchema }]),
  ],
  controllers: [JourneyController],
  providers: [JourneyService],
})
export class JourneyModule {}