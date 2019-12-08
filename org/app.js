const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./boot')();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//router.group enable
require('./routes/expressGroup');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next('Not found');
});

// error handler
app.use(function(err, req, res, next) {
  res.status(500);
  res.send('error');
});

module.exports = app;
