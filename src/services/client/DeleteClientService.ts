import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientRepositories";
interface IClientDelete {
    id: string;
}
class DeleteClientService {
  async execute({id}:IClientDelete) {
      const clientRepository = getCustomRepository(ClientRepositories);
      const clientAlreadyExists = await clientRepository.findOne({
        id,
      });

      if (!clientAlreadyExists) {
          throw new Error("Client not exists");
      }
      return await clientRepository.delete(id);           
  }
}
export { DeleteClientService };