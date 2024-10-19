// const marvel_heroes = ["thor", "Ironman", "spiderman"]
// const dc_hereos = ["superman", "flash", "batman"]

// method 1 :
// marvel_heroes.push(dc_hereos)

// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heroes[3][1]);  //flash

// method2 :
// const allHeroes = marvel_heroes.concat(dc_hereos)
// console.log(allHeroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// method 3 :

// Using the spread operator (...)  combines  arrays into a new array
// Spread operator breaks down each element from array and inserts it individually
// This way, we avoid creating a nested array, and all elements from both arrays are on the same level

// const all_new_heroes = [...marvel_heroes,  ...dc_hereos,  ]
// console.log(all_new_heroes);    // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// method 4 : flat(),used to remove any nesting,// By default, works only one level deep
// But we pass 'Infinity' as an arg to flatten all nested arrays, regardless of how deeply they are nested

// const another_array = [1, 2, 3, [4, 5, 6] , 7,[6,7,], [4, 5]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);  
// output:  [
//     1, 2, 3, 4, 5,
//     6, 7, 6, 7, 4,
//     5
//   ]
 
// split(): e.g.1:
//  const str = "Hello World!";
//  const arr = str.split(" ");
//  console.log(arr);  // Output: [ 'Hello', 'World!' ]


//split():e.g.2:
// const str = "Hello";
// const arr = str.split("");
// console.log(arr);   // // Output: [ 'H', 'e', 'l', 'l', 'o' ]



// from():
// const str = "Hello";
// const arr = Array.from(str);
// console.log(arr);  
// Output: [ 'H', 'e', 'l', 'l', 'o' ]

// console.log(Array.isArray("mahima")) // false
// console.log(Array.from("Dhoni"))
// console.log(Array.from({name:"mahima"})) // []   // interesting

// Using Array.of()  creates an array from provided values
// Array.of() ,creates a new array with values you pass as arguments

let score1  = 100
let score2  = 200
let score3  = 300

console.log(Array.of(score1, score2, score3));  // [ 100, 200, 300 ]  
