<script setup lang="ts">
const props = defineProps({
  value: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
});

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: props.value,
});
</script>

<template>
  <b-div margin="t-3 e-3" display="inline-block">
    <b-label :label="label" :label-for="name" v-if="label" margin="y-0 e-2">
      {{ label }}
    </b-label>
    <Field
      :name="name"
      :value="inputValue"
      type="radio"
      @input="handleChange"
    />

    <b-div v-if="!!errorMessage" class="text-danger">{{ errorMessage }}</b-div>
  </b-div>
</template>
