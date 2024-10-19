// Arrays   resizable and can contain a mix of different data types and elements cannot be accessed using arbitrary strings as indexes,

/// Creating an array using  Array constructor
const myArr2 = new Array(1, 2, 3, 4);

// 1. Push method adds a new element (9) to the end

// myArr2.push(9);
// console.log(myArr2);    // // Result: [1, 2, 3, 4, 9]

// 2. Pop method removes the last element of the array
//

// myArr2.pop(7);
// console.log(myArr2);  // // Result: [1, 2, 3]

// 3. Unshift method adds a new element (11) at the beginning

// myArr2.unshift(11);
// console.log(myArr2); // Result: [11, 1, 2, 3]

// 4. Shift method removes  first element

// myArr2.shift();
// console.log(myArr2);  // Result: [1, 2, 3]

// 5. Includes method checks if an element (9) exists
// console.log(myArr2.includes(9));  // false, // // Returns true if found, otherwise false

// 6. IndexOf method returns the index of the element (9) in the array

// console.log(myArr2.indexOf(9));  // -1  // // If the element is not found, it returns -1

// 7. Join method joins all elements of the array into a single string
// with a default separator (comma)

// const newArr = myArr2.join();
// console.log(newArr); // // Result: "1,2,3,4"
// console.log(typeof newArr);  // string

// Slice and Splice methods
// Slice: Creates a shallow copy of a portion of the array without modifying the original array
// Syntax: slice(startIndex, endIndex) - endIndex is exclusive
// Result: [2, 3] (elements bwn index 1 and 3, but excluding index 3)
const myn1 = myArr2.slice(1, 3);
console.log("B", myArr2); // Original array remains unchanged

// Splice: Removes elements from array and can also add new elements
// Result: [1] (removes 3 elements from index 1 onwards)

const myn2 = myArr2.splice(1, 3);
console.log("C", myArr2);
console.log(myn2); // Array of removed elements [2, 3, 4]
