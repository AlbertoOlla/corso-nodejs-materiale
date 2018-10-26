var http = require('http');
var bl = require('bl');

http.get(process.argv[2], (res) =>{
  res.pipe(bl( (err,data) => {
    if(err)
      console.error('Error: '+err);

    var string = data.toString();
    console.log(string.length);
    console.log(string);
  } ));
});
