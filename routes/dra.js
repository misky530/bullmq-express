const dra = require('../td/dra');

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({message: 'dra home page'});
});

router.post('/getLatestProp', async function (req, res, next) {
    const {propIds} = req.body;
    const {propId, val} = await dra.getLatestProp(propIds);
    console.log('getLatestProp', propId, val);
    res.status(200).json({propId, val});
});


module.exports = router;
