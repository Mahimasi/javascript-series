// NOTE: SCOPE IN WINDOW'S CONSOLE IS DIFFER THAN THAN SCOPE IN NODEJS
// 1. global scope
// var c = 300
let a = 10;

// 2. Block scope
// if (true) {
//   let a = 100;
//   const b = 200;
//   console.log(a); // 100
//   console.log("INNER: ", b); // INNER:  200
// }

// console.log(a);   // 10
// console.log(b);  // undefined
// console.log(c);  //300

// when there is nested fn, so child fn has  to access to the variable and fn of parents fn
// function one() {
//   const username = "Developer";

//   function two() {
//     // Define the child fn inside the parent fn
//     const website = "online";
//     console.log(username); // Access the parent function's variable   // output :Developer
//   }
//   // console.log(website);  // undefined because, didnt define in block scope
//   // Call the child fn inside the parent fn
//   two();
// }
// one();

if (true) {
  const username = "mahi ";
  if (username === "mahi") {
    const website = "youtube";
    console.log(username + website);
  }
//   console.log(website);  // undefined, because of scope 
}

// console.log(username);  // undefined, because of scope 

// +++++++++++++++++++++++ interesting  ++++++++++++++++++++++++++

// FUNCTION ONE 
console.log(addone(5));  // 6 we can console and call the fn before declaration for this type of fn 
function addone(num){
  
     return num + 1 
}
// console.log(addone(5));  // 6 

// FUNCTION SECOND 
const addTwo = function (num){
    return  num + 2 
}
console.log(addTwo(5))  // 7  
