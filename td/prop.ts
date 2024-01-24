import {RedisClient} from "../src/utils/RedisClient";

const mqtt = require('./mqtt');

const propGetVals = async function (propIds: string) {
    return await RedisClient.multiGet(propIds);
}

const propGetVal = async function (propId: string) {
    return await RedisClient.get(propId);
}

const propSetVals = async function (propVals: [{ propId: string, val: number }]) {
    return await mqtt.propSetVal()
}

const propSetVal = async function (propId: string, val: number) {
    return await mqtt.propSetVal(propId, val);
}

const propSetOn = async function (propId: string) {
    return await mqtt.propSetOn(propId);
}

const propSetOff = async function (propId: string) {
    return await mqtt.propSetOff(propId);
}


module.exports = {propGetVals, propGetVal, propSetVals, propSetVal, propSetOn, propSetOff};