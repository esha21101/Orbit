import { UserRepository } from "./user.repository.js";
import { BadRequestError } from "../../common/errors/bad-request-error.js";
import { ConflictError } from "../../common/errors/conflict-error.js";


export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async createUser(name: string, email: string) {
  if (!name.trim()) {
    throw new BadRequestError("Name cannot be empty");
  }

  const existingUser = await this.userRepository.findByEmail(email);

  if (existingUser) {
    throw new ConflictError("Email already exists");
  }

  return this.userRepository.create(name, email);
}
}