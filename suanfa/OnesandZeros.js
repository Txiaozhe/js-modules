const binaryArrayToNumber = arr => {
    // your code
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i] * (Math.pow(2, arr.length - i - 1))
    }

    return result;
};

// 优解
const a_binaryArrayToNumber = arr => {
    console.log(arr.join(''));
    return parseInt(arr.join(''), 2);
}
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(a_binaryArrayToNumber([0, 0, 0, 1]));
