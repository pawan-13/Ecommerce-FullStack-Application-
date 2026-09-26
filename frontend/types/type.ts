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

export type featureProductsData = {
  id: number;
  bname: string;
  pname: string;
  price: string;
  rating: string;
  reviews: string;
  viewproduct: string;
  image: string;
}