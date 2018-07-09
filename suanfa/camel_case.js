function run(str) {
    if(!str) {
        return '';
    }

    const sa = str.split('-');
    const se = sa.map((e) => {
        const head = e[0].toLocaleUpperCase();
        const later = e.slice(1);

        return head + later;
    });

    return se.join('');
}

const res = run('');
console.log(res);

const obj = [
    {
        name: 'hello',
        age: 20
    },
    {
        name: 'hi',
        age: 21
    }
];

console.table(obj);
