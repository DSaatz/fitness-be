import {
    IsNotEmpty,
    IsString,
    ValidateNested,
    IsDate,
    IsNumber,
    IsOptional,
    ArrayMinSize,
    ArrayMaxSize
} from 'class-validator';
import { Type } from 'class-transformer';

export class ProgressDataDto {
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsNotEmpty()
    @IsNumber()
    value: number;
}


export class CreateJourneyDto {
    @IsNotEmpty()
    @IsString()
    userId: string;

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => ProgressDataDto)
    @ArrayMaxSize(1000)
    bfProgress?: ProgressDataDto[];

    @IsOptional()
    @ValidateNested({each: true})
    @Type(() => ProgressDataDto)
    @ArrayMaxSize(1000)
    weightProgress?: ProgressDataDto[];
}