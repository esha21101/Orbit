import { UserRepository } from "./user.repository.js";

export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers() {
    return this.userRepository.findAll();
  }
}