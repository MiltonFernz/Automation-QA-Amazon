let arr = ["a","b","c","d","d"];

let duplicate = arr.filter((e, index, arrNum) => arrNum.indexOf(e) !== index); 



// first occ 1 = 0         0
// first occ 2 = 1         1
// first occ 1 = 0         2


 





console.log(duplicate);

// e is current element
// index return current position
// arr the whole array
// arr.indexOf(e) → gives the first position where that value appears
// If the current index is not equal to that first position, it means this is a repeated occurrence