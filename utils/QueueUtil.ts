import {ParamUtil} from "../utils/ParamUtil";
import {Queue} from 'bullmq';

export class QueueUtil {
    private queue: Queue;

    constructor(name: string = "queue-1003") {
        this.queue = new Queue(name, {
            connection: {
                host: "36.137.225.245",
                port: 6376,
                password: "mtic0756-dev",
                db: 3
            }
        });
    }

    public async start(taskId: string | null, data: Object, isMultiInstance: boolean = false): Promise<'OK' | null> {
        const id = ParamUtil.ensureValidParam(taskId)

        if (id) {
            await this.queue.add(id, data);
        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async stop(taskId: string | null): Promise<'OK' | null> {
        const id = ParamUtil.ensureValidParam(taskId)

        if (id) {
            await this.queue.getJob(id).then(job => {
                if (job) {
                    job.remove();
                }
            });
        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async suspend(taskId: string | null): Promise<'OK' | null> {
        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async resume(taskId: string | null): Promise<'OK' | null> {
        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }
}