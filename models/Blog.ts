import mongoose, { Schema } from "mongoose";

export type BlogDocument = {
  title: string;
  subtitle: string;
  content: string;
  imageUrl: string;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  createdAt: Date;
  updatedAt: Date;
};

const BlogSchema = new Schema<BlogDocument>(
  {
    title: { type: String, required: true, trim: true },
    subtitle: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    metaTitle: { type: String, required: false, trim: true },
    metaDescription: { type: String, required: false, trim: true },
  },
  { timestamps: true },
);

export const Blog =
  (mongoose.models.Blog as mongoose.Model<BlogDocument>) ||
  mongoose.model<BlogDocument>("Blog", BlogSchema);
