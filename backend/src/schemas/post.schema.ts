import { z } from "zod";

export const postSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es un campo requerido",
      invalid_type_error: "El titulo debe ser una cadena de caracteres",
    })
    .min(6, {
      message: "El titulo debe tener al menos 6 caracteres",
    })
    .max(50, {
      message: "El titulo debe tener como maximo 50 caracteres",
    }),
  content: z
    .string({
      required_error: "El contenido es un campo requerido",
      invalid_type_error: "El contenido debe ser una cadena de caracteres",
    })
    .min(50, {
      message: "El contenido debe tener al menos 50 caracteres",
    })
    .max(1255, {
      message: "El contenido debe tener como maximo 1255 caracteres",
    }),
});

export const updatedPostSchema = postSchema.partial();
