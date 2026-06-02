const arr = [10, 20, 30];
const max = arr.reduce((a, b) => {
    return a > b ? a : b
})

console.log("max value:", max);
console.log("----------");


//  .reduce(accumulator, current value)
//  reduce() takes all values in an array and reduces them to one single value.
//  a = first element also accumulator
//  b is current value loop start from second element
//  it compares numbers one by one and keeps the bigger one between a and b

const largeValue = () => {
    console.log("original array is:", arr);

    firstLargeValue = Math.max(...arr);
    console.log("largest value in array:", firstLargeValue)

    indexOfLargestValue = arr.indexOf(firstLargeValue);
    console.log("index oflargest value is:", indexOfLargestValue);

    arrAfterDeleting = arr.splice(indexOfLargestValue, 1,)

    secondLargeValue = Math.max(...arr);
    console.log("largest value in array:", secondLargeValue)

    return (secondLargeValue);
}

console.log(largeValue());

