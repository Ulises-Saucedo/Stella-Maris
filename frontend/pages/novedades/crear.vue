<script setup lang="ts">
import type { PostRequest } from "~/ts/types/post.types";

useHead({
  title: "Crear post",
});

const { handleSubmit } = useForm<PostRequest>({
  validationSchema: postSchema,
});

const router = useRouter();
const store = usePostStore();
const { createPost, uploadPreview } = store;
const tiptap: any = ref(null);

const onSubmit = handleSubmit(async (post: PostRequest): Promise<void> => {
  const content = tiptap.value.getHTMLContent();
  const { title, preview } = post;

  const id = await createPost(title, content);
  if (id) {
    await uploadPreview(id, preview as File);
  }

  router.push("/novedades");
});
</script>

<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <form @submit.prevent="onSubmit" enctype="multipart/form-data">
      <InputText
        type="text"
        id="title"
        name="title"
        label="Título"
        placeholder="Super noticia"
      />

      <InputFile id="preview" name="preview" label="Preview" />

      <b-div margin="t-3">
        <b-label margin="0">Post</b-label>
        <TipTap ref="tiptap" />
      </b-div>

      <b-div display="grid">
        <b-button type="submit" button="outline-primary" margin="t-3">
          Crear post
        </b-button>
      </b-div>
    </form>
  </b-div>
</template>
