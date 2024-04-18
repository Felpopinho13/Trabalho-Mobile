import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
    async handle(request: Request, response: Response) {
    const { nome } = request.body;
    const createProductService = new CreateProductService();
    const product = await createProductService.execute({
        nome
    });
    
        return response.json(product);
    }
}

export { CreateProductController };