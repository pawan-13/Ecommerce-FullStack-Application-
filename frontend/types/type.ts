export type RegisterRequest = {
  username: string,
  email: string,
  password: string,
}

export type RegisterResponse = {
  message: string;
};

export type LoginResponse = {
  user: object;
  message: string;
};