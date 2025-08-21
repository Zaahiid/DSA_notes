

// Give a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

const arr = [-5, 1, 5, 6, 10, 500, 1500];

function binarySearch (arr, target) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((rightIndex + leftIndex)/2);

        if (target === arr[midIndex]) return midIndex;

        if (target < arr[midIndex]) {
           rightIndex = midIndex - 1; 
        } else {
            leftIndex = midIndex + 1;
        }
    }
    return -1;
}

console.log(binarySearch(arr,6));
console.log(binarySearch(arr,10));
console.log(binarySearch(arr,200));


// What is Binary Search?

// Binary Search is a fast way to search in a sorted array by:

// Cutting the search space in half each time
// Comparing the middle element with the target
// It only works if the array is already sorted!

// 🔁 Summary of Steps:

// Start with the whole array.
// Find the middle element.
// If it's the target → return index.
// If the target is smaller → search left half.
// If the target is bigger → search right half.
// Repeat until found or range is empty.

// ⚠️ Important to Remember:

// Works only on sorted arrays
// Very efficient: Time Complexity: O(log n)