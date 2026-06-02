// find missing numberin array from 1 to 10

let arr = [1, 2, 3, 5];
let count = 10;
let output = [];

for (let i = 1; i < count; i++){
    if(!arr.includes(i)){
        output.push(i);
    }
}

console.log(output);