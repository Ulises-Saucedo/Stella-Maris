import mongoose, { Schema } from "mongoose";
import { IPost } from "../ts/interfaces/post.interfaces";
import paginate from "mongoose-paginate-v2";

const PostSchema: Schema<IPost> = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      default: "default.png",
    },
    created_by: {
      type: String,
      default: "Stella Maris",
    },
  },
  { timestamps: true }
);

PostSchema.plugin(paginate);

const Post = mongoose.model<IPost, mongoose.PaginateModel<IPost>>(
  "post",
  PostSchema
);

export default Post;
