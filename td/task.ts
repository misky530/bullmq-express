import {QueueUtil} from "../utils/QueueUtil";

const start = async function (taskId: string) {
    console.log('start', taskId);
    const taskUtil = new QueueUtil();
    return await taskUtil.start(taskId, {name: "test"});

}

const addRepeatJobs = async function (taskId: string, data: any, pattern: string) {
    console.log('addRepeatJobs', taskId);
    const taskUtil = new QueueUtil();

    //*/1 * * * * *
    return await taskUtil.addRepeatJobs(taskId, data, pattern);
}


module.exports = {start, addRepeatJobs};