const express = require('express');
const router = express.Router();
const queue = require('../queue/queue'); // 导入数据库模块

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json({message: 'task home page'});
});


router.post('/add', function (req, res, next) {
    const {name, data} = req.body; // 获取请求体中的参数

    queue.addJobs(name, data)
    res.status(200).json({message: 'Queue add ok!'});
});

// 定义POST请求的路由处理函数
router.post('/example', (req, res) => {
    console.log("body:" + req.body); // 获取请求体中的参数
    const {param1, param2} = req.body; // 获取请求体中的参数
    console.log(param1, param2);

    // 处理请求...

    res.send('POST请求已处理');
});

// add repeat jobs
router.post('/addRepeatJob', (req, res) => {

    const {name, data, pattern} = req.body; // 获取请求体中的参数
    console.log("pattern:" + pattern); // 获取请求体中的参数

    queue.addRepeatJobs(name, data, pattern).then(r => {
        res.status(200).json({message: 'repeat job add ok!'});
    }).catch(e => {
        res.status(200).json({message: 'repeat job add error!'});
    });


});

module.exports = router;
