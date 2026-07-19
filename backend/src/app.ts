import Fastify from "fastify";
import { userRoutes } from "./modules/user/user.routes.js";
import { errorHandlerPlugin } from "./plugins/error-handler.js";
import { apiKeyRoutes } from "./modules/api-key/api-key.routes.js";

const app = Fastify({
  logger: true,
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