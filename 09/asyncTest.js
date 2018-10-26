var http = require('http');
var bl = require('bl');
var async = require('async');

function printResults(results){
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function getAsync(url, callback) {
  http.get(url, (res) =>{
    res.pipe(bl( (err,data) => {
      if(err)
        callback(err);

      callback(null, data.toString());
    } ));
  });
}

async.map(process.argv.slice(2,5),getAsync, (error, results) =>{
  if(error)
    console.error('Error: '+error);

  printResults(results);
});

// async.series([
//   (callback) => {
//     get(0, callback);
//   },
// ], (error,results)=>{
//
//   if(error)
//     console.error('Error: '+error);
//
//   printResults(results);
// });
