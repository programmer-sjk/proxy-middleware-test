var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('welcome from proxy, here is noejs server on 3010 port')
});

router.get('/info', function(req, res, next) {
  res.send('info page')
});

module.exports = router;
