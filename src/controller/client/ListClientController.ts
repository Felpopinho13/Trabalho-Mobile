import { Request, Response } from "express";
import { ListClientService } from "../../services/client/ListClientService";

class ListClientController {
  async handle(request: Request, response: Response) {
    const listClientService = new ListClientService();

    const client = await listClientService.execute();

    return response.json(client);
  }
}

export { ListClientController };