import { z } from "zod";

export const registerSchema = z.object({
  email: z
    .string({
      required_error: "El email es un campo requerido",
    })
    .email({
      message: "La dirección de correo electrónico no es válida",
    }),
  password: z
    .string({
      required_error: "La contraseña es un campo requerido",
      invalid_type_error: "La contraseña debe ser una cadena de caracteres",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(30, {
      message: "La contraseña debe tener como máximo 30 caracteres",
    }),
  role: z.enum(["admin", "superadmin"], {
    errorMap: (issue, ctx) => ({ message: "Este rol no existe" }),
  }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es un campo requerido",
    })
    .email({
      message: "La dirección de correo electrónico no es válida",
    }),
  password: z
    .string({
      required_error: "La contraseña es un campo requerido",
      invalid_type_error: "La contraseña debe ser una cadena de caracteres",
    })
    .min(8, {
      message: "La contraseña debe tener al menos 8 caracteres",
    })
    .max(30, {
      message: "La contraseña debe tener como máximo 30 caracteres",
    }),
});

export const updatedUserSchema = registerSchema.partial();
