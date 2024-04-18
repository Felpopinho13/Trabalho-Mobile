import { Request, Response } from "express";
import { DeleteClientService } from "../../services/client/DeleteClientService";
class DeleteClientController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const deleteClientService= new DeleteClientService();

   const msg = await deleteClientService.execute({
     id
   });

   return response.json("Registro excluido com sucesso");
  }
}

export { DeleteClientController };