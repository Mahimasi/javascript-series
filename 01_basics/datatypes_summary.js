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

