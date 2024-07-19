<script setup lang="ts">
import { loginSchema } from "~/schemas/auth.schema";
import type { loginRequest } from "~/ts/types/user.types";

useHead({
  title: "Iniciar sesión",
});

const { login } = useUserStore();

const { handleSubmit } = useForm<loginRequest>({
  validationSchema: loginSchema,
});

const onSubmit = handleSubmit(async (session: loginRequest): Promise<void> => {
  const { email, password } = session;

  await login(email, password);
});
</script>

<template>
  <b-div style="max-width: 800px" margin="x-auto">
    <form @submit.prevent="onSubmit">
      <InputText
        type="email"
        id="email"
        name="email"
        label="Email"
        placeholder="johndoe@gmail.co"
      />

      <InputText
        type="password"
        id="password"
        name="password"
        label="Contraseña"
        placeholder="12345678"
      />

      <b-div display="grid">
        <b-button type="submit" button="outline-primary" margin="t-3">
          Iniciar sesión
        </b-button>
      </b-div>
    </form>
  </b-div>
</template>
