import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Exercise } from 'src/exercises/schemas/exercise.schema';

export type WorkoutPlansDocument = HydratedDocument<WorkoutPlan>;

@Schema()
export class WorkoutPlan {
    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' }])
    exercises: Exercise[];
    _id: mongoose.Types.ObjectId;
}

export interface WorkoutPlan {
    name: string;
    description: string;
    exercises: Exercise[];
    _id: mongoose.Types.ObjectId;
}

export const WorkoutPlansSchema = SchemaFactory.createForClass(WorkoutPlan);