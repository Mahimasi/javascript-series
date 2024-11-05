const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map(  (num) => num + 10)  // we define num first in the arg section then use it in the execution section
// console.log(newNums);

// output:
// [                               
//     11, 12, 13, 14, 15,        
//     16, 17, 18, 19, 20      
//   ]


// const newNums = myNumbers.map(  (num) =>  { return  num + 10})  // we have to use return keyword once we decalred scope in the execution section
// console.log(newNums);

// output:
// [                               
//     11, 12, 13, 14, 15,        
//     16, 17, 18, 19, 20      
//   ]


// Using 2 or more methods at a same time called chaining
// .filter() used for condition (t/f)
// .map() are used for perforrm operations and have to return implicitly or explicitly

const newNums = myNumbers
                .map( (num) => num * 10) // result of first method will be passed in second method 
                .map( (num) => num + 1 ) 
                .filter(  (num) => num >= 40 ) 

        console.log(newNums);
        // output: 
        // [
        //     41, 51,  61, 71,
        //     81, 91, 101
        //   ]
        