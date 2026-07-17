import { FastifyInstance } from "fastify";
import { UserService } from "./user.service.js";

const userService = new UserService();

export async function userRoutes(app: FastifyInstance) {
  app.get("/users", async (request, reply) => {
    const users = await userService.getAllUsers();

    return users;
  });
}