let demo = () => {
    console.log("demo called");
}

// ()=>{}

function demomaths(a, b, act) {
    act(a, b);
}

function add(x, y) {
    console.log(x + y);
}

let mul = function (x, y) {
    console.log(x * y);
}

demomaths(10, 20, add);
demomaths(10, 20, mul);

demomaths(10, 20, function (c, d) {
    console.log(c / d);
});

demomaths(10, 20, (c, d) => console.log(c / d));

//single parameter
//(p)=>return expression;
//(p)=>{return expression};
//p=>return expression;

//multi parameter
//(p1,p2)=>return expression;
//(p1,p2)=>{return expression};

let tools = ["selenium", "webdriver", "protractor"];

tools.forEach(function (val) {
    console.log(val);
});

tools.forEach((y) => console.log(y)); //internal loop
tools.forEach(val => console.log(val));
tools.forEach(val => { console.log(val); });
