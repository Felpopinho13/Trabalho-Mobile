import { compare } from "bcryptjs"; import { sign } from "jsonwebtoken"; import { getCustomRepository } from "typeorm"; 
import { CategoryRepository } from "../../repositories/CategoryRepositories";
interface IAuthenticateRequest {  name: string 
}
class AuthenticateClientService {
  async execute({ name }: IAuthenticateRequest) {  
    const categoryRepositories = getCustomRepository(CategoryRepository);
    const category = await categoryRepositories.findOne({ name });
    if(!name){
        throw new Error("CPF incorreto");
    }
    const token = sign(
      { name:category.name, },
      "123456"
      // { subject: (client.CPF?"cpf":"others"), expiresIn: "1d", }

    );    
    return token;
  }
}
export { AuthenticateClientService };
