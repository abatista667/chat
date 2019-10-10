var express = require('express');
var app = express();
var http = require('http').createServer(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/dist',express.static(__dirname + '/dist'));
app.use('/css',express.static(__dirname + '/css'));
app.use('/images',express.static(__dirname + '/images'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});