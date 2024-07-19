import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email incorrecto")
    .required("Campo requerido"),
  password: yup
    .string()
    .min(8, "Mínimo 8 caracteres")
    .required("Campo requerido"),
});

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .email("Formato de email incorrecto")
    .required("Campo requerido"),
  password: yup
    .string()
    .min(8, "Mínimo 8 caracteres")
    .required("Campo requerido"),
  role: yup.string().required("Campo requerido"),
});
