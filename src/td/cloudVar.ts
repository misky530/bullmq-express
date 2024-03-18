import {RedisClient} from "../utils/RedisClient";

const varGetVal = async function l(key: string): Promise<string | null> {
    return await RedisClient.get(key);
}

const varGetVals = async function l(keys: string): Promise<{ id: string, val: string }[] | null> {
    return await RedisClient.multiGet(keys);
}

const varSetVal = async function l(key: string, value: string): Promise<'OK' | null> {
    return await RedisClient.set(key, value);
}

const varSetVals = async function l(keyValues: { key: string, val: string }[]): Promise<'OK' | null> {
    for (let keyValue of keyValues) {
        await RedisClient.set(keyValue.key, keyValue.val);
    }
    return 'OK';
}

module.exports = {varGetVal, varGetVals, varSetVal, varSetVals};
