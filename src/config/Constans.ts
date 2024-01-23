// constants.ts
import {QueueOptions} from "bullmq";

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
        export const CONFIG: QueueOptions['connection'] = {
            host: "36.137.225.245",
            port: 6376,
            password: "mtic0756-dev",
            db: 3
        };
    }


}