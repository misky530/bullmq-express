// app.js

// const mqtt = require('../td/mqtt');

const evalScript = function (script: string) {
    const content = decodeURIComponent(script)
    const result = eval(content);
    console.log('result:', result);
    return result;
}

module.exports = {evalScript};