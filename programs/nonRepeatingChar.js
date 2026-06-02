function firstNonRepeatingChar(str) {
  const freq = {};

  // Step 1: Count frequency of each character
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Step 2: Find first character with frequency 1
  for (let char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null; // if all characters repeat
}

console.log(firstNonRepeatingChar("javascript")); // j