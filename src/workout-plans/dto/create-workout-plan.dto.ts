import { IsString, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateWorkoutPlanDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  @ArrayNotEmpty()
  exercises: string[];
}
