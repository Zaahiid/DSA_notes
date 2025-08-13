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

// =======================================================================

// Find the Fibonachi number at the nth position.


// Fibonachi sequence - Recursive

// Fn = Fn-1 + Fn-2

const recursiveFibonachi = (n) => {
    if(n < 2) return n;
    return recursiveFibonachi(n-1) + recursiveFibonachi(n-2);
}

// console.log("0",recursiveFibonachi(0))
// console.log("1",recursiveFibonachi(1))
// console.log("6",recursiveFibonachi(6))



// Time Complexity - O(2^n)


// const recursiveFibonachi = (n) => {
//     console.log(`Entering recursiveFibonachi(${n})`);

//     if (n < 2) {
//         console.log(`Returning ${n} (base case)`);
//         return n;
//     }

//     const result1 = recursiveFibonachi(n - 1);
//     const result2 = recursiveFibonachi(n - 2);
//     const result = result1 + result2;

//     console.log(`Returning ${result} for recursiveFibonachi(${n})`);

//     return result;
// };

// console.log("Final Result:", recursiveFibonachi(5));