'use strict';

require('dotenv').load();
import express from 'express';
import path from 'path';
// import favicon from 'serve-favicon';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
const app = express();

if(process.env.TESTING){
  // If Testing, have clear console
  const MONGOURL = 'mongodb://localhost/test';
  mongoose.connect(MONGOURL);

} else {
  // If not testing, show it all in console
  app.use(morgan('dev'));
  const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost/newfie';
  mongoose.connect(MONGOURL, err => {
    console.log(err || `MongoDB connected to ${MONGOURL}`);
  });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middleware
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//my basic routes
app.use('/auth', require('./server/routes/auth'));
app.use('/api', require('./server/routes/api'));
app.use('/', require('./server/routes/index'));

// catch 404 and forward to error handler
app.use(function(req, res) {
  const err = new Error('Not Found');
  err.status = 404;
  res.send(err);
});

module.exports = app;
