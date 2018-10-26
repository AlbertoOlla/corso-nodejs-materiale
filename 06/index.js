var filter = require('./modules/filter.js');

filter(process.argv[2], process.argv[3], (error,data) => {
  if(error)
    return console.error('Error: '+error);

  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
});
