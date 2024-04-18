import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories"; import { hash } from "bcryptjs";
interface IProductRequest {
    id: string;   nome: string;
  }  
  class UpdateProductService {
    async execute({ id, nome }: IProductRequest) {
      const productRepository = getCustomRepository(ProductRepositories);
      const productAlreadyExists = await productRepository.findOne({
        id,
      });
      if (!productAlreadyExists) {
          throw new Error("Product not exists")
      }
    //   const passwordHash = await hash(password, 8)
    productAlreadyExists.nome=nome
    productAlreadyExists.updated_at=new Date()
    // productAlreadyExists.password=passwordHash
      return await productRepository.update(id,productAlreadyExists)
    }
  }  
  export { UpdateProductService };