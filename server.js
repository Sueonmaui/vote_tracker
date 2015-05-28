'use strict';

var http = require('http');
require('fs');

function onRequest(request, response){
 response.writeHead(200, {'Content-Type': 'text/plain'});
 response.write('Get more coffee before proceeding further');
 response.end();
}

http.createServer(onRequest).listen('3000');
console.log('Server is running...Im listening');
