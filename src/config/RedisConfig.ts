import { QueueOptions } from 'bullmq';

export const redisConfig: QueueOptions['connection'] = {
    host: "36.137.225.245",
    port: 6376,
    password: "mtic0756-dev",
    db: 3
};