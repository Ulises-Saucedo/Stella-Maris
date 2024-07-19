// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  devServer: {
    port: 8080,
  },
  modules: [
    "usebootstrap",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vee-validate/nuxt",
    "nuxt-tiptap-editor",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  veeValidate: {
    autoImports: true,
  },
  tiptap: {
    prefix: "Tiptap",
  },
  imports: {
    dirs: ["services", "schemas"],
  },
  build: {
    transpile: ["vue-sonner"],
  },
  routeRules: {
    "/": { ssr: false },
    "/historia": { ssr: false },
    "/novedades": { ssr: false },
    "/novedades/:novedadId": { ssr: true },
    "/novedades/crear": { ssr: false },
    "/dashboard": { ssr: false },
    "/login": { ssr: false },
    "/404": { ssr: false },
  },
});
