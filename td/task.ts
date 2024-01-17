import {TaskUtil} from "../utils/TaskUtil";

const start = async function (taskId: string) {
    console.log('start', taskId);
    const taskUtil = new TaskUtil();
    return await taskUtil.start(taskId, {name: "test"});

}

module.exports = {start};