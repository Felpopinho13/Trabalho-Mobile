import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
interface ICategoryRequest {   name: string;
   }
class CreateCategoryService {
  async execute({ name}: ICategoryRequest) {
    if (!name) {
      throw new Error("Categoria incorreto");
    }
    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      name
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const user = usersRepository.create({  name  });
    await usersRepository.save(user);
    return user;
  }
}
export { CreateCategoryService };
