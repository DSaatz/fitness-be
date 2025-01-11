import { PartialType } from '@nestjs/mapped-types';
import { CreateBlogpostDto } from './create-blogpost.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateBlogpostDto extends PartialType(CreateBlogpostDto) {
        @IsNotEmpty()
        @IsString()
        title: string;
    
        @IsNotEmpty()
        @IsString()
        content: string;
        
        @IsNotEmpty()
        @IsString()
        userId: string;
}
