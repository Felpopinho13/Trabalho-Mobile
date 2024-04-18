import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepositories"; import { hash } from "bcryptjs";
interface ICategoryRequest {
    name: string,  id: string;   
  }  
  class UpdateCategoryService {
    async execute({ name, id  }: ICategoryRequest) {
      const categoryRepository = getCustomRepository(CategoryRepository);
      const categoryAlreadyExists = await categoryRepository.findOne({
        id,
      });
      if (!categoryAlreadyExists) {
          throw new Error("User not exists")
      }
      categoryAlreadyExists.name=name
      return await categoryRepository.update(id,categoryAlreadyExists)
    }
  }  
  export { UpdateCategoryService };