<script setup lang="ts">
useHead({
  title: "Inicio",
});

const store = usePostStore();
const { posts } = storeToRefs(store);
const { getPosts } = store;
const images = [
  "/carousel/1.jpg",
  "/carousel/2.jpg",
  "/carousel/3.jpg",
  "/carousel/4.jpg",
];

await getPosts();
</script>

<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <CarouselComponent :images="images" />

    <b-div margin="y-5">
      <h2>
        <mark> Instituto Stella Maris </mark>
      </h2>
      <b-div margin="y-3">
        <b-p font-size="5">
          Más de 29 años al servicio de la educación laica en Lanús Este.
          Enriquecemos a las futuras generaciones para que sean personas
          criteriosas, responsables y capaces de afrontar los retos futuros.
        </b-p>
        <b-p font-size="5" font-style="italic">
          “El principal objetivo de la educación es formar personas capaces de
          hacer cosas nuevas y no solamente repetir lo que otras generaciones
          hicieron”
        </b-p>
        <b-p font-size="5" font-style="italic">Jean Piaget</b-p>
      </b-div>
    </b-div>

    <b-div margin="y-5">
      <h2>
        <mark>
          <b-a link="dark" href="/novedades"> Ultimas novedades </b-a>
        </mark>
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
            </CardBody>
          </Card>
        </b-div>
      </b-div>
    </b-div>
  </b-div>
</template>
