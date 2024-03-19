import Database from 'better-sqlite3';
import {Constants} from "../config/Constans";

const options: Database.Options = {
    readonly: false,
    fileMustExist: true,
    timeout: 5000,
    verbose: console.log,
};


// import Database from 'better-sqlite3';
// const db = new Database('foobar.db', options);


export class SqliteHelper {
    private static instance: SqliteHelper;
    private static db: any;

    // 私有构造函数防止直接实例化
    private constructor() {

    }

    private static getInstance(): SqliteHelper {
        if (!SqliteHelper.instance) {
            SqliteHelper.instance = new SqliteHelper();
            SqliteHelper.db = new Database(`${Constants.System.DB_PATH}\\${Constants.System.DB_NAME}`, options);
            SqliteHelper.db.pragma('journal_mode = WAL');
        }
        return SqliteHelper.instance;
    }

    public static executeQuery(sql: string, params: any[]): Promise<any[]> {
        // const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
        this.getInstance();
        const db = SqliteHelper.db;
        return db.prepare(sql).all(params);
    }

    public static async executeNonQuery(sql: string, params: any[]): Promise<void> {
        this.getInstance();
        SqliteHelper.db.prepare(sql).run(params);
    }
}