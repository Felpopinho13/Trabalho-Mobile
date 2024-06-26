import { Request, Response } from "express";
import { CreateClientService } from "../../services/client/CreateClientService";

class CreateClientController {
  async handle(request: Request, response: Response) {
   const { nome, CPF, email, endereco, bairro, cidade, estado } = request.body;
   const createClientService = new CreateClientService();
   const client = await createClientService.execute({
    nome, 
    CPF, 
    email, 
    endereco, 
    bairro, 
    cidade, 
    estado
   });
 
    return response.json(client);
  }
}

export { CreateClientController };