import { compare } from "bcryptjs"; import { sign } from "jsonwebtoken"; import { getCustomRepository } from "typeorm"; 
import { ClientRepositories } from "../../repositories/ClientRepositories";
interface IAuthenticateRequest {  CPF: string 
}
class AuthenticateClientService {
  async execute({ CPF }: IAuthenticateRequest) {  
    const clientRepositories = getCustomRepository(ClientRepositories);
    const client = await clientRepositories.findOne({ CPF });
    if(!client){
        throw new Error("CPF incorreto");
    }
    const token = sign(
      {         CPF:client.CPF,  },
      "123456"
    );    
    return token;
  }
}
export { AuthenticateClientService };
