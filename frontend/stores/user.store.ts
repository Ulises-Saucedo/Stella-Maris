import type { User } from "~/ts/types/user.types";

export const useUserStore = defineStore(
  "user",
  () => {
    const user: Ref<User | null> = ref(null);
    const token: Ref<string | null> = ref(null);
    const router = useRouter();
    const { $toast }: any = useNuxtApp();

    const login = async (email: string, password: string): Promise<void> => {
      try {
        const { token: response }: { token: string } = await AuthService.login(
          email,
          password
        );

        token.value = response;

        $toast.info("Iniciaste sesión de manera correcta.");

        router.push("/");
      } catch (e) {
        $toast.error("Hubo un error al iniciar sesión, intente más tarde.");
      }
    };

    const createUser = async (
      email: string,
      password: string,
      role: string
    ): Promise<void> => {
      try {
        await AuthService.register(
          email,
          password,
          role,
          token.value as string
        );

        $toast.info("Usuario creado correctamente.");
      } catch (e) {
        $toast.error("Hubo un error al iniciar sesión, intente más tarde.");
      }
    };

    return {
      user,
      token,
      login,
      createUser,
    };
  },
  { persist: true }
);
