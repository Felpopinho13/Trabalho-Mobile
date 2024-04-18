import { Request, Response } from "express";
import { AuthenticateSalesService } from "../../services/sales/AuthenticateSalesServices";

class AuthenticateSalesController {
  async handle(request: Request, response: Response) {
        const { codproduto } = request.body;

        const authenticateSalesService = new AuthenticateSalesService();

        const token = await authenticateSalesService.execute({
        codproduto
        });

    return response.json(token);
  }
}

export { AuthenticateSalesController };