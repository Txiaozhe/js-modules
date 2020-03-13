const arr = [
    {
        t: '1',
        a: '2018-04-05',
        name: 'ddd',
        id: 4,
        ts: 1
    },
    {
        t: '3',
        a: '2018-04-05',
        name: 'ddd',
        id: 4,
        ts: 3
    },
    {
        t: '3',
        a: '2018-04-05',
        name: 'ddd',
        id: 2,
        ts: 2
    },
    {
        t: '1',
        a: '2018-04-05',
        name: 'ddd',
        id: 2,
        ts: 3
    }
]

console.log(arr.sort((a, b) => a.ts - b.ts || a.id - b.id));
