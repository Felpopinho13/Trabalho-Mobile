import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService";
class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteCategoryService= new DeleteCategoryService();

   const msg = await deleteCategoryService.execute({
     id
   });

   return response.json("Registro excluido com sucesso");
  }
}

export { DeleteCategoryController };