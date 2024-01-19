const express = require('express');
const router = express.Router();
const vm = require('../td/vm');


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'vm home page'});
});


router.post('/execute', function (req, res, next) {
    vm.evalScript(req.body.script).then(r => {
        res.status(200).json({message: 'publish', data: r});
    }).catch(e => {
        res.status(500).json({message: 'publish', error: e});
    });

});


module.exports = router;
