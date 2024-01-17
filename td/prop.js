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
const propGetVals = function (propIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return [{ propId: "123", val: 25.6 }];
    });
};
const propGetVal = function (propIds) {
    return __awaiter(this, void 0, void 0, function* () {
        return { propId: "123", val: 25.6 };
    });
};
const propSetVals = function (propVals) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(propVals);
    });
};
const propSetVal = function (propVals) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(propVals);
    });
};
const propSetOn = function (propId, val = 1) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(propId, val);
    });
};
const propSetOff = function (propId, val = 0) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(propId, val);
    });
};
module.exports = { propGetVals, propGetVal, propSetVals, propSetVal, propSetOn, propSetOff };
