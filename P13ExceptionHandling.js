try {
    x=100;    
    let n=4.0;
    let name = "selenium";
    console.log(n.toUpperCase());//type error
    console.log(n.toFixed(200));
    
    // eval("z = 'selenium;")
    eval("console.log(d);")
    console.log(y);
    
    console.log(x);
    
} catch (error) {    
    // console.log(error);
    if (error instanceof ReferenceError) {
        // console.log(error.constructor.name);
        // console.log(error.message);        
        console.log("Failed due to reference error");
    } else if (error instanceof TypeError) {
        console.log("failed due to type error");
    }
    throw error;
}finally{
    console.log("post condition for try");
}

// x = 100;
// console.log(y);
// console.log(x);