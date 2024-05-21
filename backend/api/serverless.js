import Fastify from 'fastify'
import cors from '@fastify/cors'
import router from '../router.js'

import * as dotenv from "dotenv";
dotenv.config();

const app = Fastify({
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

await app.register(cors, {});

router(app);

export default async (req, res) => {
  try {
    await app.ready();
    app.server.emit('request', req, res);
  } catch (err) {
    app.log.error(err)
    process.exit(1);
  }
}





