import { UserRepository } from "./modules/user/user.repository.js";

const userRepository = new UserRepository();

async function main() {
  const users = await userRepository.findAll();

  console.log(users);
}

main();