import { UserRepository } from "./user.repository.js";

export class UserService {
  private userRepository = new UserRepository();

  async getAllUsers() {
    return this.userRepository.findAll();
  }

  async createUser(name: string, email: string) {
    // Business validation
    if (!name.trim()) {
      throw new Error("Name cannot be empty");
    }

    // We'll add email validation and duplicate checks later

    return this.userRepository.create(name, email);
  }
}