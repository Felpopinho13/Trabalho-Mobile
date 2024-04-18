import { hash } from "bcryptjs";
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { getCustomRepository } from "typeorm";
interface IProductRequest { nome: string; }
class CreateProductService {
    async execute({ nome }: IProductRequest) {
    if (!nome) {
      throw new Error("Name incorreto");
    }
    const productRepository = getCustomRepository(ProductRepositories);
    const productAlreadyExists = await productRepository.findOne({

    });
    if (productAlreadyExists) {
        throw new Error("Product already exists");
    }
        // const passwordHash = await hash(password, 8);
        const product = productRepository.create({ });
        await productRepository.save(product);
        return product;
    }
}
export { CreateProductService };
