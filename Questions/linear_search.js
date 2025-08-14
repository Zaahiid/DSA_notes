
const arr = [1,2,3,10,6,20];

const findTheIndexOfTarget = (n) => {

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === n){
            return i
        }
    }
    return -1;
}

console.log("findTheIndexOfTarget(3)", findTheIndexOfTarget(3));
console.log("findTheIndexOfTarget(10)", findTheIndexOfTarget(10));
console.log("findTheIndexOfTarget(25)", findTheIndexOfTarget(25));

// Big-O - O(n)