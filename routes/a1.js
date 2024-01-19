const {Queue} = require('bullmq');
const {createBullBoard} = require('bull-board');
const {BullMQAdapter} = require('bull-board/bullMQAdapter');
const express = require('express');

const queue1 = new Queue('queue-1003', {
    connection: {
        host: "36.137.225.245",
        port: 6376,
        password: "mtic0756-dev",
        db: 3
    }
});

const queue2 = new Queue('myqueue-1002', {
    connection: {
        host: "36.137.225.245",
        port: 6376,
        password: "mtic0756-dev",
        db: 3
    }
});

const app = express();

// 设置 bull-board
const {router} = createBullBoard({
    queues: [
        new BullMQAdapter(queue1),
        new BullMQAdapter(queue2)
        // 如果你有更多的队列，可以添加更多的 BullMQAdapter 实例
    ],
    serverAdapter: 'ExpressAdapter'
});

module.exports = router;

// // 将 bull-board router 添加到你的 Express 应用中
// app.use('/admin/queues', router);
//
//
// // 启动Express服务器
// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server running on http://localhost:${port}`);
// });
