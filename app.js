var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const taskRouter = require('./routes/task');
const draRouter = require('./routes/dra');
const dhaRouter = require('./routes/dha');
const alarmRouter = require('./routes/alarm');
const propRouter = require('./routes/prop');
const workerRouter = require('./routes/worker');
const mqttRouter = require('./routes/mqtt');
const vmRouter = require('./routes/vm');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/task', taskRouter);
app.use('/dra', draRouter);
app.use('/dha', dhaRouter);
app.use('/alarm', alarmRouter);
app.use('/prop', propRouter);
app.use('/worker', workerRouter);
app.use('/mqtt', mqttRouter);
app.use('/vm', vmRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
