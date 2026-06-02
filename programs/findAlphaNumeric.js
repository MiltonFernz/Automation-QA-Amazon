let arr = ["vani123", "gfs", "MILTON"];

let result = arr.filter(e => /\d/.test(e));

console.log(result);

//without filter
for (let i = 0; i < arr.length; i++) {
  if (/\d/.test(arr[i])) {
    console.log(arr[i]);
  }
}

/*
/ / → used to define a regex
\d → means any digit from 0 to 9
.test() is a method used with regex
*/