const tasks = [
    {
        plat: 'quanmin',
        status: 1,
        id: 45678,
        url: 'http://1'
    },
    {
        plat: 'quanmin',
        status: 2,
        id: 356789,
        url: 'http://2'
    },
    {
        plat: 'douyu',
        status: 2,
        id: 45678,
        url: 'http://2'
    }
];

console.log('[D] %d tasks need to dispatch', tasks.length);
const queue = {};
[].concat(tasks).forEach(task => {
    const plat = task.plat;
    if (!queue[plat]) {
        queue[plat] = {
            deliver: [],
            del: []
        };
    }
    const todo = queue[plat];
    if (task.status == 2) {
        todo.del.push(task.id);
    } else {
        todo.deliver.push(task.url);
    }
});

for (let plat in queue) {
    console.log(queue[plat], plat);

    for (let method in queue[plat]) {
        console.log(method);
        const tasks = queue[plat][method];
        if (tasks.length) {
            if (typeof this[method] === 'function') {
                console.log('[D] %s task', method, tasks.length);
                this[method](tasks, plat);
            } else {
                console.log(`no such method [${method}] of Nest instance`);
            }
        }
    }
}
