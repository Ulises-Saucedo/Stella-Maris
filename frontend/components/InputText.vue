<script setup lang="ts">
const props = defineProps({
  type: {
    type: String,
    default: "text",
  },
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
  placeholder: {
    type: String,
    default: "",
  },
});

const {
  value: inputValue,
  errorMessage,
  handleChange,
} = useField(props.name, undefined, {
  initialValue: "",
});
</script>

<template>
  <b-div margin="t-3">
    <b-label :id="id" :label="label" :label-for="id" v-if="label" margin="0">
      {{ label }}
    </b-label>
    <BFormInput
      :id="id"
      :name="name"
      :type="type"
      :value="inputValue"
      :placeholder="placeholder"
      @input="handleChange"
    />

    <b-div v-if="!!errorMessage" class="text-danger">{{ errorMessage }}</b-div>
  </b-div>
</template>
