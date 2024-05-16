import Fastify from 'fastify'
import cors from '@fastify/cors'
import fastifyEnv from '@fastify/env'
import { closeRedisClient } from './lib/redis.js'
import router from './router.js'

const fastify = Fastify({
  logger: true
})

const schema = {
  type: 'object',
  required: [ 'OPENAI_API_KEY' ],
  properties: {
    OPENAI_API_KEY: {
      type: 'string',
    }
  }
}

const options = {
  schema: schema,
  dotenv: true
}

await fastify.register(fastifyEnv, options);
await fastify.register(cors, {});

router(fastify);


try {
  await fastify.listen({ port: 3001 });
  await closeRedisClient();
} catch (err) {
  fastify.log.error(err)
  await closeRedisClient();
  process.exit(1);
}



