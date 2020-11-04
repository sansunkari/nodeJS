console.log("printing something before timeout");

setTimeout(() => {
   console.log("executing after waiting for 2 seconds");     
}, 2000);

setTimeout(() => {
    console.log("executing after waiting for 2 more seconds");
}, 2000);


console.log("printing something after timeout");