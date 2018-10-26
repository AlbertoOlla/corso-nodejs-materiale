var net = require('net');
var strftime = require('strftime');

function getDate() {
  // YYYY-MM-DD hh:mm
  return strftime('%Y-%m-%d %H:%M');
}

var server = net.createServer( (socket) =>{
  socket.end(getDate()+"\n");
} );

server.listen(process.argv[2]);
