import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";
class DeleteProductController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteProductService= new DeleteProductService();

   const msg = await deleteProductService.execute({
     id
   });

   return response.json("Registro excluido com sucesso");
  }
}

export { DeleteProductController };