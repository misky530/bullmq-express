import {QueueUtil} from "../utils/QueueUtil";

const start = async function (taskId: string) {
    console.log('start', taskId);
    const taskUtil = new QueueUtil();
    return await taskUtil.start(taskId, {name: "test"});

}

module.exports = {start};