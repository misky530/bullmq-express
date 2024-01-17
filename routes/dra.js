const dra = require('../td/dra');

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({message: 'dra home page'});
});

router.post('/getLatestProp', function (req, res, next) {
    const {propId, val} = dra.getLatestProp('id123');
    console.log('getLatestProp', propId, val);
    res.status(200).json({message: 'getLatestProp'});
});


module.exports = router;
