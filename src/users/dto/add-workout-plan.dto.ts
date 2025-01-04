import { IsNotEmpty, IsString } from 'class-validator';
    export class AddWorkoutPlanDto {
        @IsNotEmpty()
        @IsString()
        workoutPlanId: string;
    }