// RedisClient.ts
import Redis, {Redis as RedisClientType} from 'ioredis';

class RedisClient {
    private static client: RedisClientType;

    constructor() {
        if (!RedisClient.client) {
            RedisClient.client = new Redis({
                host: '36.137.225.245', // Redis 服务器的地址
                port: 6376,        // Redis 服务器的端口
                password: 'mtic0756-dev', // 如果你的 Redis 服务器需要密码
                db: 10, // 如果你想使用不同的数据库
            });
        }
    }

    public static async get(key: string): Promise<string | null> {
        return new Promise((resolve, reject) => {
            RedisClient.client.get(key);
        });
    }

    public static async set(key: string, value: string): Promise<'OK' | null> {
        return new Promise((resolve, reject) => {
            RedisClient.client.set(key, value);
        });
    }

    public static async keys(pattern: string): Promise<string[]> {
        return new Promise((resolve, reject) => {
            RedisClient.client.keys(pattern,);
        });
    }

    public static async disconnect(): Promise<void> {
        RedisClient.client.disconnect();
    }
}

export default RedisClient;