const express = require('express');
const router = express.Router();
const vm = require('../td/vm');


router.get('/', function (req, res, next) {
    res.status(200).json({message: 'vm home page'});
});


router.post('/execute', function (req, res, next) {
    const resp = vm.evalScript(req.body.script);
    console.log('resp:', resp);

    if (resp instanceof Promise) {
        resp.then(r => {
            console.log('eval script:', r);
            res.status(200).json({message: 'eval completed', data: r});
        }).catch(e => {
            res.status(500).json({message: 'eval error', error: e});
        });
    } else {
        res.status(200).json({message: 'eval completed', data: resp});
    }


    // resp.then(r => {
    //     console.log('eval script:', r);
    //     res.status(200).json({message: 'eval completed', data: r});
    // }).catch(e => {
    //     res.status(500).json({message: 'eval error', error: e});
    // });
    // console.log('eval script:', ok);
    // res.status(200).json({message: 'publish', data: ok});

    // vm.evalScript(req.body.script).then(r => {
    //     console.log('eval script:', r);
    //     res.status(200).json({message: 'eval completed', data: r});
    // }).catch(e => {
    //     res.status(500).json({message: 'eval error', error: e});
    // });

});


module.exports = router;
