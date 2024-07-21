import { UsersServices } from "./../../services/users/usersServices";
import { Request, response, Response } from "express";


export class Users {
  private usersServices: UsersServices;

  constructor() {
    this.usersServices = new UsersServices()
  }
  async create(request: Request, response: Response) {
    const { username, password } = request.body;
    this.usersServices.create(username, password)
    response.status(201).json({});
  }
}
