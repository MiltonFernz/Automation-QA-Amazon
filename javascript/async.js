const fs = require('fs');

const data = fs.readFile("milton.txt", "utf-8", (error, data) => {
    console.log(data);
});
console.log("by milton");
