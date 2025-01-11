import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type BlogPostDocument = HydratedDocument<BlogPost>

@Schema()
export class BlogPost {
    @Prop()
    userId: string;

    @Prop()
    title: string;

    @Prop()
    content: string;
}

export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);