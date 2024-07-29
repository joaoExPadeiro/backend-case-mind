import { Request, Response } from "express";
import { FinanceServices } from "../../services/finance/FinanceServices";

export class Finance {
  private financeServices: FinanceServices;

  constructor() {
    this.financeServices = new FinanceServices();
  }
  async create(request: Request, response: Response) {
    const { description, tipo, valor, userId } = request.body;
    const item = await this.financeServices.create(userId, description, tipo, valor);
    response.status(201).json({message: 'item criado', item});
  }
  async update(request: Request, response: Response) {
    const { id, description, tipo, valor } = request.body;
    const itemUpdated = await this.financeServices.update(id, description, tipo, valor);
    response.status(201).json({message: 'item atualizado', itemUpdated});
  }
  async find(response: Response) {
    const item = await this.financeServices.find();
    response.status(200).json({ item });
  }
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const itemDelete = await this.financeServices.delete(+id);
    response.status(201).json({message: 'item deletado', itemDelete});
  }
}
