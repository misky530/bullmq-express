const express = require('express');
const router = express.Router();
const queue = require('../queue/queue'); // 导入数据库模块

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('task home page');
});


router.post('/add', function (req, res, next) {
    queue.addJobs('job1', {'data': 'data1'})
    res.send('task home page');
});

// 定义POST请求的路由处理函数
router.post('/example', (req, res) => {
    console.log("body:" + req.body); // 获取请求体中的参数
    const {param1, param2} = req.body; // 获取请求体中的参数
    console.log(param1, param2);

    // 处理请求...

    res.send('POST请求已处理');
});

module.exports = router;
