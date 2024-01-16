const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'prop home page'});
});

router.get('/propGetVals', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propGetVal', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetVals', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetVal', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetOn', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetOff', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});



module.exports = router;
