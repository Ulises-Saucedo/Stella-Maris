<script lang="ts" setup>
definePageMeta({
  middleware: ["get-post"],
});

const store = usePostStore();
const { post } = storeToRefs(store);
const editor = useEditor({
  content: post.value?.content,
  extensions: [TiptapStarterKit],
  editable: false,
});

onBeforeUnmount(() => {
  unref(editor)?.destroy();
});
</script>
<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <b-h2 margin="b-4">
      <mark>{{ post?.title }}</mark>
    </b-h2>
    <b-img
      :src="'http://localhost:3000/api/post/media/' + post?.preview"
      :alt="post?.title"
      width="100%"
      ratio="16x9"
      rounded
      margin="b-4"
    ></b-img>
    <TiptapEditorContent :editor="editor" />
  </b-div>
</template>
