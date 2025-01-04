import { IsNotEmpty, IsString } from 'class-validator';
export class RemoveWorkoutPlanDto {
    @IsNotEmpty()
    @IsString()
    workoutPlanId: string;
}