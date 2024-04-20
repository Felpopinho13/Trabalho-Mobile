import { hash } from "bcryptjs";
import { UsersRepositories } from "../../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";
interface IUserRequest {   name: string;
  email: string;   admin?: boolean;  password: string; }
class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error("Digite algo para cadastro");
    }
    const usersRepository = getCustomRepository(UsersRepositories);
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });
    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const passwordHash = await hash(password, 8);
    const user = usersRepository.create({  name, email, admin, password: passwordHash,  });
    await usersRepository.save(user);
    return user;
  }
}
export { CreateUserService };
