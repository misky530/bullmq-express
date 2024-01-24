import {RedisClient} from "../src/utils/RedisClient";

const getLatestProp = async function (propIds: string) {

    const val = await RedisClient.multiGet(propIds);

    console.log('val2', val);

    return val;
}

module.exports = {getLatestProp};