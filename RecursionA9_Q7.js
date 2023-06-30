function generatePermutations(str) {
  const permutations = [];

  // Recursive function to generate permutations
  function permute(currentStr, remainingStr) {
    if (remainingStr.length === 0) {
      permutations.push(currentStr);
      return;
    }

    for (let i = 0; i < remainingStr.length; i++) {
      const updatedCurrent = currentStr + remainingStr[i];
      const updatedRemaining =
        remainingStr.slice(0, i) + remainingStr.slice(i + 1);
      permute(updatedCurrent, updatedRemaining);
    }
  }

  permute("", str);
  return permutations;
}

// Example usage:
const input1 = "ABC";
const result1 = generatePermutations(input1);
console.log("Permutations of " + input1 + ":");
console.log(result1);

const input2 = "XY";
const result2 = generatePermutations(input2);
console.log("Permutations of " + input2 + ":");
console.log(result2);
