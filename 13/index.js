var http = require('http');
var url = require('url');

var server = http.createServer( (req,res) =>{
  var parse = url.parse(req.url, true);
  var date = new Date(parse.query.iso);
  var result;

  switch (parse.pathname) {
    case '/api/parsetime':
      result = { hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() };
      break;
    case '/api/unixtime':
      result = { unixtime: date.getTime() };
      break;
  }

  if(result){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end( JSON.stringify(result) );
  }else{
    res.end();
  }

});

server.listen(Number(process.argv[2]));
