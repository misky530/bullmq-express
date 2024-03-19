import {SqliteHelper} from "../utils/SqliteHelper";
import {FileUtil} from "../utils/FileUtil";
import {Constants} from "../config/Constans";

export class Db {
    //get all task
    public static getAllTask(): any {
        const sql = `SELECT * FROM tc_task`;
        return SqliteHelper.executeQuery(sql, []);
    }

    public static async initialize(): Promise<void> {
        // get all task
        const tasks = await this.getAllTask();
        if (tasks && tasks.length > 0) {

            //get file list
            const files = await FileUtil.getFileListInDirectory(Constants.System.TASK_PATH);
            if (files && files.length > 0) {
                // console.log('files:', files);

                // 匹配任务, 用taskId模糊匹配文件名
                for (const task of tasks) {
                    console.log('task:', task);
                    const taskId = task.id;
                    const matchFiles = files.filter(file => file.indexOf(taskId) > -1);
                    console.log('matchFiles:', matchFiles);

                    if (matchFiles && matchFiles.length > 0) {
                        //load task
                        const file = matchFiles[0];
                        const filePath = `${Constants.System.TASK_PATH}\\${file}`;
                        const fileContent = await FileUtil.readFileContent(filePath);
                        console.log('fileContent:', fileContent);
                        const result = eval(fileContent);
                        console.log('result:', result);
                    }
                }
            }


        }
    }

}