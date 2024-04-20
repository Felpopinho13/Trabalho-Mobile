import { Request, Response } from "express";
import { UpdateProductService } from "../../services/product/UpdateProductService";
class UpdateProductController {

  async handle(request: Request, response: Response) {
    const { id, nome, validade, fabricante, precoEstoque  } = request.body;

    const updateProductService = new UpdateProductService();

    const product = await updateProductService.execute({
      id,
      nome,
      validade,
      fabricante,
      precoEstoque
    });
 
    return response.json(product);
  }
}

export { UpdateProductController };