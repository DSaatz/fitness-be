import { PartialType } from '@nestjs/mapped-types';
import { CreateExerciseRecordDto } from './create-exercise-record.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExerciseRecordDto extends PartialType(CreateExerciseRecordDto) {
        @IsString()
        exerciseId: string;
    
        @IsString()
        userId: string;
    
        @IsNumber()
        @IsOptional()
        weight: number;
    
        @IsNumber()
        @IsOptional()
        reps: number;
}
