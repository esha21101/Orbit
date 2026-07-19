import crypto from "crypto";

export function generateApiKey() {
  const random = crypto.randomBytes(32).toString("hex");

  return `orbit_sk_${random}`;
}

export function hashApiKey(apiKey: string) {
  return crypto
    .createHash("sha256")
    .update(apiKey)
    .digest("hex");
}