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
exports.WorkerUtil = void 0;
const bullmq_1 = require("bullmq");
class WorkerUtil {
    // private worker: Worker;
    //
    // constructor(name: string = "queue-1003") {
    //     this.worker = new Worker(name);
    // }
    autoRemoval(queueName) {
        return __awaiter(this, void 0, void 0, function* () {
            const myWorker = new bullmq_1.Worker(queueName, (job) => __awaiter(this, void 0, void 0, function* () {
                // do some work
                console.log('job run');
            }), {
                connection: {
                    host: "36.137.225.245",
                    port: 6376,
                    password: "mtic0756-dev",
                    db: 3
                },
                removeOnFail: { count: 0 }
            });
        });
    }
}
exports.WorkerUtil = WorkerUtil;
