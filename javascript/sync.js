const fs = require('fs');

const data = fs.readFileSync("milton.txt", "utf-8");
console.log(data);

console.log("by milton");
