import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientRepositories";

class ListClientService {
  async execute() {
    const clientRepositories = getCustomRepository(ClientRepositories);

    const client = await clientRepositories.find();

    return client;
  }
}

export { ListClientService };