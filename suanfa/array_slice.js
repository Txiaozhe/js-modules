const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function sli(arr, num) {
    const len = arr.length;
    let result = {};
    const step = Math.ceil(len / num);
    let i = 0;
    let j = step;
    let index = 0;
    while(true) {
        const a = arr.slice(i, j);
        if(a.length === 0) {
            break;
        }
        result[index] = a;
        i = j;
        j = j + step;
        index++;
    }

    console.log(result);
}

sli(array, 4);
