export type Post = {
  _id: string;
  title: string;
  content: string;
  preview: string;
  created_by: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
};

export type PostRequest = {
  title: string;
  content: string;
  preview?: File;
};
