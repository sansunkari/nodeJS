function tools(name, version) {

    this.name = name;
    this.version = version;
    this.run = function () {
        console.log(this.name + " is running");
    };
    this.stop = function () {
        console.log(this.name + " is stopped");
    }
}

let tool = new tools("selenium",4.0);

console.log(tool.name);
console.log(tool.version);

let tool2 = new tools("webdriver", 4.0);

tools.prototype.type = "automation";
console.log(tool.type);

let users = ["sudhakar","balu"];

Array.prototype.printall = function(){

    for (let i of this) {
        console.log(i);
    }

    // for (let index = 0; index < this.length; index++) {
    //     this[index]="";        
    // }
    // this[0]="sdkr";
}

users.printall();

console.log(users[0]);