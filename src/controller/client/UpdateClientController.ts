import { Request, Response } from "express";
import { UpdateClientService } from "../../services/client/UpdateClientService";

class UpdateClientController {
  async handle(request: Request, response: Response) {
    const { id, nome, CPF, email, endereco, bairro, cidade, estado } = request.body;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute({
        id, 
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

export { UpdateClientController };