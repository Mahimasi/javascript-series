// Comparing numbers
console.log(2 > 1);    // true
console.log(2 >= 1);   // true
console.log(2 < 1);    // false
console.log(2 <= 1);   // false
console.log(2 == 1);   // false
console.log(2 != 1);   // true

// Comparing a string with a number
// JavaScript converts the string "2" into a number and compares it with 1
console.log("2" > 1);  // true: after type conversion, 2 is greater than 1
console.log("02" > 1); // true

// Null comparisons
// Null behaves strangely in Js when compared with numbers
console.log(null > 0);  // false: null is not considered greater than 0
console.log(null == 0); // false: null is only equal to undefined, not 0
console.log(null >= 0); // true: though null is not greater than 0, it is treated as equal to 0 in non-strict comparisons

// Undefined comparisons
// Undefined is treated as NaN (Not-a-Number) in mathematical comparisons, so it doesn't compare well with numbers
console.log(undefined > 0);   // false: undefined is not comparable with numbers
console.log(undefined == 0);  // false: undefined is not equal to 0
console.log(undefined >= 0);  // false: undefined cannot be compared with numbers

// Strict equality should be used to compare both value and type
console.log(2 > 3); // false: 2 is not greater than 3
