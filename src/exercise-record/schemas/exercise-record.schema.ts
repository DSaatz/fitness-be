import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ExerciseRecordDocument = HydratedDocument<ExerciseRecord>;

@Schema()
export class ExerciseRecord{
    @Prop()
    exerciseId: string;

    @Prop()
    userId: string;

    @Prop()
    weight: number;

    @Prop()
    reps: number;
}

export const ExerciseRecordSchema = SchemaFactory.createForClass(ExerciseRecord);