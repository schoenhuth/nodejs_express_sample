var express = require('express')
var router = express.Router()


router.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello again!' })
})

module.exports = router