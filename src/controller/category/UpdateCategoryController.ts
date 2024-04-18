import { Request, Response } from "express";
import { UpdateCategoryService } from "../../services/category/UpdateCategoryService";
class UpdateCategoryController {

  async handle(request: Request, response: Response) {
    const { name, id } = request.body;

    const updateCategoryService = new UpdateCategoryService();

    const category = await updateCategoryService.execute({
      name, id
    });
 
    return response.json(category);
  }
}

export { UpdateCategoryController };