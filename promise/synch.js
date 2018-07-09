const arr = [1, 2, 3];

// for(let i of arr) {
//     setTimeout(() => {
//         console.log('asyn', i);
//     }, 1000);
//     console.log(i);
// }

arr.forEach((a, i) => {
    setTimeout(() => {
        console.log(a);
    }, i*1000);
});