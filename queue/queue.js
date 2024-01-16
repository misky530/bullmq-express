"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bullmq_1 = require("bullmq");
// const myQueue = new Queue('foo');
const myQueue = new bullmq_1.Queue('myqueue-1002', {
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
const addJobs = function addJobs(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data);
    });
};
// add delay job
const addDelayJobs = function addDelayJobs(name, data, delay) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data, { delay });
    });
};
// add job and Remove all finalized jobs
const addJobsAndRemove = function addJobsAndRemove(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data, { removeOnComplete: true });
    });
};
// add job and Remove all failed jobs
const addJobsAndRemoveFailed = function addJobsAndRemoveFailed(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data, { removeOnFail: true });
    });
};
// add job and Keep a certain number of jobs
const addJobsAndKeep = function addJobsAndKeep(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data, { removeOnComplete: 100, removeOnFail: 100 });
    });
};
// add job and Keep jobs for a certain amount of time
const addJobsAndKeepTime = function addJobsAndKeepTime(name, data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.add(name, data, { removeOnComplete: 1000 * 60 * 60, removeOnFail: 1000 * 60 * 60 });
    });
};
// add repeat job
const addRepeatJobs = function addRepeatJobs(name, data, pattern) {
    return __awaiter(this, void 0, void 0, function* () {
        const repeat = { pattern: pattern };
        yield myQueue.add(name, data, { repeat });
    });
};
// Adding jobs in bulk
const addJobsBulk = function addJobsBulk(data) {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.addBulk([
            data
        ]);
    });
};
// Removing Jobs
const removeJobs = function removeJobs(jobId) {
    return __awaiter(this, void 0, void 0, function* () {
        const job = yield myQueue.getJob(jobId);
        if (job) {
            yield job.remove();
        }
    });
};
// Removes all jobs that are waiting or delayed, but not active, waiting-children, completed or failed.
const removeJobsWaiting = function removeJobsWaiting() {
    return __awaiter(this, void 0, void 0, function* () {
        yield myQueue.drain();
    });
};
// 导出你的工具函数
module.exports = { addJobs, addRepeatJobs };
//  npx tsc
