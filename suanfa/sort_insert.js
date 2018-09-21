function insert_sort(src) {
    if (!Array.isArray(src)) {
        throw 'src must a array'
    }

    let tmp;
    let i, j;
    for (i = 0; i < src.length; ++i) {
        console.log('i = ', i)
        for (tmp = src[i], j = i - 1; i >= 0 && src[j] > tmp; j--) {
            src[j + 1] = src[j];
            console.log('  j = ', j);
        }
        src[j + 1] = tmp;
        console.log(src)
    }

    return src;
}

console.log(insert_sort([6, 5, 4, 3, 2, 1]));
