const express = require('express');
const router = express.Router();


/* GET users listing. */


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'alarm home page'});
});

router.get('/alarm', function (req, res, next) {
    res.status(200).json({message: 'alarm'});
});


module.exports = router;
