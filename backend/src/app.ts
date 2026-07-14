import Fastify from "fastify";

const app = Fastify({
  logger: true,
});

app.get("/health", async () => {
  return {
    status: "OK",
    service: "Orbit API Gateway",
  };
});

export default app;