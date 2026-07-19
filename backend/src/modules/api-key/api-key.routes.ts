import { FastifyInstance } from "fastify";
import { ApiKeyService } from "./api-key.service.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";

const apiKeyService = new ApiKeyService();

export async function apiKeyRoutes(app: FastifyInstance) {
  app.post(
    "/api-keys",
    {
      preHandler: authMiddleware,
    },
    async (request) => {
      const { name } = request.body as {
        name: string;
      };

      return apiKeyService.createApiKey(
        request.user.userId,
        name
      );
    }
  );

  app.get(
  "/api-keys",
  {
    preHandler: authMiddleware,
  },
  async (request) => {
    return apiKeyService.getApiKeys(request.user.userId);
  }
);
app.patch(
  "/api-keys/:id/revoke",
  {
    preHandler: authMiddleware,
  },
  async (request) => {
    const { id } = request.params as {
      id: string;
    };

    return apiKeyService.revokeApiKey(
      id,
      request.user.userId
    );
  }
);
}