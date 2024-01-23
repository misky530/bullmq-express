import {QueueFactory} from "../utils/QueueFactory";
import {Constants} from '../config/Constans';

export class Task {
    public static async addRepeatJobs(queueName: string = Constants.Queue.DEFAULT
        , name: string, data: any, cron: string): Promise<any> {
        const queue = QueueFactory.getInstance(queueName);
        return await queue.addRepeatJobs(name, data, cron);
    }
}