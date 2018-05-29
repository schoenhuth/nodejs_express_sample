var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('leafletjs', { title: 'Express', message: 'Hello' });
});

module.exports = router;
