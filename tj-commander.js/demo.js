#!/usr/bin/env node

const { program } = require('commander');

program
  .version('0.0.1')
  .command('init [info]')
  .option('-d, --debug', 'output extra debugging')
  .option('-s, --small', 'small pizza size')
  .option('-p, --pizza-type <type>', 'flavour of pizza')
  .description('Init the pizza.')

if (program.debug) console.log(program.opts());
console.log('pizza details:');
if (program.small) console.log('- small pizza size');
if (program.pizzaType) console.log(`- ${program.pizzaType}`);

function init(obj) {
  console.log('>>>> ', obj)
}

program
  .command('make [type]')
  .option('-t, --type', 'type of make')
  .option('-n, --make-name', 'name of make')
  .description('make the pizza.')
  .action((dir, cmdObj) => {
    init(cmdObj.args);
  })

program.parse(process.argv);
