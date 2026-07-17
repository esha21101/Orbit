import prisma from "../../db/prisma.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

export class UserRepository {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(user: CreateUserDto) {
  return prisma.user.create({
    data: user,
  });
}

async findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

}