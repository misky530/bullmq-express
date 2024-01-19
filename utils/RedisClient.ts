import Redis from 'ioredis';

export class RedisClient {
    private static instance: Redis;

    // constructor() {
    //     this.client = new Redis({
    //         host: '36.137.225.249',
    //         port: 6376,
    //         password: 'mtic0756-prod', // 如果设置了密码，取消注释并填入密码
    //         db: 10,                           // 如果你想使用不同的数据库，取消注释并指定数据库编号
    //     });
    // }


    // 私有构造函数防止直接实例化
    private constructor() {
    }

    static getInstance(): Redis {
        if (!RedisClient.instance) {
            RedisClient.instance = new Redis({
                host: '36.137.225.249',
                port: 6376,
                password: 'mtic0756-prod', // 如果设置了密码，取消注释并填入密码
                db: 10,                           // 如果你想使用不同的数据库，取消注释并指定数据库编号
            });
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
        // const key1 = "dp:shadow:1397095337741856770:1401722937861611528:1450345423108579330";
        // console.time('key1');
        // const val1 = await this.client.get(key1);
        // console.log('val1', val1);
        // console.timeEnd('key1');

        const client = RedisClient.getInstance();

        //模糊匹配, pattern dp:shadow:1397095337741856770:1401722937861611528:*
        const keys = await this.keys("dp:*" + key);


        if (keys && keys.length > 0) {
            console.log('key', keys[0]);
            return client.get(keys[0]);
        }
        return null;

        // const val = await this.client.get(key);
        // console.log('val', val);
        // return val;
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

    // 你可以根据需要继续添加更多方法

    public async disconnect(): Promise<void> {
        const client = RedisClient.getInstance();
        await client.quit();
    }
}
