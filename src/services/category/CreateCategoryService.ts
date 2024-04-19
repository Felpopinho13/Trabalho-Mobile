import { hash } from "bcryptjs";
import { CategoryRepository } from "../../repositories/CategoryRepositories";
import { getCustomRepository } from "typeorm";
interface ICategoryRequest {   name: string;
   }
class CreateCategoryService {
  async execute({ name}: ICategoryRequest) {
    if (!name) {
      throw new Error("Categoria incorreto");
    }
    const categoryRepository = getCustomRepository(CategoryRepository);
    const categoryAlreadyExists = await categoryRepository.findOne({
      name
    });
    if (categoryAlreadyExists) {
      throw new Error("User already exists");
    }
    const category = categoryRepository.create({  name  });
    await categoryRepository.save(category);
    return category;
  }
}
export { CreateCategoryService };
