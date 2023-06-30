function findNthTerm(a, d, N) {
  return a + (N - 1) * d;
}

// Example usage:
const a1 = 2,
  d1 = 1,
  N1 = 5;
const result1 = findNthTerm(a1, d1, N1);
console.log("The " + N1 + "th term of the series is: " + result1);

const a2 = 5,
  d2 = 2,
  N2 = 10;
const result2 = findNthTerm(a2, d2, N2);
console.log("The " + N2 + "th term of the series is: " + result2);
