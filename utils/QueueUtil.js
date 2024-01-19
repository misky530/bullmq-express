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
exports.QueueUtil = void 0;
const ParamUtil_1 = require("../utils/ParamUtil");
const bullmq_1 = require("bullmq");
class QueueUtil {
    constructor(name = "queue-1003") {
        this.queue = new bullmq_1.Queue(name, {
            connection: {
                host: "36.137.225.245",
                port: 6376,
                password: "mtic0756-dev",
                db: 3
            }
        });
    }
    start(taskId, data, isMultiInstance = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ParamUtil_1.ParamUtil.ensureValidParam(taskId);
            if (id) {
                yield this.queue.add(id, data);
            }
            else {
                throw new Error("taskId is null");
            }
            return null;
        });
    }
    stop(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = ParamUtil_1.ParamUtil.ensureValidParam(taskId);
            if (id) {
                yield this.queue.getJob(id).then(job => {
                    if (job) {
                        job.remove();
                    }
                });
            }
            else {
                throw new Error("taskId is null");
            }
            return null;
        });
    }
    suspend(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (taskId) {
            }
            else {
                throw new Error("taskId is null");
            }
            return null;
        });
    }
    resume(taskId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (taskId) {
            }
            else {
                throw new Error("taskId is null");
            }
            return null;
        });
    }
    // add repeat job
    addRepeatJobs(name, data, pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            // const repeat = {pattern: pattern};
            console.log('name:', name);
            const repeat = { pattern: pattern };
            yield this.queue.add(name, data, { repeat });
        });
    }
}
exports.QueueUtil = QueueUtil;
