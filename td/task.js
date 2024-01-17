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
const QueueUtil_1 = require("../utils/QueueUtil");
const start = function (taskId) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('start', taskId);
        const taskUtil = new QueueUtil_1.QueueUtil();
        return yield taskUtil.start(taskId, { name: "test" });
    });
};
const addRepeatJobs = function (taskId, data, pattern) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('addRepeatJobs', taskId);
        const taskUtil = new QueueUtil_1.QueueUtil();
        //*/1 * * * * *
        return yield taskUtil.addRepeatJobs(taskId, data, pattern);
    });
};
module.exports = { start, addRepeatJobs };
