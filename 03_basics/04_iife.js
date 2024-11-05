// Immediately Invoked Function Expression (IIFE)
//IIFE used to prevent/avoid  the pollution of globle scope
// IIFE = ()()  ,one() is for fn def. and another() for calling fn (execution of fn)

// types of IIFE:
// 1. named IIFE:

// (function chai (){
//     console.log(`DB CONNECTED`);  // DB CONNECTED
//     })()

// 2. Unnamed IIFE: using arrow fn

// (() => {
//   console.log(`DB CONNECTED TWO`); // DB CONNECTED TWO
// })()

// Passing parameters in unnamed IIFE:
//  ( (username) => {    // taking arg as "Mahi"

//     console.log(`${username}, you are the best `);
//      }
//  )("Mahi")  // taking parameter as "Mahi"   output: Mahi, you are the best

// Merging two IIFE FN  one is named and another is arrow fn
// NOTE:while merging two fn, we have to add semicolon afte one fn
// 1. Named IIFE:

(function chai() {
  console.log(`DB CONNECTED`);
})();

// 2. Unnamed IIFE

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("mahima");
//output : DB CONNECTED
// DB CONNECTED TWO mahima
