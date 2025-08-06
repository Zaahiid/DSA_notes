
const findFactorial = (n) => {
    let num = 1;

    if (n === 0) return num;

    for(let i = 1; i <= n; i++) {
        num = num * i;
        console.log("Num:",num, "With i :", i);
    }
    
    return num;
};

// console.log("Factorial Final:",findFactorial(2))

//  1. Time Complexity
// The loop runs from 1 to n, performing one multiplication per iteration.

// Time Complexity: O(n)

// Reason: Linear time based on the input size (n)

// 2. Space Complexity
// You're only using a constant amount of space (num, i), regardless of n.

// Space Complexity: O(1)

// Reason: No extra memory grows with input size


const findFactorialTwo = (n) => {
    let result = 1;

    for(let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log("findFactorialTwo: 0", findFactorialTwo(0))
console.log("findFactorialTwo: 1", findFactorialTwo(1))
console.log("findFactorialTwo: 5", findFactorialTwo(5))


// Comparison: findFactorial vs findFactorialTwo

// ✅ Loop Range:
// - findFactorial: Loop starts from i = 1
// - findFactorialTwo: Loop starts from i = 2 (skips multiplying by 1)

// ✅ Edge Case Handling (n === 0):
// - findFactorial: Has explicit check (if n === 0) → returns 1
// - findFactorialTwo: Implicitly handles it since loop won't run → result stays 1

// ✅ Redundant Operations:
// - findFactorial: Includes unnecessary multiplication by 1
// - findFactorialTwo: Avoids multiplying by 1 → slightly optimized

// ✅ Code Cleanliness:
// - findFactorial: Slightly more verbose due to extra condition
// - findFactorialTwo: Cleaner, minimal code

// ✅ Time & Space Complexity:
// - Both have O(n) time complexity and O(1) space complexity

// ✅ Readability & Efficiency:
// - findFactorialTwo is more concise and avoids redundant checks/operations

// ✅ Recommendation:
// - Prefer findFactorialTwo for cleaner and slightly more efficient code



// Which One Is Better?
// Both are correct and efficient (O(n) time), but:

// **findFactorialTwo** is slightly better in terms of:

// cleaner code

// minor efficiency improvement

// It skips one iteration (when i = 1) and doesn't need an extra if (n === 0) check (though you can add it for clarity)
