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
const QueueFactory_1 = require("../src/utils/QueueFactory");
const start = function (taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log('start', taskId);
        // const taskUtil = new QueueUtil();
        // return await taskUtil.start(taskId, {name: "test"});
    });
};
const addRepeatJobs = function (taskId, data, pattern, queueName = 'queue-1003') {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('addRepeatJobs', taskId);
        const queueUtil = QueueFactory_1.QueueFactory.getInstance(queueName);
        //*/1 * * * * *
        return yield queueUtil.addRepeatJobs(taskId, data, pattern);
    });
};
//remove repeat job
const removeRepeatJobs = function (taskId, pattern, queueName = 'queue-1003') {
    return __awaiter(this, void 0, void 0, function* () {
        const queueUtil = QueueFactory_1.QueueFactory.getInstance(queueName);
        //*/1 * * * * *
        return yield queueUtil.removeRepeatJobs(taskId, pattern);
    });
};
// clean job
const cleanComAndFailed = function (queueName = 'queue-1003') {
    return __awaiter(this, void 0, void 0, function* () {
        const queueUtil = QueueFactory_1.QueueFactory.getInstance(queueName);
        return yield queueUtil.cleanComAndFailed();
    });
};
// clean all
const cleanAll = function () {
    return __awaiter(this, void 0, void 0, function* () {
        const queueUtil = QueueFactory_1.QueueFactory.getInstance('queue-1003');
        return yield queueUtil.cleanAll();
    });
};
module.exports = { addRepeatJobs, removeRepeatJobs, cleanComAndFailed, cleanAll };
