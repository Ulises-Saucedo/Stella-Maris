import type {
  IDeleteUserResponse,
  ILoginResponse,
  IRegisterResponse,
  IUpdateUserResponse,
  IUserResponse,
} from "~/ts/interfaces/responses.interfaces";
import type { updatedUser } from "~/ts/types/user.types";

export default {
  async login(email: string, password: string): Promise<ILoginResponse> {
    return await $fetch("http://localhost:3000/api/user/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  async register(
    email: string,
    password: string,
    role: string,
    token: string
  ): Promise<IRegisterResponse> {
    return await $fetch("http://localhost:3000/api/user/create", {
      method: "POST",
      body: JSON.stringify({ email, password, role }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async update(
    userId: string,
    body: updatedUser,
    token: string
  ): Promise<IUpdateUserResponse> {
    return await $fetch("http://localhost:3000/api/user/update/" + userId, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async remove(userId: string, token: string): Promise<IDeleteUserResponse> {
    return await $fetch("http://localhost:3000/api/user/remove/" + userId, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
  async verify(token: string): Promise<IUserResponse> {
    return await $fetch("http://localhost:3000/api/user/verifyToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};
