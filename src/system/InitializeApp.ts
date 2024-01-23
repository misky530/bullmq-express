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

        //create system worker
        await this.createSystemWorker();
    }

    private static async AddHousekeeperTask(): Promise<void> {

        // 获取队列的所有重复作业
        const repeatableJobs = await Task.getRepeatJobs(Constants.Queue.SYSTEM);

        // 查找具有特定重复选项的作业
        const jobExists = repeatableJobs.some((j) => {
            return (
                j.pattern === Constants.Queue.SYSTEM_CRON &&
                j.name === Constants.Queue.SYSTEM_HOUSEKEEPER
                // 检查其他选项是否匹配（如果需要）

            );
        });

        if (!jobExists) {
            console.log('system housekeeper repeat job is not exist!');
            await Task.addRepeatJobs(Constants.Queue.SYSTEM
                , Constants.Queue.SYSTEM_HOUSEKEEPER, {}, Constants.Queue.SYSTEM_CRON);
        } else {
            console.log('system housekeeper repeat job is exist!');
        }
    }

    // create system worker
    private static async createSystemWorker(): Promise<void> {
        createWorker(Constants.Queue.SYSTEM, async job => {
            // 处理 job
            console.log('system worker:', job.data);
        });
    }
}

