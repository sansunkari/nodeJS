//find odd number
let n = 10;

if (n % 2 == 1) {
    console.log(n + " is odd number");
} else {
    console.log(n + " is even number");
}

//find big value
let x = 10;
let y = 10;

if (x > y) {
    console.log("x is bigger");
} else if (y > x) {
    console.log("y is bigger");
} else {
    console.log("both are equal");
}

let monthName = "mar";

switch (monthName) {//performs strict equals (===)
    case "jan":
        console.log("one");        
        break;
    case "feb":
        console.log("two");        
        break;
    case "mar":
        console.log("three");
        break;
    default:
        console.log("month name not found");
        break;
}