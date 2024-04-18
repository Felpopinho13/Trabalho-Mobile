import { Request, Response } from "express";
import { AuthenticateClientService } from "../../services/category/AuthenticateCategoryService";

class AuthenticateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const authenticateCategoryService = new AuthenticateClientService();

    const token = await authenticateCategoryService.execute({
      name
    });
    return response.json(token);
  }
}

export { AuthenticateCategoryController };