var x = 10;
let y = 20;

// let y =30;
// console.log(y);

var x =30;
console.log(x);

function demo() {
     z = 100; //global
     var d = 1000;
}
demo()
console.log(z);
// console.log(d);

let ar=[10,20,30];
for (let i of ar) { //let is block scoped
    console.log(i);
}

console.log(i);