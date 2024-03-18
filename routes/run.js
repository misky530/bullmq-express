const {FileUtil} = require('../src/utils/fileUtil');
const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).json({message: 'run home page'});
});


// add repeat jobs
router.post('/runFile', async (req, res) => {

    const {fileName} = req.body; // 获取请求体中的参数
    console.log("fileName:" + fileName); // 获取请求体中的参数

    FileUtil.readFileContent(fileName).then(r => {
        res.status(200).json({message: 'file content:', content: r});
    }).catch(e => {
        res.status(200).json({message: 'file content error!', error: e});
    });

});

module.exports = router;