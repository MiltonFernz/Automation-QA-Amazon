
console.log("-----------map method------------");

let x = [1, 2, 3, 4, 5]
let y = x.map((e) => e * 2);
console.log("output is:",y);
console.log("original array is not changed:", x);

//.......................................
console.log("-----------filter method------------");
let x1 = x.filter((e) => e%2 ===0)
console.log("output is:",x1);
console.log("original array is not changed:", x);

//.......................................
console.log("-----------reduce method------------");
let sum = x.reduce((a1,x) => a1+x,0)
console.log(sum);