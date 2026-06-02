//reverse string

function reverseString(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    if(result===str){
        console.log("it is palindrome");
    }
    else{
        console.log("it is Not palindrome");
    }
    return result;
}

console.log(reverseString("JS"));
console.log(reverseString("12345"));

