const dra = require('../src/td/dra');

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({message: 'dra home page'});
});

router.post('/getLatestProp', async function (req, res, next) {
    const {propIds} = req.body;
    const propVals = await dra.getLatestProp(propIds);
    console.log('getLatestProp:', propVals);
    res.status(200).json(propVals);
});


module.exports = router;
