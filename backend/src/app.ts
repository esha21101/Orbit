import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.routes.js";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return {
    status: "OK",
    service: "Orbit API Gateway",
  };
});

app.register(userRoutes);

export default app;