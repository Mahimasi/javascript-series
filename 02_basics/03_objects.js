// 2 ways of declare obj: 1. As a literals(no singleton)  2. As a constructor (singleton)

// singleton
//Object.create  (as constructor)

// object literals 

//// Create a symbol to use as a unique object key
const mySym = Symbol("key1")   // to use symbol ,have to declare it first then use it as a key . 

// obj, where name is a key which is string always and mahima is value can be chnged 
const JsUser = {
    name: "Mahima",  
    age: 18,  
    "full name": "mahima  singh ",  // String value with space in the key name
    [mySym] : "mykey1",  // interesting
    location: "jaipur",  
    email: "hitesh@google.com", 
    isLoggedIn: false,  // Boolean to check if the user is logged in
    lastLoginDays : ["Monday", "Saturday"]  // Array storing days the user last logged in
}

// Ways of accessing object properties

// console.log(JsUser.email);  // Accessing the email property using dot notation
// console.log(JsUser["email"]);   // Accessing the email property using bracket notation with a string key
// console.log(JsUser["full name"]);  // Accessing the "full name" property using bracket notation since the key contains a space
// console.log(JsUser.mySym);  // undefined
// console.log(JsUser[mySym]);  // mykey1


// Modifying  or Overwrite the email property
JsUser.email = "mahi@facebook.com";  // Updating/overwriting  email property with a new value
// Object.freeze(JsUser)  // Object.freeze(obj_name) used to freeze obj means unchangeable

// JsUser.email = "shubh@facebook.com"
// console.log(JsUser["email"]);   // mahi@facebook.com

// console.log(JsUser);
// {
//     name: 'Mahima',
//     age: 18,
//     'full name': 'mahima  singh ',
//     location: 'jaipur',
//     email: 'mahi@facebook.com',
//     isLoggedIn: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'  // interesting
//   }


// Function as a Method: The greeting function is added as a method to the 
// JsUser object and uses the "this" keyword to access name property of the obj . 
 JsUser.greeting = function(){
    console.log((`Hello developer, ${this.name}`));
    
 }


//  The `greeting()` function prints the greeting to the console, but it doesn't return anything explicitly, 
// which means it implicitly returns `undefined`. 
//  console.log(JsUser.greeting);  // [Function (anonymous)]
 
  console.log(JsUser.greeting());   // Logging : Hello developer, Mahima  output: undefined

 
 