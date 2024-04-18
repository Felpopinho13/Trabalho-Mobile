import { compare } from "bcryptjs"; import { sign } from "jsonwebtoken"; import { getCustomRepository } from "typeorm"; 
import { ProductRepositories } from "../../repositories/ProductRepositories";
interface IAuthenticateRequest {  nome:string   
}
class AuthenticateProductService {
  async execute({ nome }: IAuthenticateRequest) {  
    const productRepositories = getCustomRepository(ProductRepositories);
    const product = await productRepositories.findOne({ nome });
    if(!nome){
        throw new Error("Nome incorreto");
    }
    // const passwordMatch = await compare(password, user?.password);
    // if (!passwordMatch) {
    //   throw new Error("Password incorrect");
    // }
    const token = sign(
      { product:product.nome, },
      "123456"
    //   { subject: (user.admin?"Admin":"others"), expiresIn: "1d", }
    );    
    return token;
  }
}
export { AuthenticateProductService };
