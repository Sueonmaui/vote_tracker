'use strict';

<<<<<<< HEAD
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

=======
var http = require('http');
require('fs');

function onRequest(request, response){
 response.writeHead(200, {'Content-Type': 'text/plain'});
 response.write('Get more coffee before proceeding further');
 response.end();
}

http.createServer(onRequest).listen('3000');
console.log('Server is running...Im listening');
>>>>>>> 24fc58818e1d81aa7e3f9f62c7bb45b5d0255a91
