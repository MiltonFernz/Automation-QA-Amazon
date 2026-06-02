
function getEvenNumber(value, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (value % 2 == 0) {
                resolve(value);
            } else {
                reject("not a even number");
            }
        }, delay);
    });

}

//promise chain
getEvenNumber(4, 1000)
    .then(result => {
        console.log("step 1 even number:", result);
        return getEvenNumber(6, 1000);
    })
    .then(result => {
        console.log("step 2 even number:", result);
    })
    .catch(result => {
        console.log("chain error:", result)
    })
