// constants.ts
import {QueueOptions} from "bullmq";
import {RedisOptions} from "ioredis/built/redis/RedisOptions";

export namespace Constants {
    // export const MY_CONSTANT = 'some-value';
    // export const ANOTHER_CONSTANT = 123;

    export namespace Queue {
        export const SYSTEM = 'queue-system';
        export const SYSTEM_HOUSEKEEPER = 'housekeeper';

        // export const SYSTEM_CRON = '*/1 * * * * *';
        export const SYSTEM_CRON = '*/10 * * * *';

        export const DEFAULT = 'queue-default';
    }

    export namespace Redis {
        const host: string = "36.137.225.245";
        const port: number = 6376;
        const password: string = "mtic0756-dev";
        const db: number = 3;

        export const QUEUE_CONFIG: QueueOptions['connection'] = {
            host: host,
            port: port,
            password: password,
            db: db
        };

        export const IOREDIS_CONFIG: RedisOptions = {
            host: host,
            port: port,
            password: password,
            db: db
        }

        export const PAUSE_JOB_CHANNEL: string = 'pauseJob';

        export const RESUME_JOB_CHANNEL: string = 'resumeJob';

    }

    export namespace Request {
        export const API_LOG_URL: string = "http://192.168.0.206:7150/api/v1/mtim-service-base/sys/syslog"
    }

}