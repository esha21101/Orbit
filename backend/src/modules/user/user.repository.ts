import prisma from "../../db/prisma.js";

export class UserRepository {
  async findAll() {
    return prisma.user.findMany();
  }

  async create(name: string, email: string) {
  return prisma.user.create({
    data: {
      name,
      email,
    },
  });
}
}