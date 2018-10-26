let total = 0;

for (let i = 2; i < process.argv.length; i += 1) {
  total += Number(process.argv[i]);
}

console.log(total);
