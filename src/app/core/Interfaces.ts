import { User } from "./Models";


export interface IUser {
  id: number | null;
  userName: string | null;
  email: string | null;
  password: string | null;
}

export interface LoginRespone {
  user: User,
  token: string
}

export interface Image_uris{
  png: string
}

export interface ICards{
  id: number | null;
  name: string | null;
  image_uris: Image_uris | null | undefined;
}
