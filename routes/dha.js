const express = require('express');
const router = express.Router();


/* GET users listing. */


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'dha home page'});
});

router.get('/getPropsHistoryData', function (req, res, next) {
    res.status(200).json({message: 'getPropsHistoryData'});
});

router.get('/getPropsHistoryValueByTime', function (req, res, next) {
    res.status(200).json({message: 'getPropsHistoryValueByTime'});
});


module.exports = router;
