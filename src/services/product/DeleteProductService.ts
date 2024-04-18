import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";
interface IProductDelete {
    id: string;
}
class DeleteProductService {
  async execute({id}:IProductDelete) {
      const productRepository = getCustomRepository(ProductRepositories);
      const productAlreadyExists = await productRepository.findOne({
        id,
      });

      if (!productAlreadyExists) {
          throw new Error("Product not exists");
      }
      return await productRepository.delete(id);           
  }
}
export { DeleteProductService };