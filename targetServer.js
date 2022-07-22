var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var indexRouter = require('./routes/target');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);

// error handler
app.use(function(err, req, res, next) {
  res.send('error');
});

app.listen(3010, () => console.log('server is running on 3010'))

module.exports = app;
