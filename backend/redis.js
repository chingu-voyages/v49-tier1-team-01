import { createClient } from 'redis';

const client = createClient({
   url: 'redis://default:bI6HsGJ1bsqceOR7Dx54lZZcxnLSOMGg@redis-15115.c294.ap-northeast-1-2.ec2.redns.redis-cloud.com:15115'
 });

  client.on('error', err => console.log('Redis Client Error', err))
  client.connect();

client.set('key', 'value');
const value = await client.get('key');
console.log(value);

await client.set('lemon', 'yellow');
await client.set('mykey', 'myvalue', (err, reply) => {
   if (err) {
       console.error('Error setting value:', err);
   } else {
       console.log('Value set successfully');
   } 
});

const color = await client.get('lemon')
console.log(color);

 client.disconnect();




