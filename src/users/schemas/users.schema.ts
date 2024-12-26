import {Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'
import { WorkoutPlan } from 'src/workout-plans/schemas/workout-plans.schema';
import * as mongoose from 'mongoose';

export type ExerciseDocument = HydratedDocument<User>;

@Schema()
export class User{
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    isAdmin: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPlan' })
    workoutPlans: WorkoutPlan[];

    @Prop()
    calorieGoal: number | null;

    @Prop()
    weightHistory: number | null;
}

export const UsersSchema = SchemaFactory.createForClass(User);