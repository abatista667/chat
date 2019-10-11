var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use('/dist',express.static(__dirname + '/dist'));
// app.use('/css',express.static(__dirname + '/css'));
app.use('/images',express.static(__dirname + '/images'));

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    console.log(msg)
    
    socket.broadcast.emit('chat message', msg);
  });

  
  socket.on('login', function(msg){
    console.log(msg)
    
    socket.broadcast.emit('login', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:3000');
});