var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Hi, here is nodejs server on 3000 port')
});

router.get('/account', function(req, res, next) {
  res.send('/account')
});

module.exports = router;
