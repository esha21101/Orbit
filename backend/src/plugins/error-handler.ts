import { FastifyInstance } from "fastify";
import { AppError } from "../common/errors/app-error.js";

export async function errorHandlerPlugin(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    if (error instanceof AppError) {
      return reply.status(error.statusCode).send({
        message: error.message,
      });
    }

    request.log.error(error);

    return reply.status(500).send({
      message: "Internal Server Error",
    });
  });
}