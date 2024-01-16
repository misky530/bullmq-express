import {Queue} from 'bullmq';

// const myQueue = new Queue('foo');
const myQueue = new Queue('myqueue-1002', {
    connection: {
        host: "36.137.225.245",
        port: 6376,
        password: "mtic0756-dev",
        db: 3
    }
});

// // 添加任务
// app.post('/add', async (req, res) => {
//     const { data } = req.body;
//     const job = await myQueue.add('myJob', data);
//     res.status(201).json({ id: job.id });
// });
//
// // 暂停队列
// app.post('/pause', async (req, res) => {
//     await myQueue.pause();
//     res.status(200).json({ message: 'Queue paused' });
// });
//
// // 恢复队列
// app.post('/resume', async (req, res) => {
//     await myQueue.resume();
//     res.status(200).json({ message: 'Queue resumed' });
// });
//
// // 移除任务
// app.delete('/remove/:jobId', async (req, res) => {
//     const { jobId } = req.params;
//     const job = await myQueue.getJob(jobId);
//     if (job) {
//         await job.remove();
//         res.status(200).json({ message: `Job ${jobId} removed` });
//     } else {
//         res.status(404).json({ message: `Job ${jobId} does not exist` });
//     }
// });
//
// // 获取队列中的任务状态
// app.get('/jobs', async (req, res) => {
//     const jobs = await myQueue.getJobs(['waiting', 'active', 'completed', 'failed']);
//     res.status(200).json(jobs);
// });

const addJobs = async function addJobs(name: string, data: any) {
    await myQueue.add(name, data);
}

// add delay job
const addDelayJobs = async function addDelayJobs(name: string, data: any, delay: number) {
    await myQueue.add(name, data, {delay});
}

// add job and Remove all finalized jobs
const addJobsAndRemove = async function addJobsAndRemove(name: string, data: any) {
    await myQueue.add(name, data, {removeOnComplete: true});
}

// add job and Remove all failed jobs
const addJobsAndRemoveFailed = async function addJobsAndRemoveFailed(name: string, data: any) {
    await myQueue.add(name, data, {removeOnFail: true});
}

// add job and Keep a certain number of jobs
const addJobsAndKeep = async function addJobsAndKeep(name: string, data: any) {
    await myQueue.add(name, data, {removeOnComplete: 100, removeOnFail: 100});
}

// add job and Keep jobs for a certain amount of time
const addJobsAndKeepTime = async function addJobsAndKeepTime(name: string, data: any) {
    await myQueue.add(name, data, {removeOnComplete: 1000 * 60 * 60, removeOnFail: 1000 * 60 * 60});
}

// add repeat job
const addRepeatJobs = async function addRepeatJobs(name: string, data: any, pattern: string) {
    const repeat = {pattern: pattern};
    await myQueue.add(name, data, {repeat});
}

// Adding jobs in bulk
const addJobsBulk = async function addJobsBulk(data: any) {
    await myQueue.addBulk([
        data
    ]);
}

// Removing Jobs
const removeJobs = async function removeJobs(jobId: string) {
    const job = await myQueue.getJob(jobId);
    if (job) {
        await job.remove();
    }
}

// Removes all jobs that are waiting or delayed, but not active, waiting-children, completed or failed.
const removeJobsWaiting = async function removeJobsWaiting() {
    await myQueue.drain();
}


// 导出你的工具函数
module.exports = {addJobs, addRepeatJobs};

//  npx tsc