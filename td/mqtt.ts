import {MqttUtil} from "../utils/MqttUtil";

const publish = async function (topic: string, message: string) {
    return await MqttUtil.publishAsync(topic, message);
}

const subscribe = async function (topic: string) {
    return await MqttUtil.subscribeAsync(topic);
}


module.exports = {publish, subscribe};