const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function (err, files)  {
  for (let i = 0; i < files.length; i += 1) {
    if (path.extname(files[i]) === `. ${process.argv[3]}`) {
      console.log(files[i]);
    }
  }
});
