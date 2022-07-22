var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var indexRouter = require('./routes/index');
const { createProxyMiddleware } = require('http-proxy-middleware');

var app = express();
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3010',
  changeOrigin: true,
  pathRewrite: {
    '^/api' : '/'
  }
}));
app.use('/', indexRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// error handler
app.use(function(err, req, res, next) {
  console.log(err)
  next(err)
});

app.listen(3000, () => console.log('server is running on 3000'))

module.exports = app;
