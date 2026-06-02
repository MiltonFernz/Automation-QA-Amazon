let arr = [1, 2, 3, 7, 8, 9];
let count = 10;
let missedValue = [];

for (let i = 1; i < count; i++) {
    if (!arr.includes(i)) {
        missedValue.push(i);
    }
}

console.log(missedValue);