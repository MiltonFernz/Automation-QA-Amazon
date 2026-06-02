

const randomNumberPromise = new Promise((resolve, reject) => {    //this is promise object
    // async operation
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);  // promoise fulfiled, this is sent to .then()
        } else {
            // reject(new Error("value is too small")); // promoise rejected, this error is sent to .catch()
            reject("value is too small"); // promoise rejected, this error is sent to .catch()

        }

    }, 2000); // delay for 2 seconds, here promise stays "pending" for 2 seconds
});

randomNumberPromise
    .then(result => { // runs only when resolve() is called
        console.log("promise is fulfiled", result)
    })
    .catch(error => {
        console.log("rejected:",error) // runs only when reject() is called
    })