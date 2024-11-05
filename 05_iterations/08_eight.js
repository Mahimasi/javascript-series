// Arrray method:  Array.reduce():

// EXAMPLE:
const arr = [1, 2, 3, 4]    // 0 + 1 + 2 + 3 + 4
const initialValue = 0
const sumWithInitialValue = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue ,initialValue
);
console.log(sumWithInitialValue);  // output: 10


// // EXAMPLE: using  Normal fn :
// const myNums = [ 1, 2, 3]

// const myTotal = myNums.reduce( function (acc,currentval) {
//   console.log(`acc: ${acc} and current value: ${currentval}`); 
//     return acc + currentval 
//   } , 0)
// console.log(myTotal);

// output:
// acc: 0 and current value: 1
// acc: 1 and current value: 2
// acc: 3 and current value: 3



// // EXAMPLE: Using Arrow Fn:
 const myNums = [ 1, 2, 3]

 const myTotal = myNums.reduce( (acc , currentval) => acc + currentval , 0 )
console.log(myTotal);

// output: 6

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "mobile dev course",
        price : 5999
    },
    {
        itemName : "mdata science course",
        price : 12999
    },
]

 const totalPrice  = shoppingCart.reduce( (acc, items) =>  acc + items.price , 0 )
console.log(totalPrice);
// output:  22996

