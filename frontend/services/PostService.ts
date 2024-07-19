import type {
  IPostResponse,
  IPostsResponse,
  IUpdatePostResponse,
  IDeletedPost,
} from "~/ts/interfaces/responses.interfaces";

export default {
  async getPosts(page?: number, limit?: number): Promise<IPostsResponse> {
    const params: Record<string, number> = {
      page: page || 1,
      limit: limit || 6,
    };

    return await $fetch("http://localhost:3000/api/post/list", {
      method: "GET",
      params,
    });
  },
  async getPost(postId: string): Promise<IPostResponse> {
    return await $fetch("http://localhost:3000/api/post/one/" + postId);
  },
  async createPost(
    title: string,
    content: string,
    token: string
  ): Promise<IPostResponse> {
    return await $fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });
  },
  async updatePost(
    postId: string,
    token: string,
    title?: string,
    content?: string
  ): Promise<IUpdatePostResponse> {
    return await $fetch("http://localhost:3000/api/post/update/" + postId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, content }),
    });
  },
  async removePost(postId: string, token: string): Promise<IDeletedPost> {
    return await $fetch("http://localhost:3000/api/post/remove/" + postId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async uploadPreview(
    postId: string,
    preview: File,
    token: string
  ): Promise<void> {
    const formData = new FormData();
    formData.append("file0", preview);

    return await $fetch("http://localhost:3000/api/post/upload/" + postId, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  },
};
