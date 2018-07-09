const objS = {
    a: 1,
    b: 2,
    c: function (params) {
        console.log(params);
    }
}

const objT = Object.assign({}, objS);
console.log(objT);
