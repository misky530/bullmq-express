import Redis from 'ioredis';

export class RedisClient {
    private client: Redis;

    constructor() {
        this.client = new Redis({
            host: '36.137.225.249',
            port: 6376,
            password: 'mtic0756-prod', // 如果设置了密码，取消注释并填入密码
            db: 10,                           // 如果你想使用不同的数据库，取消注释并指定数据库编号
        });
    }

    public async set(key: string, value: string, expireTime?: number): Promise<'OK' | null> {
        if (expireTime) {
            return this.client.set(key, value, 'EX', expireTime);
        } else {
            return this.client.set(key, value);
        }
    }

    public async get(key: string): Promise<string | null> {
        // const key1 = "dp:shadow:1397095337741856770:1401722937861611528:1450345423108579330";
        // console.time('key1');
        // const val1 = await this.client.get(key1);
        // console.log('val1', val1);
        // console.timeEnd('key1');

        //模糊匹配
        const keys = await this.keys("*" + key);


        if (keys && keys.length > 0) {

            for (let key of keys) {
                console.log('key', key);
                if (key.includes("dp")) {
                    return this.client.get(key);
                }
            }
        }
        return null;

        // const val = await this.client.get(key);
        // console.log('val', val);
        // return val;
    }

    //get keys by pattern
    public async keys(pattern: string): Promise<string[] | null> {
        console.time('keys');
        const keys = await this.client.keys(pattern);
        console.log('keys', keys);
        console.timeEnd('keys');
        return keys;
    }

    // 你可以根据需要继续添加更多方法

    public async disconnect(): Promise<void> {
        await this.client.quit();
    }
}
