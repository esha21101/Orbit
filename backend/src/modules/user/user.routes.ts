import { FastifyInstance } from "fastify";
import { UserService } from "./user.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

const userService = new UserService();

export async function userRoutes(app: FastifyInstance) {
  app.get("/users", async () => {
    return userService.getAllUsers();
  });

  app.post("/users", async (request, reply) => {
    const userData = request.body as CreateUserDto;

const user = await userService.createUser(userData);

    return reply.status(201).send(user);
  });
}