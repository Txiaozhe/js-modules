// const obj = {};

// obj['https://www.huya.com/13587013'] = 1;
// obj['https://www.huya.com/13587013'] = 2;

// console.log(obj);

const obj = {
    name: 'hello',
    say: function () {
        return this.name;
    }
}

class Test {
    test() {
        console.log(obj.say());
    }
}

const t = new Test();
t.test()
