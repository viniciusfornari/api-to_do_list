var express = require('express')

var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello baby ')
})
 
app.listen(3000)