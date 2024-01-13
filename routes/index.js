var express = require('express');
var router = express.Router();
const queue = require('../queue/queue'); // 导入数据库模块


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/q', function (req, res, next) {
    queue.addJobs('job1', {'data': 'data1'})
    res.render('index', {title: 'Express'});
});

module.exports = router;
