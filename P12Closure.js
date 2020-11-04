function demo() {
    let x=0;
    return ()=>{
        x=x+1;
        return x;
    }
}

let orangecounter = demo();
let applecounter = demo();
console.log(orangecounter());
console.log(applecounter());
console.log(orangecounter());
console.log(orangecounter());
console.log(orangecounter());
console.log(applecounter());

let orangeCount = orangecounter();
let appleCount = applecounter();

(function () {
    console.log("Anonymous called");    
})();