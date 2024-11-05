const coding = ["js", "ruby", "java", "python", "cpp"]


const values = coding.forEach( (item) => {
  console.log(item);
  return item;

  // output:
    // js
    // ruby
    // java
    // python
    // cpp
})
// console.log(values);  // output: undefined because forEach doesn't return any value


const myNums = [1,2,3,4,5,6,7,8,9,10]

// using callback way 1 :
// const newNums = myNums.filter( (num) =>  num > 4)
// console.log(newNums);

// output:
// [ 5, 6, 7, 8, 9, 10 ]

// using callback way 2 :
// const newNums = myNums.filter ( (num) => {
//     num > 4
// })
// console.log(newNums); // output: [] 

// NOTE: Above code returned [] as output because it was giving output without using {} scope but once we declared scope we have to use "return"
//  and return the value 

// using callback way 3 ::
// const newNums = myNums.filter ( (num) => (
//     num > 4
// ))
// console.log(newNums);  // output: [ 5, 6, 7, 8, 9, 10 ] 


// const newNums = []

// myNums.forEach( (num) => {
//     if(num > 4 ){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

// output:
// [ 5, 6, 7, 8, 9, 10 ]


// Practise question:

const books = [
    { title: "Book one" , genre: "Fiction" , publish:1981, edition: 2004},
    { title: "Book two" , genre: "Non-Fiction" , publish:1992, edition: 2008},
    { title: "Book three" , genre: "History" , publish:1999, edition: 2007},
    { title: "Book four" , genre: "Non-Fiction" , publish:1989, edition: 2010},
    { title: "Book five" , genre: "Science" , publish:2009, edition: 2014},
    { title: "Book six" , genre: "Fiction" , publish:1987, edition: 2010},
    { title: "Book seven" , genre: "History" , publish:1986, edition: 1996},
    { title: "Book eight" , genre: "Science" , publish:2011, edition: 2016},
    { title: "Book nine" , genre: "Non-Fiction" , publish:1981, edition: 1989},
];

// const userBooks = books.filter( (bk) =>  bk.genre == "History")
// console.log(userBooks);
// output:
// [
//     {
//       title: 'Book three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]

// userBooks = books.filter( (bk) => {
//      return bk.publish >= 2000
//     } )
// console.log(userBooks);

// output:
// [
//     {
//       title: 'Book five',
//       genre: 'Science',
//       publish: 2009,
//       edition: 2014
//     },
//     {
//       title: 'Book eight',
//       genre: 'Science',
//       publish: 2011,
//       edition: 2016
//     }
//   ]


userBooks = books.filter( (bk) => {
    return bk.publish >= 1995 && bk.genre == "History"
   } )
console.log(userBooks);

// output:
//[ {
    //       title: 'Book three',
    //       genre: 'History',
    //       publish: 1999,
    //       edition: 2007
    //     }]








