const x = [1, 2, 3, 4, 5];

x.push(6);    // insert at last element
console.log(x);

x.pop(4);     // remove last element
console.log(x);

x.shift();    //remove first element 
console.log(x);

x.unshift(7);  //insert at first element
console.log(x);


//----------------------------------------
console.log("------- splice ----------");
const a = [1, 2, 3, 4, 5];
a.splice(1, 2, 3);
console.log(a);

//----------------------------------------
console.log("------- slice ----------");
const b = [1, 2, 3, 4, 5];
let c = b.slice(2, 4);
console.log(c);

//----------------------------------------
console.log("------- concat ----------");
const a1 = "Te";
const a2 = "st";

let a3 = a1.concat(a2);
console.log(a3)
//----------------------------------------
console.log("------- indexOf ----------");
const b1 = ["red", "pink", "blue", "yellow", "green"];
const b2 = b1.indexOf("green");
console.log(b2)

//----------------------------------------
console.log("------- includes ----------");
const b3 = b1.includes("pink");
console.log(b3)

//----------------------------------------
console.log("------- forEach ----------");
b1.forEach((e) => {
    console.log(e);
})
