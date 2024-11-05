// In switch statement , cases are case sensitive 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }
//NOTE : once key is found in the switch case statement, so every code after the founded key except default  is executed so thats why, wee have to use break to break control flow
const month = 3  // matching  key as "number" datatype

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
        case 5:
        console.log("may");
        break;

    default:
        console.log("default case match");
        
        break;
}
// output : march


const month_name = "march"  // matching  key as "string" datatype

switch (month_name) {
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
        case "may":
        console.log("may");
        break;

    default:
        console.log("default case match");
        
        break;
}// output : march