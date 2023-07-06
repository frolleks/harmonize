import Fastify from "fastify";
import fastifyAutoRoutes from "fastify-autoroutes";

const fastify = Fastify({
  logger: true,
});

fastify.register(fastifyAutoRoutes, {
  dir: "./routes",
  prefix: "/api",
});

try {
  await fastify.listen({ port: 3000 });
} catch (err) {
  fastify.log.error(err);
  process.exit(1);
}
