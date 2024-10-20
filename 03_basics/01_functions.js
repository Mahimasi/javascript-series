// FUNCTIONS

// function sayMyName() {
//   // function definition
//   console.log("M");
//   console.log("A");
//   console.log("H");
//   console.log("I");
// }

// sayMyName(); // calling / execution of function

// Adding two numbers using fn
// function addTwoNumbers(num1, num2) {      // num1 and num2 are parameters, being called in fn definition
//   console.log(num1 + num2);
// }

// Ways of invoking functions
// first way as fn calling method
//  addTwoNumbers(2, 5);   // 7     //// 2 and 5  are arg  because they are being in function execution

// another way of calling function as a variable:
// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2
//   return result   // if we return the value only then we can console value
// or
// return num1 + num2;
//  }

// const result = addTwoNumbers(3, 5);
// console.log("Result:" , result);  //Result : 8

//Another way to pass parameters
// function loginUserMessage(username)   // before giving default username = "sam"

function loginUserMessage(username = "sam") {
  // if (username === undefined)  or
  if (!username) {
    console.log("Please enter username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("madhu")); //  madhu just logged in
//  console.log(loginUserMessage("")); // just logged in    // beofre giving default value "sam"
// console.log(loginUserMessage( "")); // sam just logged in   // after giving default value "sam"
// console.log(loginUserMessage()); // Please enter username  // undefined

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000));    // output:[500, 2000 ]  // val1= 200 ,val2= 400 and rest stored in num1

// FOR OBJECT:
//  creating obj to pass in handleobject fn
// const user = {
//   username:"mahima",
//   price: 199
// }

function handleObject(anyObject) {
  console.log(
    `username: ${anyObject.username} and price is ${anyObject.price}`
  );
  // output for 1st way  : username: mahima and price is 199
  // output for 2nd  way : username: sam and price is 399
}

// handleObject(user)   // or
handleObject({
  // directly passing object as an arguement
  username: "sam",
  price: 399,
});

// FOR ARRAY :

// Initialize an array 
const myNewArray = [200, 400, 100, 600];

// Define a fn 'returnSecondValue' that takes an array as an arg
// The fn retrieves and returns the 2nd element (index 1) of array
function returnSecondValue(getArray) {
  return getArray[1]; // Access and return the second value from the input array
}

// Call the 'returnSecondValue' function, passing 'myNewArray' as an argument
console.log(returnSecondValue(myNewArray)); // Output: 400
console.log(returnSecondValue([200, 400, 100, 600])); // 400   // Directly passing array as an arg



