import * as fs from 'fs';

export class FileUtil {
    public static async readFileContent(filePath: string): Promise<string> {
        return new Promise<string>((resolve, reject) =>
            fs.readFile(filePath, 'utf8', (err: NodeJS.ErrnoException | null, data: string | Buffer) => {
                if (err) {
                    reject(err);
                    return;
                }

                const fileContent: string = decodeURIComponent(data.toString());
                resolve(fileContent);
            })
        );
    }

    // get file list in directory
    public static async getFileListInDirectory(directory: string): Promise<string[]> {
        return new Promise<string[]>((resolve, reject) => {
            fs.readdir(directory, (err, files) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(files);
            });
        });
    }
}

