//numeric
enum browser {
    chrome,
    firefox,
    edge
}
console.log(browser.chrome);

//string
enum env {
    dev = "DEV",
    qa = "QA"
}
console.log(env.dev);

//heterogenous
enum Status {
    ACTIVE = 'act',
    DEACTIVE = 1
}

console.log(Status.ACTIVE);
