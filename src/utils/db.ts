import Database from 'better-sqlite3';

const options: Database.Options = {
    readonly: true,
    fileMustExist: true,
    timeout: 5000,
    verbose: console.log,
};

const db = new Database('foobar.db', options);

export class Db {
    // create instance
    private static instance: any;


    public static async executeQueryAsync(sql: string, params: any[]): Promise<any[]> {
        // const row = db.prepare('SELECT * FROM users WHERE id = ?').get(userId);
        return db.prepare(sql).all(params);
    }

    public static async executeNonQueryAsync(sql: string, params: any[]): Promise<void> {
        db.prepare(sql).run(params);
    }
}