let tool = {
    name: "selenium",
    version: 4.0,
    run: function () {
        console.log(this.name + " is running");
    },
    stop: function () {
        console.log(this.name + " is stopped");
    }
};

console.log(tool.name);
console.log(tool.version);
console.log(tool["version"]);

for (let key in tool) {
    if (typeof (tool[key]) != "function") {
        console.log(key + ":" + tool[key]);
    }
    else {
        // console.log(tool[key]);
        tool[key]();
    }
}

// tool.run();

tool.users = "testers";

console.log(tool.users);
