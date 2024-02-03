const express = require('express');
const router = express.Router();
const cloudVar = require('../src/cloudVar');


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'cloud var home page'});
});

router.get('/varGetVals', function (req, res, next) {
    const {propIds} = req.body;
    cloudVar.varGetVals(propIds).then(r => {
        res.status(200).json({message: 'propGetVals', data: r});
    }).catch(e => {
        res.status(200).json({message: 'propGetVals', error: e});
    });

});

router.get('/varGetVal', function (req, res, next) {
    const {propId} = req.body;
    cloudVar.varGetVal(propId).then(r => {
        res.status(200).json({message: 'propGetVal', data: r});
    }).catch(e => {
        res.status(200).json({message: 'propGetVal', error: e});
    });

});

router.get('/varSetVals', function (req, res, next) {
    const paraVals = req.body;

    cloudVar.varSetVals(propId, val).then(r => {
        res.status(200).json({message: 'propSetVal', data: r});
    }).catch(e => {
        res.status(500).json({message: 'propSetVal', error: e});
    });

});

router.post('/varSetVal', function (req, res, next) {
    const {propId, val} = req.body;
    cloudVar.varSetVal(propId, val).then(r => {
        res.status(200).json({message: 'propSetVal', data: r});
    }).catch(e => {
        res.status(500).json({message: 'propSetVal', error: e});
    });

});


module.exports = router;
