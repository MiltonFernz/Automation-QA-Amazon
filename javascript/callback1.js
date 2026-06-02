function greet(name) {
    console.log("Hello " + name);
}

function processUserInput(callback) {
    let name = "Milton";
    callback(name);   // calling the callback
}

processUserInput(greet);
