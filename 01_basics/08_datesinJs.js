// Dates

// let myData = new Date();
// console.log(myData);// 2024-10-17T16:09:02.489Z
// console.log(myData.toString ());//Thu Oct 17 2024 21:39:02 GMT+0530 (India Standard Time)
// console.log(myData.toDateString());//Thu Oct 17 2024
// console.log(myData.toLocaleString ());// 17/10/2024, 9:39:02 pm
// console.log(typeofmyData); // object

// let myCreateDate = new Date(2023, 0, 23) // y/m/d
//let myCreateDate = new Date("2023-01-24")
//console.log(myCreateDate.toLocaleString()); //24/1/2023, 5:30:00 am

// console.log(myCreateDate); // 2023-01-22T18:30:00.000Z

// let myCreateDate2 = new Date(2023, 0, 23, 5,3 ) // y/m/d/h/m
// console.log(myCreateDate2); // 2023-01-23T05:03:00.000Z
// console.log(myCreateDate2.toLocaleString()); // 23/1/2023, 5:03:00 pm

//  let myTimeStamp = Date.now();

//  console.log(Date.now());
//  console.log(Math.floor(Date.now()/1000)); // rounded off value in seconds in whole

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //10
console.log(newDate.getDay()); //4

// for complex structure   ->  `${newDate.getDay()} and the time`

newDate.toLocaleString('default' , {
    weekday: "long",
    
})
