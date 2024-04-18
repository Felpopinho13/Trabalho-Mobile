import { Request, Response } from "express";
import { DeleteSalesService } from "../../services/sales/DeleteSalesService";
class DeleteSalesController {
async handle(request: Request, response: Response) {
    
    const id = request.params.id;
    console.log(id)
    const deleteSalesService= new DeleteSalesService();

    const msg = await deleteSalesService.execute({
        id
    });

    return response.json("Registro excluido com sucesso");
    }
}

export { DeleteSalesController };