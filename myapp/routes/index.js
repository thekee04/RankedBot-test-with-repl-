var express = require('express');
var router = express.Router();

const baby = require('./datahandler.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The FFC Ranked Database', subtitle: 'Lol' });
});

router.get('/rawdata', function(req, res, next) {
  baby.writedata(['lol', 'holy','bro'])
  res.render('lel', { title: 'Express', subtitle: 'Lol' });
});

module.exports = router;
