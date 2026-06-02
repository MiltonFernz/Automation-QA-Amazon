console.log("--object creation using literals-------------------");

const user = {
    name: "milton",
    age: 31
}
console.log(user.name);

//---------------------------------------------------
console.log("----object creation using Constructor Function-----");

function car(brand, name, price) {
    this.brand = brand;
    this.name = name;
    this.price = price;
};
const c1 = new car("bmw", "v3", 10000);
console.log(c1);

//---------------------------------------------------
console.log("----object creation using class style-----");

class Customer {
    constructor(name, product) {
        this.name = name;
        this.product = product;
    }
}
const x3 = new Customer("milton", "Apple");
console.log(x3.name);
console.log(x3.product);



//---------------------------------------------------
console.log("----object creation using object.create -----");

const employePrototype = {
    printInfo: function () {
        console.log(`emp name is: ${this.name}`);
    }
}

const e1 = Object.create(employePrototype);
e1.name = "Tom";
e1.printInfo();