function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n /= 2;
  }

  return n === 1;
}
//test
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false
