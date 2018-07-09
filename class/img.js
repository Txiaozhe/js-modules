function retriZhanqiUri(uri) {
    uri = uri.replace(/img2/, 'img3');
    const suffix = uri.substring(uri.indexOf('.jpg'));
    const prefix = uri.substring(0, uri.indexOf('_'));
    const id = uri.substring(uri.indexOf('_') + 1, uri.indexOf('.jpg'));
    if(suffix === '.jpg') {
        return `${prefix}.jpg?${id}`
    }

    if(suffix === '.jpg-big') {
        return `${prefix}_big.jpg?${id}`
    }
}

const u = 'https://img2.zhanqi.tv/avatar/98/515/105333437_1433619719.jpg-big'
const d = 'https://img2.zhanqi.tv/avatar/00/000/0_0000000000.jpg-big';
console.log(retriZhanqiUri(d));
