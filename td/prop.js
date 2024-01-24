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
const RedisClient_1 = require("../src/utils/RedisClient");
const mqtt = require('./mqtt');
const propGetVals = function (propIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield RedisClient_1.RedisClient.multiGet(propIds);
    });
};
const propGetVal = function (propId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield RedisClient_1.RedisClient.get(propId);
    });
};
const propSetVals = function (propVals) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield mqtt.propSetVal();
    });
};
const propSetVal = function (propId, val) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield mqtt.propSetVal(propId, val);
    });
};
const propSetOn = function (propId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield mqtt.propSetOn(propId);
    });
};
const propSetOff = function (propId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield mqtt.propSetOff(propId);
    });
};
module.exports = { propGetVals, propGetVal, propSetVals, propSetVal, propSetOn, propSetOff };
