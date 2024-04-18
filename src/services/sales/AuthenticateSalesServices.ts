import { compare } from "bcryptjs"; import { sign } from "jsonwebtoken"; import { getCustomRepository } from "typeorm"; 
import { SalesRepositories } from "../../repositories/SalesRepositories";
interface IAuthenticateRequest {  codproduto: number
}
class AuthenticateSalesService {
  async execute({ codproduto }: IAuthenticateRequest) {  
    const salesRepositories = getCustomRepository(SalesRepositories);
    const sales = await salesRepositories.findOne({ codproduto });
    if(!codproduto){
        throw new Error("Codigo incorreto");
    }
    const token = sign(
      {  codproduto:sales.codproduto, },
      "123456",
    );    
    return token;
  }
}
export { AuthenticateSalesService };
