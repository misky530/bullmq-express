import {QueueUtil} from "./QueueUtil";

export class QueueFactory {
    private static instances: Map<string, QueueUtil> = new Map();

    public static getInstance(queueName: string): QueueUtil {
        let instance = this.instances.get(queueName);

        if (!instance) {
            instance = new QueueUtil(queueName);
            this.instances.set(queueName, instance);
        }

        return instance;
    }

    //release
    public static release(): void {
        this.instances.forEach((value, key) => {
            value.close().then(r => {
                console.log('queue close ok,key: ', key);
            }).catch(e => {
                console.log('queue close error:', e);
            });
        });
    }
}

