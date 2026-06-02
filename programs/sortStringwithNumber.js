let arr = ["vani2", "test3", "milton1"];

arr.sort((a, b) => {
  let numA = parseInt(a.match(/\d+/)[0]);
  let numB = parseInt(b.match(/\d+/)[0]);
  return numA - numB;
});

console.log(arr);