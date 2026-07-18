import prisma from "../../db/prisma.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

export class UserRepository {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(user: CreateUserDto) {
  return prisma.user.create({
    data: user,
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
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