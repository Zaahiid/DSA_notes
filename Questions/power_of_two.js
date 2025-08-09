
// 1 = 2^0
// 2 = 2^1
// 4 = 2^2
// 8 = 2^3
// 16 = 2^4
// 32 = 2^5
// 64 = 2^6


// If remainder is not '0' in any step, 'n' is not poer of two.
// If remainder 0 and 'n' comes down to 1 eventually, n is power of two.

const isPowerOfTwo = (n) => {
    if (n < 1) return false;
    
    while(n > 1) {
        if (n % 2 !== 0) return false;
        n = n/2
        console.log("n at this stage", n)
    }
    return true;
}

// console.log(isPowerOfTwo2(14));
// console.log(isPowerOfTwo2(16));
// console.log(isPowerOfTwo2(92274688));

// Big-O = O(logn) => as the input size is reduced by half

// =========================================================

const isPowerOfTwoBitwise = (n) => {
    if(n < 1) return false;

    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitwise(10));
console.log(isPowerOfTwoBitwise(25));
console.log(isPowerOfTwoBitwise(64));

// Big-O = O(n)

//  what's the trick with (n & (n - 1)) === 0?
// This is a clever math trick that works only for powers of 2.
 
/*
Why does that work?
Because in binary:

Powers of 2 have only one 1 and the rest are 0s.

2 → 10

4 → 100

8 → 1000

When you subtract 1 from a power of 2, it flips that 1 to a 0 and turns all bits after it to 1:

8 → 1000

7 → 0111

AND-ing them gives 0.
*/