var express = require('express')
var router = express.Router()


router.get('/', function(req, res) {
  res.render('home', { title: 'Hey', message: 'Hello guys!' })
})

module.exports = router