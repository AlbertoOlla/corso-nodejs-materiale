var http = require('http');
var map = require('through2-map');

var server = http.createServer( (req,res) =>{
  if(req.method !== 'POST')
    return res.end('Only POST please');

  req.pipe(map( this.toString().toUpperCase()  ) ).pipe(res);
});

server.listen(Number(process.argv[2]));
