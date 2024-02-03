import {RedisClient} from "./RedisClient";

export class CloudVarUtil {
    // get cloud var
    public static async varGetVal(key: string): Promise<string | null> {
        return await RedisClient.get(key);
    }

    // get cloud vars
    public static async varGetVals(keys: string): Promise<{ id: string, val: string }[] | null> {
        return await RedisClient.multiGet(keys);
    }

    // set cloud var
    public static async varSetVal(key: string, value: string): Promise<'OK' | null> {
        return await RedisClient.set(key, value);
    }

    // set cloud vars
    public static async varSetVals(keyValues: { key: string, val: string }[]): Promise<'OK' | null> {
        for (let keyValue of keyValues) {
            await RedisClient.set(keyValue.key, keyValue.val);
        }
        return 'OK';
    }
}