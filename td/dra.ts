import {RedisClient} from "../utils/RedisClient";

const getLatestProp = async function (propIds: string) {
    const redisClient = new RedisClient();
    const val = await redisClient.multiGet(propIds);

    console.log('val2', val);

    return val;
}

module.exports = {getLatestProp};