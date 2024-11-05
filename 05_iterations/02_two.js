// WHILE LOOP:
// it repeats a block of code as long as a specified condition is true
// useful when  number of iterations isn't predetermined and depends on dynamic conditions.

let index = 2   // Initialization
while (index <= 8 ){    
    console.log(`Value of index: ${index}`);
    index = index + 2   // increments by 2
    
}
//// output:
// Value of index: 2
// Value of index: 4
// Value of index: 6
// Value of index: 8

// let myArray = ["Batman", "Flash", "spiderman", "superman", "shaktiman"]
// let arr = 0
// while( arr < myArray.length){
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 2
// }

//// output: 
// Value is Batman
// Value is spiderman
// Value is shaktiman

// DO WHILE LOOP :

let score = 1
do{
console.log(`Score is ${score}`);
score++ 
}  while (score <= 3);

// output:
// Score is 1
// Score is 2
// Score is 3
