const fs = require("fs");

const data = fs.readFile("./data.txt");
console.log(data.toString());
