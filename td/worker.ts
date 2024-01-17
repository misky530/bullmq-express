import {WorkerUtil} from "../utils/WorkerUtil";

const autoRemoval = async function (queueName: string) {

    const worker = new WorkerUtil();
    return await worker.autoRemoval(queueName)
}

module.exports = {autoRemoval};