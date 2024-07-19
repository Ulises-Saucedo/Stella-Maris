export type User = {
  id: string;
  email: string;
  role: string;
};

export type updatedUser = {
  email?: string;
  password?: string;
};

export type loginRequest = {
  email: string;
  password: string;
};

export type createUserRequest = {
  email: string;
  password: string;
  role: string;
};
