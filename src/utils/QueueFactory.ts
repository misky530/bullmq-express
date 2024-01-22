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
        console.log('queue release,instances size:', this.instances.size);
        this.instances.forEach((value, key) => {
            console.log('queue close,key: ', key);
            value.close();
        });
    }
}

