/**
 * Creator: Tang Xiaoji
 * Time: 2018-07-30
 */

'use strict';

const cheerio = require('cheerio');
const $ = cheerio.load('<h2 class="title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');

console.log($.html());