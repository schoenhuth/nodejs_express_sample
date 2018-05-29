var express = require('express')
var app = express()
app.set('view engine', 'ejs')

//Routes
var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
//var restRouter = require('./routes/rest');

app.use( '/', indexRouter);
app.use( '/home', homeRouter);
//app.use( '/v1/payments', restRouter);

app.listen(8081, () => console.log('Example app listening on port 8081!'))