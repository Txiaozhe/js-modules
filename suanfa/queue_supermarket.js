function run(cus, ct) {
    if(!cus.length) {
        return 0;
    }
    
    let q = new Array(ct);
    for(let i = 0; i < ct; i++) {
        q[i] = cus[i];
    }

    for(let i = ct; i < cus.length; i++) {
        let mini = minIndex(q);
        q[mini] = q[mini] + cus[i];
    }
    
    let max = q[0];
    let maxI = 0;
    for(let i = 0; i < q.length; i++) {
        if(q[i] > max) {
            max = q[i]
        }
    }

    return max;
}

function minIndex(arr) {
    let min = arr[0];
    let minI = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minI = i;
        }
    }

    return minI;
}

const a = run([5, 3, 2, 4, 3], 2);
console.log(a);
