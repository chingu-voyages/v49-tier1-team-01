import getOpenAI from "../../lib/openai.js";
import { getRedisClient } from "../../lib/redis.js";

export default async function post(request, reply) {
  const message = request.body;
  const redisClient = await getRedisClient();
  const cache = await redisClient.HGETALL('cache:color:' + message)

  if(Object.keys(cache).length > 0) {
    reply.send(cache);
  } else {
    const completion = await getOpenAI().chat.completions.create({
      messages: [{ role: "system", content: "Recommend me 3 colors that goes well with " + message + ".Respond with a json object containing only hexadecimal string as the property and the reason why you recommend this color as a value" }],
      model: "gpt-3.5-turbo",
    });
    const answer = await JSON.parse(completion.choices[0].message.content);
    await redisClient.HSET('cache:color:' + message, answer);
    redisClient.quit();
    reply.send(answer);
  }
}