import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const checkIfUserIsAdmin = this.usersRepository.findById(String(user_id));

    if (!checkIfUserIsAdmin) {
      throw new Error("User not found");
    }

    if (checkIfUserIsAdmin.admin === false) {
      throw new Error("User is not an admin");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
