import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBlogpostDto } from './dto/create-blogpost.dto';
import { UpdateBlogpostDto } from './dto/update-blogpost.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BlogPost, BlogPostDocument } from './schemas/blogpost.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlogpostService {
  constructor(@InjectModel(BlogPost.name) private blogPostModel: Model<BlogPostDocument>) {}
  async create(createBlogpostDto: CreateBlogpostDto) {
    const blogpostToSave = new this.blogPostModel(createBlogpostDto);
    return blogpostToSave.save();
  }

  async findAll() {
    return this.blogPostModel.find().exec();
  }

  async findOne(id: string): Promise<BlogPostDocument | null> {
    return this.blogPostModel.findById(id).exec();
  }

  async update(id: string, blogPost: BlogPost): Promise<BlogPostDocument | null> {
    return this.blogPostModel
    .findByIdAndUpdate(id,blogPost, {new: true})
    .exec();
 }
 async remove(id: string): Promise<BlogPostDocument | null>{
   return this.blogPostModel.findByIdAndDelete(id).exec();
 }
}
