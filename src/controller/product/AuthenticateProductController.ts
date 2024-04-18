import { Request, Response } from "express";
import { AuthenticateProductService } from "../../services/product/AuthenticateProductService";

class AuthenticateProductController {
  async handle(request: Request, response: Response) {
    const { nome } = request.body;

    const authenticateProductService = new AuthenticateProductService();

    const token = await authenticateProductService.execute({
      nome,
    });

    return response.json(token);
  }
}

export { AuthenticateProductController };