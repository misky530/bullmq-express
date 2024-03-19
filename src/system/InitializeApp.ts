// initial business
import {Constants} from '../config/Constans';
import {createWorker} from '../utils/WorkerUtil';
import {RedisClient} from "../utils/RedisClient";
import {Db} from "../td/db";

export class InitializeApp {
    // 创建一个 Set 来存储暂停的作业 ID
    private static pausedJobs = new Set();

    public static async initialize(): Promise<void> {
        // 你的初始化逻辑
        await this.initializeApplication();
    }

    // 你的初始化逻辑
    private static async initializeApplication() {
        // 在这里执行你的初始化任务，例如：
        // - 连接到数据库
        // - 调度定时任务
        // - 预加载数据到缓存
        console.log('Application is being initialized...');

        //create system worker
        await this.createSystemWorker();

        //load all tasks
        await Db.initialize();
    }


//
// // 订阅暂停和恢复事件
//     sub.subscribe('pauseJob', 'resumeJob');
//
//     sub.on('message', (channel, message) => {
//     if (channel === 'pauseJob') {
//     pausedJobs.add(message);
// } else if (channel === 'resumeJob') {
//     pausedJobs.delete(message);
// }
// });


// create system worker
    private static async createSystemWorker(): Promise<void> {
        // create sub/pub
        await RedisClient.subscribe((channel, message) => {
            // callback when receive message
            if (channel === 'pauseJob') {
                this.pausedJobs.add(message);
            } else if (channel === 'resumeJob') {
                this.pausedJobs.delete(message);
            }
        }, Constants.Redis.PAUSE_JOB_CHANNEL, Constants.Redis.RESUME_JOB_CHANNEL);


        //system worker
        createWorker(Constants.Queue.SYSTEM, async job => {
            // 处理 job
            console.log('system worker:', job.data);
        });

        //default worker
        createWorker(Constants.Queue.DEFAULT, async job => {
            // 处理 job
            // console.log('default worker:', job.data);

            if (this.pausedJobs.has(job.name)) {
                // 如果作业被标记为暂停，则重新放入队列
                await job.log('job paused by user!');

                await job.updateProgress(0);

                await job.updateProgress({error: 'job paused by user!'});

                return {error: 'job paused by user!'};
            }

            // console.log('this.pausedJobs:', this.pausedJobs, 'job.token:', job.token);

            await job.updateProgress(this.getRandomInt(0, 100));

            await this.delay(1000);


        });
    }

    private static delay(ms: number): Promise<void> {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    private static getRandomInt(min: number, max: number): number {
        // 创建一个随机数，范围是 [min, max]
        const randomBuffer = Math.random() * (max - min + 1);
        return Math.floor(randomBuffer) + min;
    }
}

