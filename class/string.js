const { StringDecoder } = require('string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent));

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro));

// make sql
const s = (['date', 'keyword', 'register'].concat(['']).slice(1).join(' = ?, ')).replace(/\,\s$/, ';');
console.log(s);

console.log(`${'2018.11.17'.split('.').join('-')} 00:00:00`);
