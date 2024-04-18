import { Request, Response } from "express";
import { ListProductService } from "../../services/product/ListProductService";

class ListProductController {
  async handle(request: Request, response: Response) {
    const listProductService = new ListProductService();

    const product = await listProductService.execute();

    return response.json(product);
  }
}

export { ListProductController };