import { ApiKeyRepository } from "./api-key.repository.js";
import { generateApiKey, hashApiKey } from "../../utils/api-key.js";

export class ApiKeyService {
  private repository = new ApiKeyRepository();

  async createApiKey(userId: string, name: string) {
    const apiKey = generateApiKey();

    const keyHash = hashApiKey(apiKey);

    await this.repository.create({
      name,
      keyHash,
      userId,
    });

    return {
      apiKey,
    };
  }


  async getApiKeys(userId: string) {
  const apiKeys = await this.repository.findByUserId(userId);

  return apiKeys.map((key) => ({
    id: key.id,
    name: key.name,
    isActive: key.isActive,
    createdAt: key.createdAt,
    lastUsedAt: key.lastUsedAt,
  }));
}

async revokeApiKey(id: string, userId: string) {
  const result = await this.repository.revoke(id, userId);

  if (result.count === 0) {
    throw new Error("API key not found");
  }

  return {
    message: "API key revoked successfully",
  };
} 
}