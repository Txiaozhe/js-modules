// module.exports = function () {
//     this.age = 20;
// }

// exports.name = 'world' // 无效

// 有效写法
exports = module.exports = function () {
    this.age = 20;
}

exports.name = 'world'
