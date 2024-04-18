import { Request, Response } from "express";
import { ListSalesService } from "../../services/sales/ListSalesService";

class ListSalesController {
  async handle(request: Request, response: Response) {
    const listUsersService = new ListSalesService();

    const users = await listUsersService.execute();

    return response.json(users);
  }
}

export { ListSalesController };