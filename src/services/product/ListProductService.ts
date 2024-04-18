import { getCustomRepository } from "typeorm";
import { ProductRepositories } from "../../repositories/ProductRepositories";

class ListProductService {
  async execute() {
    const productRepositories = getCustomRepository(ProductRepositories);

    const product = await productRepositories.find();

    return product;
  }
}

export { ListProductService };