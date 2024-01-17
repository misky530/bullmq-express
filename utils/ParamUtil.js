"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamUtil = void 0;
class ParamUtil {
    // 参数检查函数
    static ensureValidParam(param) {
        if (param == null || param.length == 0) {
            throw new Error('Parameter cannot be null, undefined, or only whitespace');
        }
        return param.trim();
    }
}
exports.ParamUtil = ParamUtil;
