var express = require('express')

var app = express()
 
app.use('/',require('./routes'));
 
module.exports = app;