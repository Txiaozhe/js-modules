// 1
function fib1(n) {
    let stack = [];
    if (n < 3) {
      return 1;
    }
    stack.push(1);
    stack.push(1);
    let i = 3;
    while (i < n) {
      let tmp1 = stack.pop();
      let tmp2 = stack.pop();
      stack.push(tmp2);
      stack.push(tmp1);
      stack.push(tmp1 + tmp2);
      i++;
    }
    return stack.pop() + stack.pop();
}

// 2
function fib2(n) {
  if (n <= 2) {
    return 1
  }
  return fib2(n - 1) + fib2(n - 2);
}

// 3
function fib3(n) {
  return fib_helper(n);
}

function fib_helper(n) {
  if (n <= 2) {
    return 1
  }
  return fib_helper(n - 1) + fib_helper(n - 2);
}

const count = 30;

console.time('fib1');
console.log(fib1(count));
console.timeEnd('fib1');

console.time('fib2');
console.log(fib2(count))
console.timeEnd('fib2');

console.time('fib3');
console.log(fib3(count))
console.timeEnd('fib3');
