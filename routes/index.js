var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hey, here is noejs server on 3000 port')
});

module.exports = router;
