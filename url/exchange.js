const url = 'https://img2.zhanqi.tv/avatar/cb/1b6/28536906_1502958141.jpg';
const url2 = 'https://img2.zhanqi.tv/avatar/2c/c8d/32049045_1512359687.jpg';

function retriZhanqiUri(uri) {
    const u = uri.replace(/([2])/, 3).replace(/([_][.])/, '');

    const index_ = uri.indexOf('_');
    const index_dot = uri.indexOf('.jpg');

    const s = uri.slice(index_ + 1, index_dot);

    return `${u.slice(0, index_)}.jpg?${s}`;
}

console.log(retriZhanqiUri(url2));
