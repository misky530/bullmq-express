import {ParamUtil} from "../utils/ParamUtil";

export class TaskUtil {
    // constructor() {
    //     this.client = new Redis({
    //         host: '36.137.225.249',
    //         port: 6376,
    //         password: 'mtic0756-prod', // 如果设置了密码，取消注释并填入密码
    //         db: 10,                           // 如果你想使用不同的数据库，取消注释并指定数据库编号
    //     });
    // }

    public async start(taskId: string | null, isMultiInstance: boolean = false): Promise<'OK' | null> {
        const id = ParamUtil.ensureValidParam(taskId)

        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async stop(taskId: string | null): Promise<'OK' | null> {
        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async suspend(taskId: string | null): Promise<'OK' | null> {
        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }

    public async resume(taskId: string | null): Promise<'OK' | null> {
        if (taskId) {

        } else {
            throw new Error("taskId is null");
        }

        return null;
    }
}