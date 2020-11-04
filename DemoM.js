//DemoM.js
 function DemoMaths() {

    this.add = function (x, y) {
        return x + y;
    }

    this.mul = function (x, y) {
        return x * y;
    }
}

function demo() {
    console.log("demo called");
}
var x=100;
// module.exports = {DemoMaths,demo};
// module.exports= new DemoMaths();

module.exports = {dm: new DemoMaths(), demo,x };