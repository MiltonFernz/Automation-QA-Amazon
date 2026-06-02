let arr =["vani","gfs","MILTON"];
let result = arr.filter(e => e === e.toUpperCase());

console.log(result);


// without using filter method

let arrStr =["vani","gfs","MILTON"];


for (let i=0;i<arrStr.length;i++){
  if(arrStr[i]=== arrStr[i].toUpperCase()){
    console.log(arrStr[i]);
  }
}