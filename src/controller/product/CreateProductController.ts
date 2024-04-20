import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
    const { nome, validade, fabricante, precoEstoque } = request.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
        nome,
        validade,
        fabricante,
        precoEstoque
    });
    
        return response.json(product);
    }
}

export { CreateProductController };