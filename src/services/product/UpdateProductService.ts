import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories"; import { hash } from "bcryptjs";
interface IProductRequest {
    id: string;   nome: string; validade:string; fabricante: string; precoEstoque: string;
  }  
  class UpdateProductService {
    async execute({ id, nome, validade, fabricante, precoEstoque }: IProductRequest) {
      const productRepository = getCustomRepository(ProductRepositories);
      const productAlreadyExists = await productRepository.findOne({
        id,
      });
      if (!productAlreadyExists) {
          throw new Error("Product not exists")
      }
    //   const passwordHash = await hash(password, 8)
    productAlreadyExists.nome=nome,
    productAlreadyExists.validade=validade,
    productAlreadyExists.fabricante=fabricante,
    productAlreadyExists.precoEstoque=precoEstoque,
    productAlreadyExists.updated_at=new Date()
    // productAlreadyExists.password=passwordHash
      return await productRepository.update(id,productAlreadyExists)
    }
  }  
  export { UpdateProductService };