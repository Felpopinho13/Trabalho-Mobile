import { getCustomRepository } from "typeorm";
import { CategoryRepository } from "../../repositories/CategoryRepositories";
interface IUserDelete {
    id: string;
}
class DeleteCategoryService {
  async execute({id}:IUserDelete) {
      const categoryRepository = getCustomRepository(CategoryRepository);
      const categoryAlreadyExists = await categoryRepository.findOne({
        id,
      });

      if (!categoryAlreadyExists) {
          throw new Error("Category not exists");
      }
      return await categoryRepository.delete(id);           
  }
}
export { DeleteCategoryService };