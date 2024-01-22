import {Worker} from 'bullmq';

export class WorkerUtil {
    // private worker: Worker;
    //
    // constructor(name: string = "queue-1003") {
    //     this.worker = new Worker(name);
    // }

    public async autoRemoval(queueName: string): Promise<void> {
        const myWorker = new Worker(
            queueName,
            async job => {
                // do some work
                console.log('job run');
            },
            {
                connection: {
                    host: "36.137.225.245",
                    port: 6376,
                    password: "mtic0756-dev",
                    db: 3
                },
                removeOnFail: {count: 0}
            },
        );
    }

}
