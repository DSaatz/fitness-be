import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type JourneyDocument = HydratedDocument<Journey>;

@Schema()
export class Journey{
    @Prop()
    userId: string;

    @Prop()
    bfProgress: {
        date: Date,
        bf: number
    }

    @Prop()
    weightProgress: {
        date: Date,
        weight: number
    }
}

export const JourneySchema = SchemaFactory.createForClass(Journey);