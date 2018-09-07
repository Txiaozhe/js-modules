// function test(url) {
//     const no = url.match(/(https|http):\/\/www.douyu.com\/(\S*)/);
//     console.log(no);
//     console.log(parseInt(no[2]));
// }

// test('http://www.douyu.com/2051663dwewd');

let reg = new RegExp(/^[A-Z][a-z]{1,}$/);
console.log(reg.test('AdwdSsw'))

reg = /\bis\b/g;
var text = 'He is a boy, This is a dog. Where is she?';
var result = text.replace(reg,'IS');
console.log(result)

reg = new RegExp('\\bis\\b','g');
var text = 'He is a boy, This is a dog. Where is she?';
var result = text.replace(reg,'IS');
console.log(result)

reg = /[abc]/g;
var text = 'a1b2c3d4';
var result = text.replace(reg,'X');
console.log(result); //X1X2X3d4

// 取反
reg = /[^abc]/g;
var text = 'a1b2c3d4';
var result = text.replace(reg,'X');
console.log(result); //aXbXcXXX

// 范围
reg = /[a-z]/g;
var text = 'a1b2c3d4z9';
var result = text.replace(reg,'Q');
console.log(result); //Q1Q2Q3Q4Q9

reg = /[a-zA-Z]/g;
var text = 'a1b2c3d4z9ASDFHDFH';
var result = text.replace(reg,'Q');
console.log(result); //Q1Q2Q3Q4Q9QQQQQQQQ

// 同时匹配-
reg = /[0-9-]/g; //只要在后面另外加一个‘-’符号就可以了
var text = '2018-05-13';
var result1 = text.replace(reg,'Q');
console.log(result1); //QQQQQQQQQQ

// 预定义类
// .: 除了回车和换行之外的所有字符
reg = /ab\d./; //之前我们可能会这样写：ab[0-9][^\r\n]
var text = 'absdlkjflab91323';
var result = text.replace(reg,'AAAA');
console.log(result); //absdlkjflAAAA323

// 边界
reg = /\Bis\b/g;
var text = 'He is a boy, This is a dog. Where is she?';
var result = text.replace(reg,'IS');
console.log(result) //He is a boy, ThIS is a dog. Where is she?

// 在[]中^ 表示取反，正常情况^表示以xxx开始，$表示以xxx结束
//先看没加^或$的情况
reg = /@./g;
var text = '@123@ab@A';
var result = text.replace(reg,'Q');
console.log(result); //Q23QbQ

//添加^的情况
reg = /^@./g;
var text = '@123@ab@A';
var result1 = text.replace(reg,'Q');
console.log(result1); //Q23@ab@A

//添加$的情况
reg = /@.$/g;
var text = '@123@ab@A';
var result1 = text.replace(reg,'Q');
console.log(result1); //@123@abQ

// 量词：?:最多出现一次   +: s至少出现一次   *: 任意次 {n}: n次    {n,m} n到m次   {n,} 至少n次

// 分组
reg = /Byron{3}/g;
var text = 'ByronByronByronnn';
var result = text.replace(reg,'0');
console.log(result);//ByronByron0

reg = /(Byron){3}/g;
var text = 'ByronByronByronnn';
var result = text.replace(reg,'0');
console.log(result);//0nn

// 或
//匹配单词Byron或者Casper
reg = /Byron|Casper/g;
var text = 'ByronCasper'
var result = text.replace(reg,'X');
console.log(result);//XX

//匹配Byr+on或Ca+sper
reg = /Byr(on|Ca)sper/g;
var text = 'ByronsperByrCasper'
var result1 = text.replace(reg,'X');
console.log(result1);//XX

// 反向引用
reg = /\d{4}-\d{2}-\d{2}/g;
var text = '2015-12-25'
var result = text.replace(reg,'12/25/2015');
console.log(result);//12/25/2015

reg = /(\d{4})-(\d{2})-(\d{2})/g;
var text = '2015-12-25'
var result = text.replace(reg,'$2/$3/$1');
console.log(result);//12/25/2015

// 忽略分组：加？
reg = /(?:Byron)(\d{4})-(\d{2})-(\d{2})/g;
var text = 'Byron2016-12-05'
var result = text.replace(reg,'$2/$3/$1');
console.log(result);//12/05/2016

