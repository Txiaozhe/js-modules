// const obj = {};

// obj['https://www.huya.com/13587013'] = 1;
// obj['https://www.huya.com/13587013'] = 2;

// console.log(obj);

// const obj = {
//     name: 'hello',
//     say: function () {
//         return this.name;
//     }
// }

// class Test {
//     test() {
//         console.log(obj.say());
//     }
// }

// const t = new Test();
// t.test()

const obj2 = {
    a: 1,
    b: 2,
    c: 3
}

for(let k in obj2) {
    console.log(k)
}

console.log(Object.getOwnPropertySymbols(obj2));


const funObj = {
    async help() {
        console.log('lllll')
    },
    async do() {
        this.help()
    }
}

funObj.do()
