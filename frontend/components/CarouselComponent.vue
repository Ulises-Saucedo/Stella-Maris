<script setup lang="ts">
defineProps({
  images: {
    type: Array<string>,
    required: true,
  },
});
</script>

<template>
  <Carousel control rounded>
    <CarouselInner style="max-height: 500px" rounded ratio="4x3">
      <CarouselItem v-for="(image, i) in images" :key="i">
        <CarouselItemImage style="width: 100%" :src="image" fluid />
      </CarouselItem>
    </CarouselInner>
  </Carousel>
</template>
