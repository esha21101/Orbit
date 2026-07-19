import prisma from "../../db/prisma.js";

export class ApiKeyRepository {
  async create(data: {
    name: string;
    keyHash: string;
    userId: string;
  }) {
    return prisma.apiKey.create({
      data,
    });
  }

  async findByUserId(userId: string) {
  return prisma.apiKey.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}
async revoke(id: string, userId: string) {
  return prisma.apiKey.updateMany({
    where: {
      id,
      userId,
    },
    data: {
      isActive: false,
    },
  });
}
}
