const getPropsHistoryData = async function (propIds: string, timeStart: number, timeEnd: number) {
    return {id: "123", name: "温度", tag: "121233", value: 25.6};
}

const getPropsHistoryValueByTime = async function (propIds: string, time: number, mode: string) {
    return {id: "123", name: "温度", tag: "121233", value: 25.6};
}

module.exports = {getPropsHistoryData, getPropsHistoryValueByTime};