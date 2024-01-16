const propGetVals = async function (propIds: string) {
    return [{propId: "123", val: 25.6}];
}

const propGetVal = async function (propIds: string) {
    return {propId: "123", val: 25.6};
}

const propSetVals = async function (propVals: [{ propId: string, val: number }]) {
    console.log(propVals);
}

const propSetVal = async function (propVals: [{ propId: string, val: number }]) {
    console.log(propVals);
}

const propSetOn = async function (propId: string, val: number = 1) {
    console.log(propId, val);
}

const propSetOff = async function (propId: string, val: number = 0) {
    console.log(propId, val);
}


module.exports = {propGetVals, propGetVal, propSetVals, propSetVal, propSetOn, propSetOff};