const score = 200 
console.log(score); // 200

const balance = new Number(100);  // new keyword is used to make sure that is a number
console.log(balance);//(Number: 100)
console.log(balance.toString()); // 100 // convert number to string
console.log(balance.toFixed(1)); // 100.00

const number = 123.8966

console.log(number.toFixed(2)); // 123.89
console.log(number.toPrecision(3)); // 123.9

console.log(number.toPrecision(4)); // 123.9
console.log(number.toPrecision(2)); // 1.23e+2

const number1 = 1000000
console.log(number1.toLocaleString()); // 1,000,000


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.PI); // (approximately 3.14159)
console.log(Math.E); //  (approximately 2.718)

console.log(Math.random()); // Generates a random decimal number bwn 0 (inclusive) and 1 (exclusive)
console.log((Math.random() * 10) + 1); // Generates a random decimal no. between 1 and 10

console.log(Math.round(4.6)); // Rounds the number 4.6 to the nearest integer, which is 5
console.log(Math.abs(-4.6)); // Returns the absolute value of -4.6, which is 4.6
console.log(Math.ceil(4.6)); // upper limit of 4.6, which is 5
console.log(Math.floor(4.6)); // lower limit of 4.6, which is 4
console.log(Math.floor(math.random() * 10)); // 

console.log(Math.min(1, 2, 3)); //  smallest number from  list, which is 1
console.log(Math.max(1, 2, 3)); //  largest number from list, which is 3

console.log(Math.sqrt(16)); // square root of 16, which is 4
console.log(Math.pow(2, 3)); // Raises 2 to the power of 3, which is 8 (2^3)

console.log(Math.sin(0)); // sine of 0s, which is 0
console.log(Math.cos(0)); 
console.log(Math.tan(0));  

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);// 19  // 10 to 20







