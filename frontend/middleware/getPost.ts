import type { Post } from "~/ts/types/post.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = usePostStore();
  const { post } = storeToRefs(store);
  const postId = to.params.novedadId as string;

  try {
    const { post: response }: { post: Post } = await PostService.getPost(
      postId
    );

    post.value = response;

    useHead({
      title: response.title,
    });
  } catch (e: any) {
    return navigateTo("/404");
  }
});
