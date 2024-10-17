//const name = "mahi"
//const repoCount = 50
//console.log(name + repoCount +"value");  // mahi50value  (outdated way )
// console.log(name + repoCount +"  value");  // mahi50  value

// Modern way: The symbol ` is called a backtick or grave accent.
// In Js, it is used to define template literals, which allow for string interpolation and multi-line strings.

let name = "Mahima";
let repoCount = 50;
let greeting = `Hello, ${name}, you have ${repoCount} repositories!`; // Using backticks for string interpolation
console.log(greeting);
// output : Hello, Mahima, you have 50 repositories!

//methods of string
const gameName = new String(AnimeLover);
console.log(gameName[0]); // A (to find first letter)
console.log(gameName.length); // 11 (to find length of string)
console.log(gameName.toUpperCase()); // ANIMELOVER (to convert string into uppercase)
console.log(gameName.toLowerCase()); // animelover (to convert string into lowercase)
console.log(gameName.charAt(2)); // i (to find 2nd letter)
console.log(gameName.indexOf("o")); // 1 (to find index of o)
console.log(gameName.lastIndexOf("o")); // 4 (to find last index of o)
console.log(gameName.search("o")); // 1 (to find index of o)
console.log(gameName.slice(0, 4)); // ANI (to slice string)
console.log(gameName.replace("Lover", "Lovers")); //AnimeLovers (to replace string)
console.log(gameName.trim()); //AnimeLover (to trim string)
console.log(gameName.repeat(2)); //AnimeLoverAnimeLover (to repeat string)
console.log(gameName.split(" ")); // [Anime, Lover] (to split string)
console.log(gameName.concat(" is my favourite game")); //AnimeLover is my favourite game (to concatenate string)
console.log(gameName.replaceAll("o", "a")); //AnimeLaver is my favourite game (to replace all o with a)
console.log(gameName.includes ("z")); // false (to check if string includes z)






