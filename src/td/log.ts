import {Constants} from "../config/Constans";
import {RequestUtil} from "../utils/RequestUtil";

export class Log {
    public static async opLog(log: OperationLog, apiUrl: string = Constants.Request.API_LOG_URL): Promise<any> {
        const params = this.BuildParams(log, OperateTypeEnum.Operation)

        return await RequestUtil.requestPost(apiUrl, params)
    }

    public static async cmdLog(log: OperationLog, apiUrl: string = Constants.Request.API_LOG_URL): Promise<any> {
        const params = this.BuildParams(log, OperateTypeEnum.cmd)

        return await RequestUtil.requestPost(apiUrl, params)
    }

    private static BuildParams(log: OperationLog, OperateType: OperateTypeEnum): any {
        return {
            logContent: log.LogContent,
            createBy: log.CreateBy,
            username: log.Username,
            propName: log.PropName,
            operateType: OperateType
        };
    }
}