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
const RedisClient_1 = require("../utils/RedisClient");
const getLatestProp = function (propIds) {
    return __awaiter(this, void 0, void 0, function* () {
        const redisClient = new RedisClient_1.RedisClient();
        const val = yield redisClient.get("dp:shadow:1392095804881248288:1392095804881248291:1410977729825873920");
        return { propId: "1410977729825873920", val: val };
    });
};
module.exports = { getLatestProp };
