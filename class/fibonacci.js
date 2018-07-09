function fibonacci(n) {
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

console.log(fibonacci(3));
