import { Request, Response } from "express";
import { AuthenticateClientService } from "../../services/client/AuthenticateClientService";

class AuthenticateClientController {
  async handle(request: Request, response: Response) {
    const { CPF } = request.body;

    const authenticateClientService = new AuthenticateClientService();

    const token = await authenticateClientService.execute({
      CPF
    });
    return response.json(token);
  }
}

export { AuthenticateClientController };