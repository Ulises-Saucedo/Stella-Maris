import type { User } from "~/ts/types/user.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useUserStore();
  const { user, token } = storeToRefs(store);
  const router = useRouter();

  if (import.meta.client) {
    try {
      const { user: response }: { user: User } = await AuthService.verify(
        token.value as string
      );

      if (response.role !== "superadmin") {
        return router.push("/login");
      }

      user.value = response;
    } catch (e) {
      user.value = null;
      token.value = null;

      router.push("/login");
    }
  }
});
