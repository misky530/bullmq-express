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

    // get subscribe client
    static getSubClient(): Redis {
        return new Redis(Constants.Redis.IOREDIS_CONFIG);
    }

    // get publish client
    static getPubClient(): Redis {
        return new Redis(Constants.Redis.IOREDIS_CONFIG);
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
        const pattern = "dp:*" + key;
        console.log('pattern:', pattern);
        const keys = await this.keys(pattern);

        if (keys && keys.length > 0) {
            console.log('key', keys[0]);
            return  client.get(keys[0]);
        }
        return null;

    }

    //get values by keys
    public static async multiGet(ids: string): Promise<{ id: string, val: string }[] | null> {
        // console.time('multiGet');
        let result: { id: string; val: string }[] = [];


        for (let id of ids.split(',')) {
            console.log("id:", id);
            const val = await this.get(id);
            if (val) {
                //todo 保留两位小数, float
                const float_val=parseFloat(val).toFixed(2);
                result.push({id, val});
            }
        }

        // console.timeEnd('multiGet');

        return result;
    }

    //get keys by pattern
    public static async keys(pattern: string): Promise<string[] | null> {
        const client = RedisClient.getInstance();
        return client.keys(pattern);
    }

    // subscribe
    public static async subscribe(callback: (channel: string, message: string) => void, ...channels: string[]): Promise<void> {
        // subscribe should create new redis instance
        const client = this.getSubClient();
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
        const client = this.getPubClient();
        console.log('publish channel:', channel);
        console.log('publish message:', message);
        const result = client.publish(channel, message);
        console.log('publish result:', result);
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
    public static async disconnect(): Promise<void> {
        //release redis client
        const client = RedisClient.getInstance();
        await client.quit();

        //release sub client
        const subClient = RedisClient.getSubClient();
        await subClient.quit();

        //release pub client
        const pubClient = RedisClient.getPubClient();
        await pubClient.quit();
    }
}
