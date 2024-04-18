import { Request, Response } from "express";
import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    const listCategoryService = new ListCategoryService();

    const category = await listCategoryService.execute();

    return response.json(category);
  }
}

export { ListUsersController };