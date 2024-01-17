import {RedisClient} from "../utils/RedisClient";

const getLatestProp = async function (propIds: string) {
    const redisClient = new RedisClient();
    const val = await redisClient.get("dp:shadow:1392095804881248288:1392095804881248291:1410977729825873920")


    return {propId: "1410977729825873920", val: val};
}

module.exports = {getLatestProp};