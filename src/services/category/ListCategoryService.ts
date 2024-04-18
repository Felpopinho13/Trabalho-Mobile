import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepositories";

class ListCategoryService {
  async execute() {
    const categoryRepositories = getCustomRepository(CategoryRepository);

    const category = await categoryRepositories.find();

    return category;
  }
}

export { ListCategoryService };