//2 ways of finding type:
//  let score = 33;
//    console.log(typeof score); // 1.As a variable -> number
//    console.log(typeof(score)); // 2.As a method -> number

// Example1: converting string into number:
//    let score = "33";
//    console.log(typeof score); // string
//    let valueInNumber = Number(score);
//    console.log(typeof valueInNumber); // number

//Example2: for mix values of string into number
// let score = "33abc";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
//    console.log(typeof score); // string because anything inside quotation will be treated as string
//    console.log(valueInNumber); // NaN -> not a number

// Example3: converting  null values into number
//let score = null;
//console.log(typeof score); // object
//let valueInNumber = Number(score);
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // 0

// Example4: converting  boolean value into number
// let score = true;
// console.log(typeof score); // boolean
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // number
// console.log(valueInNumber); // 1

// Example5:converting number into Boolean
//let isLoggedIn = 1;

// let valueInNumber = Boolean(isLoggedIn);
// console.log(typeof valueInNumber); // boolean
// console.log(valueInNumber); // true

// Example6: converting  empty string into Boolean
//let score = "";
//console.log(typeof score); // string
//let valueInNumber = Boolean(score);
//console.log(typeof valueInNumber); //boolean
// console.log(valueInNumber); // false

// Example7: converting string into Boolean
// let score = "Mahiii singh";
// console.log(typeof score); // string
// let valueInNumber = Boolean(score);
// console.log(typeof valueInNumber); //boolean
// console.log(valueInNumber); // true

// Example8: converting  number into string
let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof someNumber); // number
console.log(typeof stringNumber); // string

/*
conversion of :
"33" => 33
"33abc" => NaN
true => 1; false => 0
1 => true; 0 => false
"" => false ; "Mahi singh" =>true

*/
