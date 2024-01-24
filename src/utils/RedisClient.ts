import Redis from 'ioredis';
import {Constants} from '../config/Constans';

export class RedisClient {
    private static instance: Redis;

    static getInstance(): Redis {
        if (!RedisClient.instance) {
            RedisClient.instance = new Redis(Constants.Redis.IOREDIS_CONFIG);
        }

        return RedisClient.instance;
    }

    public static async set(key: string, value: string, expireTime?: number): Promise<'OK' | null> {
        const client = RedisClient.getInstance();
        if (expireTime) {
            return client.set(key, value, 'EX', expireTime);
        } else {
            return client.set(key, value);
        }
    }

    public static async get(key: string): Promise<string | null> {

        const client = RedisClient.getInstance();

        //模糊匹配, pattern dp:shadow:1397095337741856770:1401722937861611528:*
        const keys = await this.keys("dp:*" + key);


        if (keys && keys.length > 0) {
            console.log('key', keys[0]);
            return client.get(keys[0]);
        }
        return null;

    }

    //get values by keys
    public static async multiGet(ids: string): Promise<{ id: string, val: string }[] | null> {
        console.time('multiGet');
        let result: { id: string; val: string }[] = [];


        for (let id of ids.split(',')) {
            const val = await this.get(id);
            if (val) {
                result.push({id, val});
            }
        }

        console.timeEnd('multiGet');

        return result;
    }

    //get keys by pattern
    public static async keys(pattern: string): Promise<string[] | null> {
        console.time('keys');
        const client = RedisClient.getInstance();
        const keys = await client.keys(pattern);
        console.log('keys', keys);
        console.timeEnd('keys');
        return keys;
    }

    // subscribe
    public static async subscribe(callback: (channel: string, message: string) => void, ...channels: string[]): Promise<void> {
        const client = RedisClient.getInstance();
        await client.subscribe(...channels);

        // 当收到消息时，调用提供的回调函数
        client.on('message', (subscribedChannel, message) => {
            // 所有的订阅频道都会收到消息
            console.log('subscribedChannel', subscribedChannel);
            if (channels.some(channel => channel === subscribedChannel)) {
                callback(subscribedChannel, message);
            }
        });
    }

    // publish
    public static async publish(channel: string, message: string): Promise<void> {
        const client = RedisClient.getInstance();
        await client.publish(channel, message);
    }

    // pause job
    public static async pauseJob(jobId: string): Promise<void> {
        await RedisClient.publish(Constants.Redis.PAUSE_JOB_CHANNEL, jobId);
    }

    // resume job
    public static async resumeJob(jobId: string): Promise<void> {
        await RedisClient.publish(Constants.Redis.RESUME_JOB_CHANNEL, jobId);
    }

    // disconnect
    public async disconnect(): Promise<void> {
        const client = RedisClient.getInstance();
        await client.quit();
    }
}
