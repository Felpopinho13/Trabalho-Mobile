import { hash } from "bcryptjs";
import { ClientRepositories } from "../../repositories/ClientRepositories";
import { getCustomRepository } from "typeorm";
interface IClientRequest {   
    nome: string; CPF: string; email: string; endereco: string; bairro: string; cidade: string; estado: string }
class CreateClientService {
  async execute({ nome, CPF, email, endereco, bairro, cidade, estado }: IClientRequest) {
    if (!CPF) {
      throw new Error("CPF incorreto");
    }
    const clientRepository = getCustomRepository(ClientRepositories);
    const clientAlreadyExists = await clientRepository.findOne({
        CPF,
    });
    if (clientAlreadyExists) {
      throw new Error("Client already exists");
    }
    const user = clientRepository.create({ nome, CPF, email, endereco, bairro, cidade, estado });
    await clientRepository.save(user);
    return user;
  }
}
export { CreateClientService };
