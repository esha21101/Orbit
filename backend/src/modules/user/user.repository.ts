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
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

async findById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

}