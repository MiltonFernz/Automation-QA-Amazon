const str = "java";
const freq = {};

for(let i of str){
    freq[i] = (freq[i] || 0) +1
}

console.log(freq);