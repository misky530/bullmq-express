// initial business

export class InitializeApp{
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
    }
}

// create system task
// task.addRepeatJobs('system', {name: 'system'}, '*/1 * * * * *','queue-system')
//     .then(r => {})
//     .catch(e => {});
//
//
//
// // 创建 Worker 处理队列作业
// const worker = new Worker('myQueue', async job => {
//     // 处理 job
//     console.log(job.data);
// });