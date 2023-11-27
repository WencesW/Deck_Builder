import { IUser, ICards } from "./Interfaces";

export class User implements IUser {

  id: number | null;
  userName: string | null;
  email: string | null;
  password: string | null;

  constructor(user?: any) {
    this.id = user.id != null ? user.id : null;
    this.userName = user.userName != null ? user.userName : null;
    this.email = user.email != null ? user.email : null;
    this.password = user.password != null ? user.password : null;
  }

}

export class Cards implements ICards {

  id: number | null;
  name: string | null;
  png: string | null;

  constructor(card?: any) {
    this.id = card.id != null ? card.id : null;
    this.name = card.name != null ? card.userName : null;
    this.png = card.png != null ? card.png : null;
  }

}