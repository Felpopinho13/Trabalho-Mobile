import { Request, Response } from "express";
import { AuthenticateCategoryService } from "../../services/category/AuthenticateCategoryService";

class AuthenticateCategoryController {
  async handle(request: Request, response: Response) {
    const { name } = request.body;

    const authenticateCategoryService = new AuthenticateCategoryService();

    const token = await authenticateCategoryService.execute({
      name
    });
    return response.json(token);
  }
}

export { AuthenticateCategoryController };