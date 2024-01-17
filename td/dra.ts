import {RedisClient} from "../utils/RedisClient";

const getLatestProp = async function (propIds: string) {
    const redisClient = new RedisClient();
    const val = await redisClient.get(propIds);

    console.log('val2', val);

    return {propId: propIds, val: val};
}

module.exports = {getLatestProp};