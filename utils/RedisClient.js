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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisClient = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
class RedisClient {
    constructor() {
        this.client = new ioredis_1.default({
            host: '36.137.225.249',
            port: 6376,
            password: 'mtic0756-prod', // 如果设置了密码，取消注释并填入密码
            db: 10, // 如果你想使用不同的数据库，取消注释并指定数据库编号
        });
    }
    set(key, value, expireTime) {
        return __awaiter(this, void 0, void 0, function* () {
            if (expireTime) {
                return this.client.set(key, value, 'EX', expireTime);
            }
            else {
                return this.client.set(key, value);
            }
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            // const key1 = "dp:shadow:1397095337741856770:1401722937861611528:1450345423108579330";
            // console.time('key1');
            // const val1 = await this.client.get(key1);
            // console.log('val1', val1);
            // console.timeEnd('key1');
            //模糊匹配
            const keys = yield this.keys("*" + key);
            if (keys && keys.length > 0) {
                for (let key of keys) {
                    console.log('key', key);
                    if (key.includes("dp")) {
                        return this.client.get(key);
                    }
                }
            }
            return null;
            // const val = await this.client.get(key);
            // console.log('val', val);
            // return val;
        });
    }
    //get keys by pattern
    keys(pattern) {
        return __awaiter(this, void 0, void 0, function* () {
            console.time('keys');
            const keys = yield this.client.keys(pattern);
            console.log('keys', keys);
            console.timeEnd('keys');
            return keys;
        });
    }
    // 你可以根据需要继续添加更多方法
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.quit();
        });
    }
}
exports.RedisClient = RedisClient;
