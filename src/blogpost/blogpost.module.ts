import { Module } from '@nestjs/common';
import { BlogpostService } from './blogpost.service';
import { BlogpostController } from './blogpost.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogPost, BlogPostSchema } from './schemas/blogpost.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: BlogPost.name, schema: BlogPostSchema }])],
  controllers: [BlogpostController],
  providers: [BlogpostService],
})
export class BlogpostModule {}
