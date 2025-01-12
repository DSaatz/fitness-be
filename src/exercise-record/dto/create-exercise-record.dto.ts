import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateExerciseRecordDto {
    @IsNotEmpty()
    @IsString()
    exerciseId: string;

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsNumber()
    weight: number;

    @IsNumber()
    reps: number;
}
