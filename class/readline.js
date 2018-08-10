const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('hello', (answer) => {
  // 对答案进行处理
  console.log(`hi：${answer}`);

  rl.close();
});

rl.on('close', () => {
  console.log(`close`);
});

rl.on('line', (input) => {
  console.log(`line: ${input}`);
});

rl.on('pause', () => {
  console.log('pause');
});

rl.on('SIGCONT', () => {
  // `prompt` 会自动恢复流
  rl.prompt();
});

rl.on('SIGINT', () => {
  rl.question('确定要退出吗？ ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
});

rl.on('SIGTSTP', () => {
  // 这会重写 SIGTSTP，且防止程序进入后台。
  console.log('捕获 SIGTSTP。');
});
