require('winston-daily-rotate-file');
const winston = require('winston');

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console({
//             format: winston.format.simple(),
//         }),
//         new winston.transports.File({filename: 'app.log'}),
//     ],
// });


const transport = new winston.transports.DailyRotateFile({
    filename: 'mtim-task-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '7d'
});

transport.on('rotate', function (oldFilename, newFilename) {
    // do something fun
});

const logger = winston.createLogger({
    transports: [
        transport
    ]
});

module.exports = logger;