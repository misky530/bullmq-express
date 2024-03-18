const express = require('express');
const router = express.Router();
const mqtt = require('../src/td/mqtt');


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'mqtt home page'});
});


router.post('/publish', function (req, res, next) {
    mqtt.publish(req.body.topic, req.body.message).then(r => {
        res.status(200).json({message: 'publish', data: r});
    }).catch(e => {
        res.status(500).json({message: 'publish', error: e});
    });

});


module.exports = router;
