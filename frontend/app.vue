<script setup lang="ts">
useHead({
  titleTemplate: "%s | Stella Maris",
});
</script>

<template>
  <Toaster position="top-right" richColors />

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
