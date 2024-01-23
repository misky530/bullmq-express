import {QueueFactory} from "../utils/QueueFactory";
import {Constants} from '../config/Constans';
import {RepeatableJob} from "bullmq/dist/esm/interfaces";


export class Task {
    public static async addRepeatJobs(queueName: string = Constants.Queue.DEFAULT
        , name: string, data: any, cron: string): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.addRepeatJobs(name, data, cron);
    }

    // get all repeat jobs
    public static async getRepeatJobs(queueName: string = Constants.Queue.DEFAULT): Promise<RepeatableJob[]> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.getRepeatJobs();
    }


}