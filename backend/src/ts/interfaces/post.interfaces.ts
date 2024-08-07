import { Document } from "mongoose";

export interface IPost extends Document {
  _id: string;
  title: string;
  content: string;
  preview: string;
  created_by: string;
}
