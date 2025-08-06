// fibonachi(3) = [0,1,1]
//0,1,1,2,3,5,7,12,19

const findFibonachiSequence = (n) => {
    const fib = [0,1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}

// console.log("Result", findFibonachiSequence(5))

// Big-O = O(n)