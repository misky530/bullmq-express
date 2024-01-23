// initial business
import {Task} from "../td/task";
import {Constants} from '../config/Constans';
import {createWorker} from '../utils/WorkerUtil';

export class InitializeApp {
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

        //add task
        await this.AddHousekeeperTask();
    }

    private static async AddHousekeeperTask(): Promise<void> {
        //每1小时执行一次
        await Task.addRepeatJobs(Constants.Queue.SYSTEM
            , Constants.Queue.SYSTEM_HOUSEKEEPER, {}, Constants.Queue.SYSTEM_CRON);
    }

    // create system worker
    private static async createSystemWorker(): Promise<void> {
        createWorker(Constants.Queue.SYSTEM, async job => {
            // 处理 job
            console.log('system worker:', job.data);
        });
    }
}

