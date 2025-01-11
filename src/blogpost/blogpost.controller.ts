import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { BlogpostService } from './blogpost.service';
import { CreateBlogpostDto } from './dto/create-blogpost.dto';
import { UpdateBlogpostDto } from './dto/update-blogpost.dto';
import { BlogPost } from './schemas/blogpost.schema';

@Controller('blog-posts')
export class BlogpostController {
  constructor(private readonly blogpostService: BlogpostService) {}

  @Post()
  create(@Body() createBlogpostDto: CreateBlogpostDto) {
    return this.blogpostService.create(createBlogpostDto);
  }

  @Get()
  findAll() {
    return this.blogpostService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.blogpostService.findOne(id);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() blogPost: BlogPost) {
     return this.blogpostService.update(id, blogPost);
  }

   @Delete(":id")
  async remove(@Param("id") id:string) {
    return this.blogpostService.remove(id)
  }
}
