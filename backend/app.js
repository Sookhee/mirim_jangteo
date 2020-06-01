
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mysql = require('mysql');

const session = require('express-session');

// const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const storeRouter = require('./routes/store');

// const models = require('./models/index');
// var sequelize = require('./models').sequelize;

const app = express();

app.use(cors());

// const sequelize = require('sequelize');
// const Op = sequelize.Op;
//
// var {User} = require('./models');
// var {Sale} = require('./models');
// var {Product} = require('./models');
// var {Like} = require('./models');
// var {Banner} = require('./models');

app.listen(5000, () => {
  console.log('5000 포트로 연결됨');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/store', storeRouter);

// models.sequelize.sync().then( () => {
//   console.log(' DB 연결 성공 ');
// }).catch(err => {
//   console.log(' DB 연결 실패 ');
//   console.log(err);
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(cookieParser('secret code'));
app.use(session({
  key: 'sid',
  secret: 'secret code',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
  }
}));

module.exports = app;