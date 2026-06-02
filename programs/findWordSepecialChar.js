
let arr = ["vani&", "gfs", "MILTON"];
let result = arr.filter(str => /[^\w]/.test(str));
console.log(result);

//without filter
for (let i = 0; i < arr.length; i++) {
  if (/[^\w]/.test(arr[i])) {
    console.log(arr[i]);
  }
}

/*
\w → means word characters (letters a–z, A–Z, digits 0–9, and underscore _)

^ inside brackets → NOT

[^\w] means  “any character that is NOT a letter, number, or underscore”
*/