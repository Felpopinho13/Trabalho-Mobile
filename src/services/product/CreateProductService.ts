import { hash } from "bcryptjs";
import { ProductRepositories } from "../../repositories/ProductRepositories";
import { getCustomRepository } from "typeorm";
interface IProductRequest { nome: string; validade:string; fabricante: string; precoEstoque: string;}
class CreateProductService {
    async execute({ nome, validade, fabricante, precoEstoque }: IProductRequest) {
    if (!nome) {
      throw new Error("Nome incorreto");
    }
    const productRepository = getCustomRepository(ProductRepositories);
    const productAlreadyExists = await productRepository.findOne({

    });
    if (productAlreadyExists) {
        throw new Error("Product already exists");
    }
        // const passwordHash = await hash(password, 8);
        const product = productRepository.create({ nome, validade, fabricante, precoEstoque });
        await productRepository.save(product);
        return product;
    }
}
export { CreateProductService };
