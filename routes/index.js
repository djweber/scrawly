var express = require('express');
var router = express.Router();
var io = require('socket.io-client');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Scrawly' });
});

module.exports = router;
