// app.js

// const mqtt = require('../td/mqtt');

const evalScript = async function (script: string) {
    await eval(script);
}

module.exports = {evalScript};