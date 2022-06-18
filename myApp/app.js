const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require("express-session")
const db = require('./database/models');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productRouter = require('./routes/product')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "myApp",
  resave: false,
  saveUninitialized: true
}))

app.use(function(req, res, next){

  if(req.session.user != undefined) {
    res.locals.user = req.session.user;
    return next();
  }
return next();
});


app.use(function(req, res, next){

  if (req.cookies.userId != undefined && req.session.user == undefined) {

    let idUsuario = req.cookies.userId;

    db.Usuario.findByPk(idUsuario)
    .then((user) => {
      req.session.user = user.dataValues;
      res.locals.user = user.dataValues;
      return next()
    }) .catch((err) => {
      console.log(err);
    })
  } else {
    return next();
  }
}) 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productRouter);


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