import { UsersServices } from "./../../services/users/usersServices";
import { Request, Response } from "express";

export class Users {
  private usersServices: UsersServices;

  constructor() {
    this.usersServices = new UsersServices();
  }
  async create(request: Request, response: Response) {
    console.log(request.body);
    const { username, password, email } = request.body;
    const user = await this.usersServices.create(username, password, email);
    response.status(201).json({ message: "usuario criado", user });
  }
  async login(request: Request, response: Response) {
    console.log(request.body);
    const { email, password } = request.body;
    const userLogin = await this.usersServices.login(email, password);
    if (userLogin) {
      response
        .status(200)
        .json({ message: "login efetuado com sucesso", userLogin });
    } else {
      response.status(400).json({ message: "Credenciais negadas" });
    }
  }
  async update(request: Request, response: Response) {
    const { id, username, password } = request.body;
    const userUpdated = await this.usersServices.update(id, username, password);
    response.status(201).json({ message: "usuario atualizado", userUpdated });
  }
  async find(response: Response) {
    const usuarios = await this.usersServices.find();
    response.status(201).json({ usuarios });
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userDelete = await this.usersServices.delete(+id);
    response.status(201).json({ message: "usuario deletado", userDelete });
  }
}
