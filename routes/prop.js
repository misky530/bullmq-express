const express = require('express');
const router = express.Router();
const prop = require('../td/prop');
const mqtt=require('../td/mqtt');


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'prop home page'});
});

router.get('/propGetVals', function (req, res, next) {
    const {propIds} = req.body;
    prop.propGetVals(propIds).then(r => {
        res.status(200).json({message: 'propGetVals', data: r});
    }).catch(e => {
        res.status(200).json({message: 'propGetVals', error: e});
    });

});

router.get('/propGetVal', function (req, res, next) {
    const {propId} = req.body;
    prop.propGetVals(propId).then(r => {
        res.status(200).json({message: 'propGetVal', data: r});
    }).catch(e => {
        res.status(200).json({message: 'propGetVal', error: e});
    });

});

router.get('/propSetVals', function (req, res, next) {

    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetVal', function (req, res, next) {
    const {propId, val} = req.body;
    mqtt.publish(propId,val);
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetOn', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});

router.get('/propSetOff', function (req, res, next) {
    res.status(200).json({message: 'propGetVals'});
});


module.exports = router;
