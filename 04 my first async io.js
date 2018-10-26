const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (error, data) => {
  if (error) throw error;
  const newLines = data.split('\n').length - 1;
  console.log(newLines);
});
