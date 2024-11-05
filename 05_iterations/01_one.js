// FOR LOOP ->  syntax:  for(declaration; condition; increment/decrement){ }

for (let i = 0; i <= 3; i++) {
  const element = i;
  console.log(element);
}
//// output : 0
// 1
// 2
// 3

for (let i = 0; i <= 5; i++) {
  const element = i;
  if (element == 5) {
    // console.log("3 is best number");
  }
  // console.log(element);
}
// output :
// 0
// 1
// 2
// 3 is best number
// 4
// 5 


for (let i = 0; i <= 3; i++) {
  console.log(`Outer loop value: ${i}`);
  for (let j = 1; j <= 2; j++) {
    console.log(`Inner loop value : ${j} and outer value ${i}`);
  }
}
// output:
//  Outer loop value: 0
// Inner loop value : 1 and outer value 0
// Inner loop value : 2 and outer value 0
// Outer loop value: 1
// Inner loop value : 1 and outer value 1
// Inner loop value : 2 and outer value 1
// Outer loop value: 2
// Inner loop value : 1 and outer value 2
// Inner loop value : 2 and outer value 2
// Outer loop value: 3
// Inner loop value : 1 and outer value 3
// Inner loop value : 2 and outer value 3

// Printing table using two loops

for (let i = 1; i <= 3; i++) {
  console.log(`Outer loop: ${i}`);
  for (let j = 1; j <= 3; j++) {
    console.log(i + "*" + j + "=" + i * j);
  }
}

// output:
// Outer loop: 1
// 1*1=1
// 1*2=2
// 1*3=3
// Outer loop: 2
// 2*1=2
// 2*2=4
// 2*3=6
// Outer loop: 3
// 3*1=3
// 3*2=6
// 3*3=9



let myArray = ["Flash", "Batman", "Superman"];
console.log(myArray.length); // output: 3

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log(element);
}
// output:
// Flash
// Batman
// Superman

// break and continue: control statements used in loops (for, while, etc.) to change flow of execution.
//break Statement:
// 1.  Purpose: Exits the loop entirely.
// 2.  Use Case: When a certain condition is met, and there's no need to continue looping.

//// Example:

// for (let index = 1; index <= 10; index++) {
//   if (index == 5) {
//     console.log(`detected 5`);
//     break;     // Exits the loop when i is 5
//   }
//   console.log(`Value of i is ${index}`);
// }
//// output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// detected 5


// continue statement:  skips current iteration and proceed to next one without exiting loop entirely
// When to Use continue:
// 1. Skip specific values in an iteration.
// 2. Filter unwanted cases without stopping the loop.

// Example:
for (let index = 1; index <= 7; index++) {
  if (index == 5) {
    continue; // Exits the loop when i is 5
  }
  console.log(`Value of i is ${index}`);
}
// output:
// Value of i is 1
// Value of i is 2
// Value of i is 3
// Value of i is 4
// Value of i is 6
// Value of i is 7

