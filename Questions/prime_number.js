const findPrimeNumber = (n) => {
    if (n < 2) return false;
    for(let i = 2; i < n; i++){
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

// console.log("1",findPrimeNumber(1))
// console.log("2",findPrimeNumber(2))
// console.log("5",findPrimeNumber(5))


const findPrimeNumberTwo = (n) => {
    if (n < 2) return false;
    for(let i = 2; i < Math.sqrt(n); i++) {
        console.log("i ==>",i)
        if (n % i === 0) {
            return false;
        }
    }
    return true
}

// console.log("1",findPrimeNumberTwo(1))
// console.log("10",findPrimeNumberTwo(10))
// console.log("63",findPrimeNumberTwo(63))


// console.log("Square root of 5341654654654635146 ===>", Math.sqrt(5341654654654635146))