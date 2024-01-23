import {Job, Processor, Worker} from 'bullmq';
import {Constants} from '../config/Constans';


// 创建一个函数来创建并返回一个Worker
export function createWorker(queueName: string, processor: Processor) {
    const worker = new Worker(queueName, processor, {
        connection: Constants.Redis.CONFIG,
        removeOnComplete: {count: 50},
        removeOnFail: {count: 100}
    });

    // 监听任务完成事件
    worker.on('completed', (job: Job) => {
        console.log(`Job ${job.id} completed!`);
    });

    // 监听任务失败事件
    worker.on('failed', (job: Job | undefined, err: Error) => {
        console.error(`Job ${job?.id} failed with error ${err.message}`);
    });

    // 监听错误事件
    worker.on('error', (err: Error) => {
        console.error('Worker encountered an error:', err);
    });

    // 返回创建的Worker实例
    return worker;
}