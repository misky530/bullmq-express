const express = require('express');


const {createBullBoard} = require('@bull-board/api');
const {BullMQAdapter} = require('@bull-board/api/bullMQAdapter');
const {ExpressAdapter} = require('@bull-board/express');
const {Queue} = require("bullmq");


const queueMQ = new Queue('queue-1003', {
    connection: {
        host: "36.137.225.245",
        port: 6376,
        password: "mtic0756-dev",
        db: 3
    }
})

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const {addQueue, removeQueue, setQueues, replaceQueues} = createBullBoard({
    queues: [new BullMQAdapter(queueMQ)],
    serverAdapter: serverAdapter,
});

// const app = express();
//
// app.use('/admin/queues', serverAdapter.getRouter());
//
// // other configurations of your server
//
// app.listen(3000, () => {
//     console.log('Running on 3000...');
//     console.log('For the UI, open http://localhost:3000/admin/queues');
//     console.log('Make sure Redis is running on port 6379 by default');
// });

module.exports = serverAdapter;