//print number 10 for 5 times

//i=1 : initilize counter
//i<=5: condition
//i++ : incrementation

for (let i = 1; i <=5; i++) {
    console.log(10);    
}

//print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//print numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

//print odd numbers between 10 and 50
for (let i = 10; i <= 50; i+=2) {
    console.log(i);
}

for (let i = 10; i <= 50; i ++) 
    if(i%2==1) console.log(i);

//print data of an array
let n = [10,20,30];
for (let index = 0; index < n.length; index++) {
    console.log(n[index]);        
}

//verify value exist in array
let isValExist = false;
for (let index = 0; index < n.length; index++) {
    if(20==n[index]){
        isValExist=true;
        break;
    }
}
if (isValExist) {
    console.log("value is exist in array");
}else{
    console.log("value is doesn't exist in array");
}

for (let i of n) { //extended for loop
    console.log(i);
}

// n.forEach(v=>console.log(v));

let a = 1;

while (a<10) {
    console.log(a);
    a++;
}
console.log("do while start");
do {
    console.log(a);
    a++;
} while (a<10);