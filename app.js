var express = require('express')
var indexRouter = require('./routes/index');
var app = express()


app.set('view engine', 'pug')

app.use( '/', indexRouter);

app.listen(8081, () => console.log('Example app listening on port 8081!'))