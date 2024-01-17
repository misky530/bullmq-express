export class ParamUtil {
    // 参数检查函数
    public static ensureValidParam(param: string | null | undefined): string {
        if (param == null || param.length == 0) {
            throw new Error('Parameter cannot be null, undefined, or only whitespace');
        }
        return param.trim();
    }
}