const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).json({message: 'dra home page'});
});

router.get('/getLatestProp', function (req, res, next) {
    res.status(200).json({message: 'getLatestProp'});
});


module.exports = router;
