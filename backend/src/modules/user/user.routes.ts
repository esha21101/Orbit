import { FastifyInstance } from "fastify";
import { UserService } from "./user.service.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { LoginUserDto } from "./dto/login-user.dto.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

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

  app.post("/login", async (request, reply) => {
  const loginData = request.body as LoginUserDto;

  const result = await userService.loginUser(
    loginData.email,
    loginData.password
  );

  return reply.send(result);
});

app.get(
  "/me",
  {
    preHandler: authMiddleware,
  },
  async (request) => {
    return userService.getCurrentUser(request.user.userId);
  }
);
}