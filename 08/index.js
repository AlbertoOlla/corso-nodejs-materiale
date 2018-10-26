var http = require('http');

var string = '';

http.get(process.argv[2], (res) =>{
  res.setEncoding('utf8');
  res.on('data', (data) => {
    string += data;
  });

  res.on('end', (end) =>{
    console.log(string.length);
    console.log(string);
  });

  res.on('error', console.error);
});
