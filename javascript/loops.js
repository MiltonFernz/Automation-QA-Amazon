console.log("----------- for loop ------------");
for (let i = 1; i <= 3; i++) {

    console.log(i);
}
//----------------------------------
console.log("------ for of loop --------");
const a = [1, 2, 3, 4, 5]
for (const e of a) {
    console.log(e);
}
//----------------------------------------
console.log("------- for in loop ----------");
const user = {
    name: "milton",
    age: 31
}

for (const e in user) {
    console.log(user[e]);
}
//----------------------------------------
console.log("------- while loop ----------");
let p = 1;
while (p <= 3) {
    console.log(p);
    p++;
}

//----------------------------------------
console.log("------- do while loop ----------");

let h = 1;
do {
    console.log(h);
    h++;
}
while (h <= 0)

