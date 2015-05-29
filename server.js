'use strict';

var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/secret', function (req, res) {
  res.send('The secret of the day is....muah,hahahahaha');
});

app.all('*', function (req, res) {
  res.send('404 Error not found');
});

app.listen(3000, function(){
  console.log('Server is running...Im listening');
});

