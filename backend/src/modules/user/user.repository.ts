import prisma from "../../db/prisma.js";

export class UserRepository {
  async findAll() {
    return prisma.user.findMany();
  }
}