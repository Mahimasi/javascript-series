// truthy -> assuming that there exist a true  for thr existing value
// // Examples: if there is  value / string , gives truthy value
// const userEmail =  "mahi@userEmail.ai"

// if (userEmail){
//     console.log("Got user email");

// }else {
//     console.log("Don't have user eamil ");
// }
// // output:  Got user email 


// //  Examples  2 : if there is empty string, gives falsy value
// const userEmail =  ""

// if (userEmail){
//     console.log("Got user email");

// }else {
//     console.log("Don't have user eamil ");
//     }
//     // output : Dont' have user email

//  Examples  3 : if there is empty array, gives truthy value 
const userEmail =  []

if (userEmail){
    console.log("Got user email");

}else {
    console.log("Don't have user eamil ");
    }
    // output : Got user email

//// falsy values are:
// false, 0, -0 ,BigInt 0n , "" , null , undefined, NaN

////truthy values are:
// "0", "false", " ", [], {}, function(){} , anything under quote is truthy values also.

////comparison of :
// 1. false == 0 -> "true"       2. false == "" -> true   3. 0 == "" -> true   


// // To check  length of array : 
// const usermail = []
// if(usermail.length === 0){
//     console.log("Array is empty");
//     } // output: Array is empty


// To check length of obj:
const emptyObj = {}
if (Object.keys(emptyObj).length === 0){   // Object.keys(emptyObj)  returns array of obj
    console.log("Object is empty");
    }

//// Nullish Coalescing Operator (??): null undefined

// ?? is used to provide a fallback value when value on the Left side is either null or undefined.
//  In this example, since 5 is neither null nor undefined, it is used directly, and the right side (10) is ignored.


let val1;      
val1 = 5 ?? 10; 
console.log(val1);    // output: 5

val1 = null ?? 10; 
console.log(val1);    // output: 10


val1 = undefined ?? 11; 
console.log(val1);    // output: 11

val1 = undefined ?? 12 ?? 24; 
console.log(val1);    // output: 12   // it takes first value is if this is not null or undefined if there is nay so it will skip and take next value

// Terniary Operator:
// condition ? true : false

const iceTeaPrice = 100 
iceTeaPrice >= 80 ? console.log("more than 80 ") : console.log("less than 80"); // output: more than 80


