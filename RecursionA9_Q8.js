function findProduct(arr) {
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }

  return product;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
const result1 = findProduct(arr1);
console.log("Product of array elements:", result1);

const arr2 = [1, 6, 3];
const result2 = findProduct(arr2);
console.log("Product of array elements:", result2);
