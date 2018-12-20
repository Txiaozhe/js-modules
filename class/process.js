console.log(process.arch);

console.log(process.argv);

console.log(process.channel);

console.log(process.env);

const NS_PER_SEC = 1e9;
const time = process.hrtime();

setTimeout(() => {
  const diff = process.hrtime(time);

  console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
}, 1000);

const os = process.binding('os');
console.log(os);

console.log('cwd: ', process.cwd());
