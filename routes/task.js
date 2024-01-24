const express = require('express');
const router = express.Router();
const {Task} = require('../src/td/task');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json({message: 'task home page'});
});


// add repeat jobs
router.post('/addRepeatJob', async (req, res) => {

    const {name, data, pattern} = req.body; // 获取请求体中的参数
    console.log("pattern:" + pattern); // 获取请求体中的参数

    await Task.addRepeatJobs(name, data, pattern).then(r => {
        res.status(200).json({message: 'repeat job add ok!'});
    }).catch(e => {
        res.status(200).json({message: 'repeat job add error!', error: e});
    });
});

// remove repeat jobs
router.post('/removeRepeatJob', (req, res) => {
    const {name, pattern} = req.body; // 获取请求体中的参数
    console.log("pattern:" + pattern); // 获取请求体中的参数
    console.log("name:" + name); // 获取请求体中的参数
    Task.removeRepeatJobs(name, pattern).then(r => {
        res.status(200).json({message: 'repeat job remove ok!'});
    }).catch(e => {
        res.status(200).json({message: 'repeat job remove error!', error: e});
    });
});

// clean
router.post('/cleanCompleted', (req, res) => {
    Task.cleanCompleted().then(r => {
        res.status(200).json({message: 'cleanComAndFailed ok!'});
    }).catch(e => {
        res.status(200).json({message: 'cleanComAndFailed error!', error: e});
    });
});

//clean all
router.post('/cleanAll', (req, res) => {
    Task.cleanAll().then(r => {
        res.status(200).json({message: 'clean all ok!'});
    }).catch(e => {
        res.status(200).json({message: 'clean all error!', error: e});
    });
});

// pause job
router.post('/pauseJob', (req, res) => {
    const {name} = req.body; // 获取请求体中的参数
    console.log("name:" + name);
    Task.pauseJob(name).then(r => {
        res.status(200).json({message: 'pause job ok!'});
    }).catch(e => {
        res.status(200).json({message: 'pause job error!', error: e});
    });
});

// resume job
router.post('/resumeJob', (req, res) => {
    const {name} = req.body; // 获取请求体中的参数
    Task.resumeJob(name).then(r => {
        res.status(200).json({message: 'resume job ok!'});
    }).catch(e => {
        res.status(200).json({message: 'resume job error!', error: e});
    });
});


module.exports = router;
