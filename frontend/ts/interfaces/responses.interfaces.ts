import type { User } from "../types/user.types";
import type { Post } from "../types/post.types";

interface IBasicResponse {
  status: number;
}

export interface ILoginResponse extends IBasicResponse {
  message: string;
  token: string;
}

export interface IRegisterResponse extends IBasicResponse {
  message: string;
}

export interface IUpdateUserResponse extends IBasicResponse {
  message: string;
  user: User;
}

export interface IDeleteUserResponse extends IBasicResponse {
  message: string;
}

export interface IUserResponse extends IBasicResponse {
  user: User;
}

export interface IPostsResponse extends IBasicResponse {
  posts: Post[];
  page: number;
  pages: number;
  total: number;
  limit: number;
}

export interface IPostResponse extends IBasicResponse {
  post: Post;
}

export interface IUpdatePostResponse extends IBasicResponse {
  message: string;
  post: Post;
}

export interface IDeletedPost extends IBasicResponse {
  message: string;
}
