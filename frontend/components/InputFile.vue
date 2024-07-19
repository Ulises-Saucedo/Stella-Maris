<script setup lang="ts">
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
});

const { errorMessage, handleChange } = useField(props.name, undefined, {
  initialValue: "",
});
</script>

<template>
  <b-div margin="t-3">
    <b-label :id="id" :label="label" :label-for="id" v-if="label" margin="0">
      {{ label }}
    </b-label>
    <BFormFile
      type="file"
      :id="id"
      :name="name"
      @input="handleChange"
      accept="image/jpeg, image/jpg, image/png, image/webp, image/gif"
    />

    <b-div v-if="!!errorMessage" class="text-danger">{{ errorMessage }}</b-div>
  </b-div>
</template>
