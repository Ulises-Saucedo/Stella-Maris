<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const postStore = usePostStore();
const userStore = useUserStore();
const { posts, pages } = storeToRefs(postStore);
const { getPosts, removePost } = postStore;
const { user, token } = storeToRefs(userStore);

const isPossiblePaginate = computed(() => pages.value > 1);

useHead({
  title: "Novedades",
});

const paginate = (page: number) => {
  router.push({ query: { ...route.query, page } });
};

watch(
  () => [route.query],
  async () => {
    const page: number = parseInt(route.query.page as string, 10) || 1;
    const limit: number = parseInt(route.query.limit as string, 10) || 6;

    await getPosts(page, limit);
  }
);

await getPosts();
</script>

<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <b-div margin="y-5">
      <h2>
        <mark> Novedades </mark>
      </h2>

      <b-div class="row" margin="y-3">
        <b-div
          col="12 sm-6"
          gutter="x-3"
          v-for="post in posts"
          :key="post._id"
          margin="b-3"
        >
          <Card>
            <CardImgTop
              :src="'http://localhost:3000/api/post/media/' + post.preview"
              width="100%"
              height="250px"
              :alt="post.title"
            />
            <CardBody>
              <CardTitle>{{ post.title }}</CardTitle>
              <b-a :href="'/novedades/' + post._id" button="primary">
                Ver noticia
              </b-a>
              <b-button
                @click="removePost(post._id)"
                button="danger"
                margin="s-2"
                v-if="user && token"
              >
                Eliminar post
              </b-button>
            </CardBody>
          </Card>
        </b-div>
      </b-div>

      <Pagination v-if="isPossiblePaginate" justify-content="center">
        <PageItem v-for="page in pages">
          <PageLink @click="paginate(page)">{{ page }}</PageLink>
        </PageItem>
      </Pagination>
    </b-div>
  </b-div>
</template>
