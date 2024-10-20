const user = {
  username: "mahima singh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
    console.log(this);   //output :
    // {
    //     username: 'mahima singh',
    //     price: 999,
    //     welcomeMessage: [Function: welcomeMessage]
    //   }
    
  },
};
// 'this' keyword refers to the current context(block scope)

user.welcomeMessage()   // mahima singh, welcome to website
user.username = "mahiii"  // overwriting username so "this" keyword will update the username and work acccordingly
user.welcomeMessage()    // mahiii, welcome to website

user.welcomeMessage()

// console.log(this); // {}  //NOTE: In node env ,if there is current context is empty so "this" keywword refers to the {}
//NOTE: but In browser , global object is window means if there is empty context so this refers to the window object
//
// TRIAL ONE:
//function chai() {
//   let username = "mahiii";
//   console.log(this);   // some methodes and functions
//   console.log(this.username);  // undefined, because "this" willl not work in the function
//   }
// chai();

// TRIAL TWO:
// const chai = function(){
//     let username = "mahiii"
//     console.log(this.username);  // undefined

// }
// chai()

// TRIAL THREE : ARROW FUNCTION
// const chai = () => {
//     let username = "mahiii"
//     console.log(this);  // undefined
// }
// chai()

// //ARROW FUNCTION: 1. EXPLICITELY :BASIC ARROW FUNCTION : using return
// const addTwo = (num1, num2) => {  // have to use return keyword
//     return num1 + num2
// }
//  console.log(addTwo(3,4))   // 7

//ARROW FUNCTION: 2. IMPLICIT RETURN  : without using return
// e.g.  2.a 
// const addTwo = (num1, num2) => num1 + num2  //7  we can write it one line and no neeed to use return and scope
//   console.log(addTwo(3,4))   // 7


// e.g.  2.b
// const addTwo = (num1, num2) => (num1 + num2 ) // we can write it one line , no neeed to use return and scope when we use { } we have to use return keyword
//   console.log(addTwo(3,4))   // 7

// e.g.  2.c
// const addTwo = (num1, num2) => {username:"mahiii"}
// console.log(addTwo(5,5));      //output: undefined

// e.g.  2d
// const addTwo = (num1, num2) => ({ username: "mahiii" }); // note: we have to  wrap the obj or {} in the braces() for the output
// console.log(addTwo(5, 5)); //output: {username:"mahiii"}

// const myArray = [2, 5, 3, 7, 8]
//  myArray.forEach()
