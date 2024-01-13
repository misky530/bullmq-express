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


// 导出你的工具函数
module.exports = {addJobs};

//  npx tsc