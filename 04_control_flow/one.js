// if  statement:
//  <,  >,  <=,  >=,  ==, !=,  ===

// EXAMPLES:

// example 1.
//  if (2=='2') {
//  console.log("executed");  // output: executed  == compared 2 with 2 but  did not check datatype type 

// }

// example 2. : strict equal  operator comapares but also check datatype type
// if (2==='2') {
//     console.log("not executed");  // executed

// }

// example 3.
// let temperature = 45
// if (temperature <50 ) {
//     console.log ("less than 50") // less than 50
// }

// example 4.
if (2 != "3") {
  console.log("you are right"); // you are right
}

// IF ELSE STATEMENT

let temperature = 45;
if (temperature < 50) {
  console.log("less than 50"); // less than 50
} else {
  console.log(" greater than 50");
}

// EXPLICIT SCOPE:
const score = 200;
if (score > 100) {
  let power = "fly";
  console.log(`User can ${power}`); // User can fly
}
// console.log(`User can ${power}`); // undefined because power is defined within the block scope

// IMPLICIT SCOPE :
const balance = 1000;
if (balance > 200) console.log("test"), console.log("test2");  // Never do this 
// output: test
// test2

// NESTED IF
const money = 1000;
if (money < 500) {
  console.log("less than 500");
} else if (money < 700) {
  console.log("less than 700");
} else if (money < 900) {
  console.log("less than 900");
} else {
  console.log("less than 1200");
}
// output : less than 1200

// LOGICAL OPERATOR:

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course"); 
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in "); //output:  User logged in
}

