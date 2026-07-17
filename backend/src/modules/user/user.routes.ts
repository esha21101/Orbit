import { FastifyInstance } from "fastify";
import { UserService } from "./user.service.js";

const userService = new UserService();

export async function userRoutes(app: FastifyInstance) {
  app.get("/users", async () => {
    return userService.getAllUsers();
  });

  app.post("/users", async (request, reply) => {
    const { name, email } = request.body as {
      name: string;
      email: string;
    };

    const user = await userService.createUser(name, email);

    return reply.status(201).send(user);
  });
}