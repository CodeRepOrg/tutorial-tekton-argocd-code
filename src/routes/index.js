var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'IBM Cloud Native demo March 31st 2020 finally working!!!!!!!!!!!!', authors: 'This was made by possible hue squad 6!!!!' });
});

module.exports = router;
