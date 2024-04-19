import { Request, Response } from "express";
import { UpdateSalesService } from "../../services/sales/UpdateSalesService";

class UpdateSalesController {

  async handle(request: Request, response: Response) {
    const { id, codproduto, produto, cliente, quantidade, valor, desconto } = request.body;

    const updateSalesService = new UpdateSalesService();

    const sales = await updateSalesService.execute({
      id, 
      codproduto, 
      produto, 
      cliente, 
      quantidade, 
      valor, 
      desconto
    });
 
    return response.json(sales);
  }
}

export { UpdateSalesController };