var http = require('http');
var bl = require('bl');

function printResults(results){
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function getPromise(index) {
  return new Promise( (resolve, reject) =>{
    http.get(process.argv[2+index], (res) =>{
      res.pipe(bl( (err,data) => {
        if(err)
          reject(err);
        resolve(data.toString());
      } ));
    });
  } );
}

var arrayPromises = [];
for (var i = 0; i < 3; i++) {
  arrayPromises.push( getPromise(i) );
}

Promise.all(arrayPromises).then( (value) =>{
  printResults(value);
} ).catch( (error) =>{
  console.error(error);
} );
