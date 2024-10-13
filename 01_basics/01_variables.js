const accountId = 12345
let accountEmail = "mahiii@gmail.com" 
var accountPassword = "54321"
  accountCity = "Bihar"
    let accountState;    // undefined
  //  acccountId = 2 // Not allowed
  accountEmail = "mns@gmail.com"
  accountPassword= "246810"
  accountCity ="Bengaluru"

  console.log(accountId); // To print value of individual varaible
  /*
  Prefer not to use var
  because of issue in block scope{....} and functional scope
*/

  // Using table method of console to print values in tabular form by giving all vaiables in the []
   console.table([accountId, accountEmail, accountPassword,accountCity]);       

  