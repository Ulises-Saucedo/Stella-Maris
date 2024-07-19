import type { Post } from "~/ts/types/post.types";

export const usePostStore = defineStore(
  "post",
  () => {
    const posts: Ref<Post[]> = ref([]);
    const post: Ref<Post | null> = ref(null);
    const store = useUserStore();
    const { token } = storeToRefs(store);
    const { $toast }: any = useNuxtApp();
    const pages: Ref<number> = ref(0);

    const getPosts = async (page?: number, limit?: number): Promise<void> => {
      const {
        posts: response,
        pages: responsePages,
      }: { posts: Post[]; pages: number } = await PostService.getPosts(
        page,
        limit
      );

      posts.value = response;
      pages.value = responsePages;
    };

    const createPost = async (
      title: string,
      content: string
    ): Promise<string | void> => {
      try {
        const {
          post: { _id },
        }: { post: { _id: string } } = await PostService.createPost(
          title,
          content,
          token.value as string
        );

        $toast.success("Post creado exitosamente.");

        return _id;
      } catch (e) {
        $toast.error("Hubo un error al crear el post. Intente más tarde.");
      }
    };

    const uploadPreview = async (
      postId: string,
      file0: File
    ): Promise<void> => {
      try {
        await PostService.uploadPreview(postId, file0, token.value as string);
      } catch (e) {
        $toast.error("Hubo un error al subir la imagen de previsualización.");
      }
    };

    const removePost = async (postId: string) => {
      try {
        await PostService.removePost(postId, token.value as string);

        posts.value = posts.value.filter((post) => post._id !== postId);

        $toast.success("Post eliminado exitosamente.");
      } catch (e) {
        $toast.error("Hubo un error al eliminar el post.");
      }
    };

    return {
      posts,
      post,
      pages,
      getPosts,
      createPost,
      uploadPreview,
      removePost,
    };
  },
  { persist: true }
);
