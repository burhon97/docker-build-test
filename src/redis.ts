import { createClient, RedisClientType } from "redis";
import { Config } from "./config.js";

export class RedisClient {
  #redis?: RedisClientType;

  get redis() {
    if (!this.#redis) {
      throw new Error(
        "Redis Client is not created. Call init() method to initialize the Redis Client."
      );
    }

    return this.#redis;
  }

  async init() {
    this.#redis = createClient();
    await this.#redis.connect();
    console.log(`Created Redis Client and conected at ${Config.redisUrl}!`);
  }

  async add(key: string, value: any): Promise<void> {
    if (this.#redis) {
      await this.#redis.set(key, JSON.stringify(value));
      console.log(`Saved data with key "${key}".`);
    }
  }

  async get(key: string): Promise<any> {
    if (this.#redis) {
      const data = await this.#redis.get(key);
      if (!data) {
        console.error(`Can not find any data with key ${key}.`);
        return null;
      }

      return JSON.parse(data);
    }
  }
}
