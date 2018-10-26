var http = require('http');
var bl = require('bl');
var after = require("after")
    , next = after(3, printResults);

var results = [];

function printResults(){
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function get(index) {
  http.get(process.argv[2+index], (res) =>{
    res.pipe(bl( (err,data) => {
      if(err)
        console.error('Error: '+err);

      results[index] = data.toString();

      next();
    } ));
  });
}


for (var i = 0; i < 3; i++)
  get(i);
