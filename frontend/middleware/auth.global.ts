import type { User } from "~/ts/types/user.types";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const store = useUserStore();
  const { user, token } = storeToRefs(store);

  if (import.meta.client) {
    try {
      const { user: response }: { user: User } = await AuthService.verify(
        token.value as string
      );

      user.value = response;
    } catch (e) {
      user.value = null;
      token.value = null;
    }
  } else {
    try {
      const { user: response }: { user: User } = await AuthService.verify(
        token.value as string
      );

      user.value = response;
    } catch (e) {
      user.value = null;
      token.value = null;
    }
  }
});
