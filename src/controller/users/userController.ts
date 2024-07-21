import { UsersServices } from "./../../services/users/usersServices";
import { Request, Response } from "express";

export class Users {
  private usersServices: UsersServices;

  constructor() {
    this.usersServices = new UsersServices();
  }
  async create(request: Request, response: Response) {
    const { username, password } = request.body;
    const user = await this.usersServices.create(username, password);
    response.status(201).json({message: 'usuario criado', user});
  }
  async update(request: Request, response: Response) {
    const { id, username, password } = request.body;
    const userUpdated = await this.usersServices.update(id, username, password);
    response.status(201).json({message: 'usuario atualizado', userUpdated});
  }
  async find(response: Response) {
    const usuarios = await this.usersServices.find();
    response.status(201).json({ usuarios });
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const userDelete = await this.usersServices.delete(+id);
    response.status(201).json({message: 'usuario deletado', userDelete});
  }
}
