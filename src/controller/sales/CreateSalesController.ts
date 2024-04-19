import { Request, Response } from "express";
import { CreateSalesService } from "../../services/sales/CreateSalesService";

class CreateSalesController {
async handle(request: Request, response: Response) {
const { codproduto, produto, cliente, quantidade, valor, desconto } = request.body;
const createSalesService = new CreateSalesService();
const sales = await createSalesService.execute({
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

export { CreateSalesController };