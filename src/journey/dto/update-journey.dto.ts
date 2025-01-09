import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, ValidateNested, IsDate, IsNumber, IsOptional, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateJourneyDto, ProgressDataDto } from './create-journey.dto';




export class UpdateJourneyDto extends PartialType(CreateJourneyDto) {
        @IsString()
        @IsNotEmpty()
        userId: string;
    
        @IsOptional()
        @ValidateNested({ each: true })
        @Type(() => ProgressDataDto)
        @ArrayMaxSize(1000)
        bfProgress?: ProgressDataDto[];
    
        @IsOptional()
        @ValidateNested({ each: true })
        @Type(() => ProgressDataDto)
        @ArrayMaxSize(1000)
        weightProgress?: ProgressDataDto[];
}