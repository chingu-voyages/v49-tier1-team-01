import { createClient } from 'redis';

export let redisClient;

export async function getRedisClient() {
  redisClient ??= await createClient({
   url: 'redis://default:bI6HsGJ1bsqceOR7Dx54lZZcxnLSOMGg@redis-15115.c294.ap-northeast-1-2.ec2.redns.redis-cloud.com:15115'
 }).connect();

  return redisClient;
}


export async function closeRedisClient() {
  if (redisClient) {
    redisClient.disconnect();
  }
}