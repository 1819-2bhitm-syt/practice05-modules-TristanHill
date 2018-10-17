let data = require("./startProgram.js");

let program1 = function () {
    console.log("*** Starting Program 1 ***");
  console.log("This is Program 1!");
};

let program2 = function () {
    console.log("*** Starting Program 2 ***");
  console.log("This is Program 2!");
};

let program3 = function () {
    console.log("*** Starting Program 3 ***");
  console.log("This is Program 3!");
};

data.startProgram(15, "Program 1", program1);
data.startProgram(20, "Program 2", program2);
data.startProgram(10, "Program 3", program3);