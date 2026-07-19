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
  return this.repository.findByUserId(userId);
} 
}