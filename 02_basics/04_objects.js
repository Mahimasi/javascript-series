// const tinderUser = new Object()   // Singleton object creation (standard object constructor) using new object().

 const tinderUser = {};   // Non-singleton object creation (using object literal notation)


// Adding properties to the object dynamically
 tinderUser.id = "123abc";  
 tinderUser.name = "priya";  
 tinderUser.isLoggedIn = false;  

// Logging the entire object to the console
// console.log(tinderUser);  // Outputs: { id: '123abc', name: 'priya', isLoggedIn: false }


// const regularUser = {
//     email: "anyone@gmail.com",
//     fullname: {  // Nested object for full name details
//         userFfullname:{
//             firstname: "mahima",
//             lastname: "singh"
//         }

//     }
// }

// Accessing nested properties
// console.log(regularUser.fullname);  // { userFfullname: { firstname: 'mahima', lastname: 'singh' } }
// console.log(regularUser.fullname.userFfullname.firstname);  // Accessing first name from  deeply nested structure, outputs :"mahima"

//optional chaining

// const user = {
//     profile: {
//         name: "Mahima"
//     }
// };



// Using optional chaining to safely access nested properties
// console.log(user?.profile?.name);  // Output: Mahima

// If a property in the chain is `undefined` or `null`, it returns `undefined` instead of throwing an error
// console.log(user?.address?.city);  // Output: undefined (no error thrown)


const obj1 = {1:"a",  2:"b"}
const obj2 = {3:"a",  4:"b"}


// const obj3 = {obj1, obj2 } // // This method nests obj1 and obj2 inside a new object
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
 
// merging methods : 
// 1. Object.assign() :  Merging obj1 and obj2 into one object using Object.assign()
// Object.assign(target, source1, source2) merges all source objects into the target object

// const obj3 = Object.assign({}, obj1, obj2);  // An empty object is the target, and obj1, obj2 are merged into it
// console.log(obj3);  // Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// The keys from both obj1 and obj2 are combined in a single object.
// Object.assign copies the properties from obj1 and obj2 into a new object, without nesting.

// 2. Using Spread operator{...} :  spread first then insert individually 
const obj3 = {...obj1, ...obj2}
console.log(obj3);   // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }  

//  data from the databases / array of objects:

const users = [
    {
      id: 1 ,
      email: "first@gmail.com",
      age: 20

    },
    {
        id: 2,
        email:"second@gmail.com", 
        age : 30
  
      },
      {
        id: 3,
        email:"third@gmail.com", 
        age : 30
  
      },
]
users[1].email
console.log(tinderUser);  // { id: '123abc', name: 'priya', isLoggedIn: false } 

console.log(Object.keys(tinderUser));// accesing all keys : [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));// accesing all  values  output: [ '123abc', 'priya', false ]
console.log(Object.entries(tinderUser));// accesing all  keys with their values as an array , output: [ [ 'id', '123abc' ], [ 'name', 'priya' ], [ 'isLoggedIn', false ] ]


// Checking if the 'tinderUser' object has a specific property
// The `hasOwnProperty()` method checks if the specified property ('isLoggedin') exists directly on the object, 
console.log(tinderUser.hasOwnProperty('isLoggedin'));  // false


const course = {
  coursename: "js in hindi",
  price: "999",  
  courseInstructor: "indian" 
}

// Accessing values from the object
// Most common way to access a property is by using dot notation
// Example: course.courseInstructor 

// Another way to access object properties is through destructuring
// Destructuring syntax allows us to extract properties into variables
// Example:
const {courseInstructor} = course;  // Extract courseInstructor property from course object
console.log(courseInstructor);  // Outputs: 'indian'

// We can also modify the variable name while destructuring
const {courseInstructor: instructor} = course;  // Assign courseInstructor to a new variable called instructor
console.log(instructor);  // Outputs: 'indian'


// Another example of destructuring in Reactjs
// const navbar = ({}) => {

// }
// navbar(company = "shubh ")


// This is a JSON object format example
// {
//   "name":  "mahi",
//   "coursename": "js concepts",
//   "price" : "free"
// }

// Array of objects in JavaScript or JSON.
[
    {},
    {},
    {}
]


// [] represents an array.
// {} represents an object.
// In this case, the array contains multiple empty objects. 
// Each object inside the array can hold key-value pairs.

// example:
[
  { "name": "mahi", "age": 25 },
  { "name": "john", "age": 30 },
  { "name": "sara", "age": 28 }
]
