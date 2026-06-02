//1. find unique values from array
const arr = [1, 2, 2, 3, 4, 4, 5, 7, 7];
const unique = [...new Set(arr)]; //spread operator. all maintains unique values
console.log(unique);
//---------------------------------------------------

//2. int ot string
const num = 32;
const result = num + '';
console.log(result + 10);
//---------------------------------------------------

//3.  float to int
const x = 11.55;
const y = parseInt(x);
console.log(y);
//---------------------------------------------------

//4. check if a variable is a number
const x1 = '56';
if (typeof x1 === 'number' && !isNaN(x1)) {
    console.log(x1, "is number")
}
else {
    console.log(x1, "is Not number")
}
//---------------------------------------------------

//5. swap variable
let a = 10;
let b = 20;
let c = a;
a = b;
b = c;
console.log(a, b);
// [a,b] = [b,a] //another way
//---------------------------------------------------

//6. check if an object has a property

const person = {
    name: 'milton',
    age: 31
}
if (person.hasOwnProperty('name')) {
    console.log("person has name property")
}
//---------------------------------------------------

//7. remove falsy value from the array (false,0,null, undefined,NaN)

const value = [false, 0, null, 1, undefined, 2, NaN, 3];
const newvalue = value.filter(Boolean);
console.log(newvalue);

//---------------------------------------------------
//8. string - upperCase, lowerCase
const x2 = "Labs";
const x3 = x2.toUpperCase();
const x4 = x2.toLowerCase();
console.log(x3);
console.log(x4);

//9. includes
const lang = ["java", "js"];
if (lang.includes("jss")) {
    console.log("found");
}
else {
    console.log("Not found");
}

// 10. check if array is empty (length)
const empty = [];
if (empty.length === 0) {
    console.log("array is empty")
}

// 11. generate random number
const min = 10;
const max = 100;
const randomNum = Math.floor(Math.random() * (max - min - 1)) + min;
console.log(randomNum);

//12. string to number:
const str = '32.0';
const x5 = parseFloat(str);
console.log("string to number", x5);

// 13. join array elements into a string

const w = ["hello", "Milton"];
const w1 = w.join(' ');
console.log(w1);

const w2 = w.join(',');
console.log(w2);

//14.get object property
const u = {
    name: 'tom',
    age: 31
}
console.log(u.name);

// 15. clone array of object

const w3 = [10, 10, 30];
const w4 = [...w3];    //spread  operator
console.log(w4);

// 16. convert object to array
const employee = {
    name: "milton",
    age: 31
}
const keysArray = Object.keys(employee); //keys array
console.log(keysArray);

const valuesArray = Object.values(employee);  //values array
console.log(valuesArray);

const keyValuesArray = Object.entries(employee);  //key and values array
console.log(keyValuesArray);

// 17. get current date and time

const currentDate = new Date();
console.log(currentDate.toLocaleString());


//18. check if variable is defined(assigned)

let i;
console.log(i);
if (typeof i === 'undefined') {
    console.log("variable is not defined");
}

// 19. truncate an array

const testing = [0, 1, 2, 3, 4, 5];
testing.length = 3;
console.log(testing);

//20. find last item in array
const pop = [0, 1, 2, 3, 4, 5];
const m1 = pop.slice(-1);
console.log(m1);

