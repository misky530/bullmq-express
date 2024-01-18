const express = require('express');
const router = express.Router();
const prop = require('../td/prop');
const mqtt = require('../td/mqtt');


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

router.post('/propSetVal', function (req, res, next) {
    const {propId, val} = req.body;
    mqtt.propSetVal(propId, val).then(r => {
        res.status(200).json({message: 'propSetVal', data: r});
    }).catch(e => {
        res.status(500).json({message: 'propSetVal', error: e});
    });

});

router.post('/propSetOn', function (req, res, next) {
    const {propId} = req.body;
    mqtt.propSetOn(propId).then(r => {
        res.status(200).json({message: 'propSetOn', data: r});
    }).catch(e => {
        res.status(500).json({message: 'propSetOn', error: e});
    });
});

router.post('/propSetOff', function (req, res, next) {
    const {propId} = req.body;
    mqtt.propSetOff(propId).then(r => {
        res.status(200).json({message: 'propSetOff', data: r});
    }).catch(e => {
        res.status(500).json({message: 'propSetOff', error: e});
    });
});


module.exports = router;
