import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .min(6, "El titulo debe tener al menos 6 caracteres")
    .max(50, "El titulo debe tener como maximo 50 caracteres"),
  content: yup
    .string()
    .min(50, "El contenido debe tener al menos 50 caracteres")
    .max(1255, "El contenido debe tener como maximo 1255 caracteres"),
  preview: yup
    .mixed()
    .required("La imagen es requerida")
    .test("fileFormat", "Formato no soportado", (value: any): boolean => {
      const SUPPORTED_FORMATS = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/webp",
        "image/gif",
      ];

      return SUPPORTED_FORMATS.includes(value.type);
    }),
});

export const updatedSchema = postSchema.partial();
