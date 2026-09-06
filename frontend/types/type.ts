import type { StaticImageData } from "next/image";

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

export type profileUIData = {
  name: string;
  link: string;
}

export type categoryData = {
  name: string;
  pieces: string;
  image: StaticImageData;
}