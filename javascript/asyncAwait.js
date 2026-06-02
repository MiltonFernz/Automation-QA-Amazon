//async function without await
async function f1() {
    console.log("async function without await");
    return 42; // return promise resolved
}

f1()
    .then(result => {
        console.log(result);
    });

//async function without await but with error
async function f2() {
    console.log("async function without await but with error");
    throw new Error("this is my error"); // return promise rejected
}

f2()
    .catch(error => {
        console.log(error);
    })