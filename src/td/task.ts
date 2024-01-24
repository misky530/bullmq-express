import {QueueFactory} from "../utils/QueueFactory";
import {Constants} from '../config/Constans';
import {RepeatableJob} from "bullmq/dist/esm/interfaces";
import {RedisClient} from "../utils/RedisClient";


export class Task {
    public static async addRepeatJobs(name: string, data: any, cron: string
        , queueName: string = Constants.Queue.DEFAULT): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.addRepeatJobs(name, data, cron);
    }

    // get all repeat jobs
    public static async getRepeatJobs(queueName: string = Constants.Queue.DEFAULT): Promise<RepeatableJob[]> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.getRepeatJobs();
    }

    // remove repeat job
    public static async removeRepeatJobs(name: string, cron: string
        , queueName: string = Constants.Queue.DEFAULT): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.removeRepeatJobs(name, cron);
    }

    // clean all
    public static async cleanAll(queueName: string = Constants.Queue.DEFAULT): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.cleanAll();
    }

    // clean completed
    public static async cleanCompleted(queueName: string = Constants.Queue.DEFAULT): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.cleanCompleted();
    }

    // pause job
    public static async pauseJob(taskId: string): Promise<any> {
        return await RedisClient.pauseJob(taskId);
    }

    // resume job
    public static async resumeJob(taskId: string): Promise<any> {
        return await RedisClient.resumeJob(taskId);
    }


}