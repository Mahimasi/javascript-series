// FOR OF LOOP:

// ARRAY SPECIFIC LOOPS:
// 1. ["", "","",""]    // Array of string
// 2. [{}, {}, {}, {},{}]  // Array of obj

const arr = [1, 2, 3]

for( const num of arr){
    console.log(num);
}
// output:
// 1
// 2
// 3

const greetings = "Hello"
for (const greet of greetings){
    // console.log(`Each char is ${greet}`);
    console.log(`Each char is ${greetings}`);
}

    // output 1:
// Each char is H
// Each char is e
// Each char is l
// Each char is l
// Each char is o

// output 2:
// Each char is Hello
// Each char is Hello
// Each char is Hello
// Each char is Hello
// Each char is Hello

// Maps: useful for storing key-value pairs
//for...of with Map allows iterating over each entry in  map, 
// make it easy to access both key and value in each iteration.

// Create a new Map object with key-value pairs
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);
// output:
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


// Applying loop on map  and to print output in an array format
for (const key of map) {    
    console.log(key);       
}
// output:
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'Fr', 'France' ]


// To Print output in key-value pair indidually 
for (const [key, value] of map) {     
    console.log(key, ':-' , value);  
}
//output:
// IN :- India
// USA :- United States of America
// Fr :- France


// To print output

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [keys, value] of myObject) {
    console.log(keys, ':-' , value);
}
// output: myObject is not iterable , hence for of loop is applicable on Arrays but  not applicable on objects

 