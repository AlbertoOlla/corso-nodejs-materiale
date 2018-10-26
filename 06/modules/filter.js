var fs = require('fs');
var path = require('path');

module.exports = (dir, ext, callback) => {

  fs.readdir(dir, (err,files) => {
    if(err)
      return callback(err);

    files = files.filter( (single) => path.extname(single) === '.'+ext );

    callback(null, files);
  });

};
