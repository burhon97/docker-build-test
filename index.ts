import { Config } from "./src/config.js";
import { RedisClient } from "./src/redis.js";

const redisClient = new RedisClient();
const key = Config.key;
const value = Config.value;

await redisClient.init();
await redisClient.add(key, value);
const data = await redisClient.get(key);
console.log(`Get data result: ${data}`);
