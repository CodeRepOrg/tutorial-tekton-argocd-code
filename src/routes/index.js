var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'IBM Cloud Native demo March 12th 2020', authors: 'This was made by possible hue squad 6!!!!' });
});

module.exports = router;
