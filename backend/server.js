import Fastify from 'fastify'
import cors from '@fastify/cors'
import main from './index.js'
import fastifyEnv from '@fastify/env'

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

await fastify.register(fastifyEnv, options)
await fastify.register(cors, {})

fastify.get('/', async function handler (request, reply) {
  return { hello: 'lala' }
})

fastify.post('/', async function handler (request, reply) {
  const hexcodeRegex = /^#[a-fA-F0-9]{6}$/;
  if(hexcodeRegex.test(request.body)) {
    const answer = await main(request.body);
    reply.send(answer);
  } else {
    console.log('input is wrong');
  }
})

try {
  await fastify.listen({ port: 3001 })
} catch (err) {
  fastify.log.error(err)
  process.exit(1)
}



