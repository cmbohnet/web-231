const header = require("../bohnet-header.js");
console.log(header.display("Christine", "Bohnet", "week-3-exercise-3.3"));

// variable
const choice = "C";

switch (choice) {
  case "A":
    console.log("B");
    break;

  case "B":
    console.log("B");
    break;

  case "C":
    console.log("Winner winner, chicken dinner!");
    break;

  case "D":
    console.log("D");
    break;

  default:
    console.log("default");
    break;
}
