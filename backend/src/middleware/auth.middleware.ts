import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.status(401).send({
      message: "Authorization header missing",
    });
  }

  const token = authHeader.replace("Bearer ", "");

  try {
  const payload = jwt.verify(token, JWT_SECRET) as {
    userId: string;
  };

  request.user = {
    userId: payload.userId,
  };
} catch {
  return reply.status(401).send({
    message: "Invalid token",
  });
}
}