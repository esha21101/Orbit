import { UserRepository } from "./user.repository.js";
import { BadRequestError } from "../../common/errors/bad-request-error.js";
import { ConflictError } from "../../common/errors/conflict-error.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async createUser(user: CreateUserDto) {
    if (!user.name.trim()) {
      throw new BadRequestError("Name cannot be empty");
    }

    const existingUser = await this.userRepository.findByEmail(user.email);

    if (existingUser) {
      throw new ConflictError("Email already exists");
    }

    return this.userRepository.create(user);
  }
}