// js is  dynamically typed language This means that you do not need to declare the data type of a variable when you create it. The type is determined automatically at runtime based on the value assigned to the variable.
// Types of datatypes:
// 1. Primitive datatype :
// 7 types: String, Number , Boolean ,null , undefined, Symbol, BigInt

// Defining  primitive datatype:
// 1.  const score = 100   // Number
//    const scoreValue = 100.3   //  Number
// 2.  const isLoggedin = false   //  Boolean
// 3.  const outsideTemp;  null
// 4.  let userEmail ; // undefined

// 5. const id = Symbol ("123")
// const anotherId = ("123")
// console.log (id=== anotherId);  // false

// 6. const bigNumber = 23345654n
// 7.  let str1 = "This is a string.";
//     let str2 = 'This is also a string.';
//     let name = "John";
//     let str3 = `Hello, ${name}!`;  // Embedding a variable inside a string

// Double and single quotes are functionally the same; it just depends on preference.
//Template literals (backticks) are useful for multi-line strings and inserting variables or expressions directly within a string using ${}.
// e.g.   let greeting = `Hello, ${name}! How are you today?`;

// 2. Non-primitive (Reference type) datatype:
// 3 types : Array , Objects, Functions

// 1. Array :
//const heroes = ["mahi", "brother" , "mom", "dad" ];
// 2. Object:
// let myObj = {
//       name: "hitesh",
//       age:  20,
//           }

// function as a variable in js:
// const myFunction = function(){
//   console.log("Hello World");
//             }

// To find type of datatype
// console.log(typeof score);  // Number

// Result of  typeof  following datatypes :
// mostly all reference datatype  gives object but null gives object in primitive types
//Null => Object;

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// types of memory : 1. Stack (used for primitive datatype in browser)
// 2. Heap(used for reference/non-primitive datatype in server)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack (Primitive,we get copy of data in stack)
// eg:
//
// This variable is stored in the stack because strings are primitive data types
//let myYoutubeName = "Mahi";

//// This creates a copy of the value stored in 'myYoutubeName' because primitives are copied by value
//let anotherYoutubeName = myYoutubeName;

// //Change the value of 'anotherYoutubeName' to "mahima"
//// This does not affect 'myYoutubeName' because they are two independent copies of the same string
//anotherYoutubeName = "mahima";

// Output: "Mahi" (remains unchanged as it's a separate copy)
// console.log(myYoutubeName);

// Output: "mahima" (this variable was updated separately)
// console.log(anotherYoutubeName);

//Heap (Non-primitive,we get reference of data in heap) e.g..

// Create an object 'userOne' with properties: name, age, email, and upi
let userOne = {
  name: "hitesh",
  age: 20,
  email: "user@gmail.com",
  upi: "user@ybl",
};

// Assign 'userOne' to 'userTwo'
// Instead of copying the object, 'userTwo' holds a reference to the same object in memory
let userTwo = userOne;

// Since both 'userOne' and 'userTwo' point to the same object, this change affects both
userTwo.name = "mahima";

// Log the 'name' property of 'userOne' to the console

console.log(userOne.name); // mahima (because userOne and userTwo are the same object)

console.log(userTwo.name); // mahima

console.log(userOne.email); // user@gmail.com ((email remains unchanged))

console.log(userTwo.email); // user@gmail.com (same object, so same value)

console.log(userOne.upi); // user@ybl, (upi remains unchanged)

console.log(userTwo.upi); // user@ybl

console.log(userTwo.age); // 20 (age remains unchanged)

console.log(userTwo.age); // 20
