import {MqttUtil} from "../utils/MqttUtil";
import {TOPIC_PROP_SET} from "../common/constants";

const publish = async function (topic: string, message: string) {
    return await MqttUtil.publishAsync(topic, message);
}

const subscribe = async function (topic: string) {
    return await MqttUtil.subscribeAsync(topic);
}

const propSetVal = async function (propId: string, val: number) {
    return await publish(TOPIC_PROP_SET, JSON.stringify({propId, val}));
}

const propSetOn = async function (propId: string) {
    return await propSetVal(propId, 1);
}

const propSetOff = async function (propId: string) {
    return await propSetVal(propId, 0);

}


module.exports = {publish, subscribe, propSetVal, propSetOn, propSetOff};