

demoadd(2, 3);
demoadd(2, 3, 4);
demoadd(2);
demoadd(2, 3, 4, 5);

function demoadd(a, b) {
    console.log(a + b);
}

// function demoadd(a, b,c) {
//     console.log(a + b+c);
// }

//create function for finding odd number
function isodd(n) {
    if(n%2==1){
        return true;
    }else{
        return false;
    }
}

console.log(isodd(10));

function addnumbers(...numbers) {

    let res = 0;
    for (let index = 0; index < numbers.length; index++) {
        res = res+numbers[index];        
    }   
    console.log(res);
}

addnumbers(10,20,30,40)

let z = demoadd;

z(2,3)