<script setup lang="ts">
import { createUserSchema } from "~/schemas/auth.schema";
import type { createUserRequest } from "~/ts/types/user.types";

useHead({
  title: "Crear usuario",
});

definePageMeta({
  middleware: ["superadmin"],
});

const { createUser } = useUserStore();

const { handleSubmit, resetForm } = useForm<createUserRequest>({
  validationSchema: createUserSchema,
});

const onSubmit = handleSubmit(
  async (user: createUserRequest): Promise<void> => {
    const { email, password, role } = user;

    await createUser(email, password, role);

    resetForm();
  }
);
</script>

<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <b-form @submit.prevent="onSubmit">
      <InputText
        type="email"
        id="email"
        name="email"
        label="Email"
        placeholder="johndoe@gmail.com"
      />

      <InputText
        type="password"
        id="password"
        name="password"
        label="Contraseña"
        placeholder="12345678"
      />

      <InputRadio name="role" label="Admin" value="admin" />

      <InputRadio name="role" label="Superadmin" value="superadmin" />

      <b-div display="grid">
        <b-button type="submit" button="outline-primary" margin="t-3">
          Crear usuario
        </b-button>
      </b-div>
    </b-form>
  </b-div>
</template>
