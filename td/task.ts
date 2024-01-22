import {QueueFactory} from "../src/utils/QueueFactory";

const start = async function (taskId: string) {
    // console.log('start', taskId);
    // const taskUtil = new QueueUtil();
    // return await taskUtil.start(taskId, {name: "test"});

}

const addRepeatJobs = async function (name: string, data: any, pattern: string, queueName: string = 'queue-1003') {
    console.log('addRepeatJobs', name);
    const queueUtil = QueueFactory.getInstance(queueName);

    //*/1 * * * * *
    return await queueUtil.addRepeatJobs(name, data, pattern);
}

//remove repeat job
const removeRepeatJobs = async function (taskId: string, pattern: string, queueName: string = 'queue-1003') {
    const queueUtil = QueueFactory.getInstance(queueName);

    //*/1 * * * * *
    return await queueUtil.removeRepeatJobs(taskId, pattern);
}

// clean job
const cleanComAndFailed = async function (queueName: string = 'queue-1003') {
    const queueUtil = QueueFactory.getInstance(queueName);
    return await queueUtil.cleanComAndFailed();
}

// clean all
const cleanAll = async function () {
    const queueUtil = QueueFactory.getInstance('queue-1003');
    return await queueUtil.cleanAll();
}


module.exports = {addRepeatJobs, removeRepeatJobs, cleanComAndFailed, cleanAll};