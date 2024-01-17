const express = require('express');
const router = express.Router();
const worker = require('../td/worker');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json({message: 'worker home page'});
});


router.post('/autoRemoval', async function (req, res, next) {
    const {queueName} = req.body; // 获取请求体中的参数

    const result = await worker.autoRemoval(queueName)

    // task.addJobs(name, data)
    res.status(200).json({message: result});
});


module.exports = router;
