import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/UsersRepositories";
interface IUserDelete {
    id: string;
}
class DeleteUserService {
  async execute({id}:IUserDelete) {
      const usersRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await usersRepository.findOne({
        id,
      });

      if (!userAlreadyExists) {
          throw new Error("User not exists");
      }
      return await usersRepository.delete(id);           
  }
}
export { DeleteUserService };