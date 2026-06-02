function getUserId(userId) {
    if (typeof (userId) === "number") {
        return userId + " is number";
    }
    else if (typeof (userId) === "string") {
        return userId + " is string";
    }
}
console.log(getUserId(707902));
console.log(getUserId("milton"));
