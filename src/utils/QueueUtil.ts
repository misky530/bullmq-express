import {ParamUtil} from "../../utils/ParamUtil";
import {Job, Queue} from 'bullmq';
import {RepeatableJob} from "bullmq/dist/esm/interfaces";

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

    // add repeat job
    public async addRepeatJobs(name: string, data: any, pattern: string) {
        await this.queue.add(name, data, {
            repeat: {
                pattern: pattern,
            }
        });
    }

    //remove repeat job
    public async removeRepeatJobs(name: string, pattern: string) {
        const repeat = {pattern: pattern};
        console.log('name1:', name);
        console.log('pattern1:', pattern);

        const repeatableJobs = await this.queue.getRepeatableJobs();
        for (let job of repeatableJobs) {
            console.log('job:', job);
        }

        await this.queue.removeRepeatable(name, repeat);
    }

    //get all repeat jobs
    public async getRepeatJobs(): Promise<RepeatableJob[]> {
        return await this.queue.getRepeatableJobs();
    }

    // clean
    public async cleanCompleted() {
        await this.queue.clean(0, 0, 'completed');
        // await this.queue.clean(0, 0, 'wait');
        // await this.queue.clean(0, 0, 'active');
        // await this.queue.clean(0, 0, 'delayed');
        await this.queue.clean(0, 0, 'failed');
    }

    // clean all
    public async cleanAll() {
        await this.queue.clean(0, 0, 'completed');
        await this.queue.clean(0, 0, 'wait');
        await this.queue.clean(0, 0, 'active');
        await this.queue.clean(0, 0, 'delayed');
        await this.queue.clean(0, 0, 'failed');
    }

    // release
    public close(): void {
        this.queue.close().then(r => {
            console.log('queue close ok');
        }).catch(e => {
            console.log('queue close error:', e);
        });
    }

    // get job
    public async getJob(jobId: string): Promise<Job<any, any, string> | undefined> {
        return await this.queue.getJob(jobId);
    }

    // get job status
    public async getJobStatus(jobName: string): Promise<string | null> {

        // get active jobs
        const active = await this.queue.getActive();

        if (active && active.length > 0) {
            for (let job of active) {
                console.log('jobName:', job.name);
                if (job.name === jobName) {
                    return 'active';
                }
            }
        }

        // get failed jobs
        const failed = await this.queue.getFailed();
        if (failed && failed.length > 0) {
            for (let job of failed) {
                if (job.name === jobName) {
                    console.log('job id:', job.id);
                    const id = job.id ? job.id : '';
                    const state = await this.queue.getJobState(id);
                    console.log(`job state:${state},job log:${job.log}`);
                    return 'failed';
                }
            }
        }

        // get completed jobs
        const completed = await this.queue.getCompleted();
        if (completed && completed.length > 0) {
            for (let job of completed) {
                if (job.name === jobName) {
                    console.log('job id:', job.id);
                    const id = job.id ? job.id : '';
                    const state = await this.queue.getJobState(id);
                    console.log('job state:', state);
                    return 'completed';
                }
            }
        }


        return "Normal";
    }


}