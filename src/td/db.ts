import {SqliteHelper} from "../utils/SqliteHelper";

export class Db{
    //get all task
    public static async getAllTask(): Promise<any>{
        const sql = `SELECT * FROM tc_task`;
        return await SqliteHelper.executeQuery(sql, []);
    }

}