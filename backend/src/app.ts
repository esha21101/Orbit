import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.routes.js";
import { errorHandlerPlugin } from "./plugins/error-handler.js";
import { apiKeyRoutes } from "./modules/api-key/api-key.routes.js";

const app = Fastify({
  logger: true,
});

app.get("/", async () => {
  return {
    name: "Orbit",
    description: "Production-ready AI API Gateway backend",
    status: "healthy",
    version: "1.0.0",
    health: "/health",
    repository: "https://github.com/esha21101/Orbit",
  };
});

app.get("/health", async () => {
  return {
    status: "OK",
    service: "Orbit API Gateway",
  };
});

app.register(errorHandlerPlugin);
app.register(userRoutes);
app.register(apiKeyRoutes);

export default app;