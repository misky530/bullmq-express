import * as mqtt from 'mqtt';
import {MqttClient, Packet} from 'mqtt';
import {QoS} from "mqtt-packet";
import {ISubscriptionGrant} from "mqtt/src/lib/client";

export class MqttUtil {
    private static instance: MqttClient;
    private static brokerUrl: string = "mqtt://hats.hcs.cn";

    // 私有构造函数防止直接实例化
    private constructor() {
    }

    public static getInstance(): MqttClient {
        if (!MqttUtil.instance) {
            MqttUtil.instance = mqtt.connect(MqttUtil.brokerUrl);
            MqttUtil.instance.on('connect', () => {
                console.log('Connected to MQTT broker');
            });

            MqttUtil.instance.on('error', (error) => {
                console.error('MQTT error:', error);
            });

            MqttUtil.instance.on('message', (topic, payload) => {
                console.log(`Received message from topic ${topic}:`, payload.toString());
            });
        }
        return MqttUtil.instance;
    }

    public async subscribe(topic: string, qos: QoS = 0): Promise<ISubscriptionGrant[]> {
        const client = MqttUtil.getInstance();
        return client.subscribeAsync(topic, {qos});
    }

    public async publish(topic: string, message: string, qos: QoS = 0, retain: boolean = false): Promise<Packet | undefined> {
        const client = MqttUtil.getInstance();
        return client.publishAsync(topic, message, {qos, retain})
    }

}

