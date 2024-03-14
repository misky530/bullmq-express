const _mticProp = require('../td/prop');

(async function () {
    let taskStatus;
    let aaaa = 0;


    function _mticTimeOp(type, interval, unit) {
        function formatDate(date) {
            var year = date.getFullYear();
            var month = padZero(date.getMonth() + 1);
            var day = padZero(date.getDate());
            var hours = padZero(date.getHours());
            var minutes = padZero(date.getMinutes());
            var seconds = padZero(date.getSeconds());

            return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        }

        function padZero(num) {
            return num < 10 ? '0' + num : num;
        }

        var dicts = {
            second: 1,
            minute: 60,
            hour: 3600,
            day: 3600 * 24,
            week: 3600 * 24 * 7,
            month: 3600 * 24 * 30,
            year: 3600 * 24 * 365
        };
        var now = new Date();
        var nowMillis = now.getTime();
        var extra = dicts[unit] * 1000 * interval;
        var oneMinuteLaterMillis
        if (type === 'add') {
            oneMinuteLaterMillis = nowMillis + extra;
        } else {
            oneMinuteLaterMillis = nowMillis - extra;
        }
        var result = new Date(oneMinuteLaterMillis);
        return formatDate(result);
    }


    async function Event_1djd8dn() {

    }


    async function Activity_07lnie5() {
        aaaa = await _mticProp.propGetVal("1410977729825874097");

        console.log(aaaa)

        await Event_1djd8dn();

    }


    await Activity_07lnie5();


})()