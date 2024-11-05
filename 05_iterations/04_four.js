const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: "swift by apple"
}

// Applying for in loop on object:

for (const key in myObject) {
// console.log(key);  // will print  keys
// output :
// js
// cpp
// rb
// swif

// console.log(myObject[key]);  // will print values  of keys
// output:
// javascript
// C++
// ruby
// swift by apple


// console.log(`${key} shorcut is for ${myObject[key]}`); // prints both 
// output:
// js shorcut is for javascript
// cpp shorcut is for C++
// rb shorcut is for ruby
// swift shorcut is for swift by apple

}

// Applying on Array:

// To print keys of Array:
const programming  = ["js","rb", "py","java", "cpp"]
for (const key in programming) {

    // console.log(key);
    // output: 0-4 are keys of Array :
    // 0
    // 1
    // 2
    // 3
    // 4

    // To print values of Array:
    console.log(programming[key]);
    // output:
    // js
    // rb
    // py
    // java
    // cpp

}

// Map:

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key); // will not show any output because map  is  not iterable
} 


