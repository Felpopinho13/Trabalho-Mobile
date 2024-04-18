import { getCustomRepository } from "typeorm";
import { ClientRepositories } from "../../repositories/ClientRepositories"; import { hash } from "bcryptjs";
interface IClientRequest {
    id: string; nome: string; CPF: string; email: string; endereco: string; bairro: string; cidade: string; estado: string; 
}  
class UpdateClientService {
    async execute({ id, nome, CPF, email, endereco, bairro, cidade, estado }: IClientRequest) {
    const clientRepository = getCustomRepository(ClientRepositories);
    const clientAlreadyExists = await clientRepository.findOne({
        id,
    });
    if (!clientAlreadyExists) {
        throw new Error("Client not exists")
    }
    clientAlreadyExists.nome=nome
    clientAlreadyExists.CPF=CPF
    clientAlreadyExists.email=email
    clientAlreadyExists.endereco=endereco
    clientAlreadyExists.bairro=bairro
    clientAlreadyExists.cidade=cidade
    clientAlreadyExists.estado=estado
    clientAlreadyExists.updated_at=new Date()
    return await clientRepository.update(id,clientAlreadyExists)
    }
}  
export { UpdateClientService };