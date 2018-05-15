var express = require('express')
var app = express()
app.set('view engine', 'pug')

//Routes
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');

app.use( '/', indexRouter);
app.use( '/home', homeRouter);

app.listen(8081, () => console.log('Example app listening on port 8081!'))