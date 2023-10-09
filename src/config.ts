export const Config = {
    redisUrl: process.env.REDIS_LISTEN_ADDRESS || "redis://127.0.0.1:6379",
    key: process.env.KEY || "myKey",
    value: process.env.VALUE || "Hello World!"
}