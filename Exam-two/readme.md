

## Table of Contents

- [Table of Contents](#table-of-contents)
- [1. Find Minimum Number in an Array](#1-find-minimum-number-in-an-array)
- [2. Generate Random Password](#2-generate-random-password)
- [3. Check Stock Status](#3-check-stock-status)
- [4. Modify Object Property Dynamically](#4-modify-object-property-dynamically)
- [5. Find Even Numbers in an Array](#5-find-even-numbers-in-an-array)
- [6. Sort Array of Objects by Key](#6-sort-array-of-objects-by-key)
- [7. Merge Sorted Arrays](#7-merge-sorted-arrays)
  - [Or Not Use Built In Function](#or-not-use-built-in-function)
  - [Another Method Fort SortIn And Merged 2 Arrays](#another-method-fort-sortin-and-merged-2-arrays)
- [8. Product Class](#8-product-class)

---

## 1. Find Minimum Number in an Array

```javascript
// Function to find the minimum number in an array
function findMin(arr) {
  if (arr.length === 0) return undefined;
  let min = arr[0];
  for (let num of arr) {
    if (num < min) {
      min = num;
    }
  }
  return min;
}

// Example usage:
const numbers = [10, 21, 3, 14, 53, 55, 36, 48];
const minimum = findMin(numbers);
console.log(`The minimum number is: ${minimum}`);
```

---

## 2. Generate Random Password

```javascript
// Function to generate a random password
function generateRandomPassword(length) {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  if (length <= 0) {
    return "Password length must be greater than 0";
  }
  let password = "";
  const charsetLength = charset.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charsetLength);
    password += charset.charAt(randomIndex);
  }
  return { password, passwordLength: password.length };
}

// Example usage:
const password = generateRandomPassword(8);
console.log(password);
```

---

## 3. Check Stock Status

```javascript
// Function to check stock status
function checkStockStatus(productList = [], availableProductInInventory = []) {
  const inStockProductList = productList.filter(product => availableProductInInventory.includes(product.id));
  const outOfStockProductList = productList.filter(product => !availableProductInInventory.includes(product.id));
  return { inStockProductList, outOfStockProductList };
}

// Example usage:
const productList = [
  { id: 101, title: "Product 1" },
  { id: 102, title: "Product 2" },
  { id: 103, title: "Product 3" },
  { id: 104, title: "Product 4" },
];
const availableProductInInventory = [102, 104];
const result = checkStockStatus(productList, availableProductInInventory);
console.log(result);
```

---

## 4. Modify Object Property Dynamically

```javascript
// Function to modify object property dynamically
function modifyObjectProperty(obj = {}, key, value, remove = false) {
  if (remove) {
    if (obj.hasOwnProperty(key)) delete obj[key];
  } else {
    obj[key] = value;
  }
}

// Example usage:
const myObject = {
  name: 'John',
  age: 22
};
// Add a new property
modifyObjectProperty(myObject, "city", "New York");
console.log(myObject); // { name: 'John', age: 22, city: 'New York' }

// Update an existing property
modifyObjectProperty(myObject, "age", 23);
console.log(myObject); // { name: 'John', age: 23, city: 'New York' }

// Remove a property
modifyObjectProperty(myObject, "city", null, true);
console.log(myObject); // { name: 'John', age: 23 }
```

---

## 5. Find Even Numbers in an Array

```javascript
// Function to find even numbers in an array
function findAryAllEvenNum(nums) {
  const evenNum = nums.filter(num => num % 2 === 0);
  return { evenNum, valueFind: `This Array Total Even Value Find: ${evenNum.length}` };
}

// Example usage:
const numbers = [10, 21, 3, 14, 53, 55, 36, 48];
console.log(findAryAllEvenNum(numbers));
```

---

## 6. Sort Array of Objects by Key

```javascript
// Function to sort an array of objects by a key in ascending order
function sortByKeyAscending(array, key) {
  return array.sort((a, b) => a[key] - b[key]);
}

// Example usage:
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

const data = sortByKeyAscending(people, "age");
console.log(data);
```

---

## 7. Merge Sorted Arrays

```javascript
// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
  let mergedAry = arr1.concat(arr2);
  return mergedAry.sort((a, b) => b - a);
}

// Example usage:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(arr1, arr2);
console.log(mergedArray);
```

### Or Not Use Built In Function

```javascript
function SortedArrays(arr1, arr2) {
  let result = []; // Create an empty array to store the merged result.

  while (arr1.length && arr2.length) {
    // This loop continues as long as both arr1 and arr2 have elements to compare.

    const next = (arr1[0] < arr2[0]) ? arr1.shift() : arr2.shift();
    // Compare the first elements of arr1 and arr2.
    // If the first element of arr1 is smaller, remove it using shift() and assign it to 'next'.
    // If the first element of arr2 is smaller or equal, remove it and assign it to 'next'.

    result.push(next); // Push the smaller element ('next') to the 'result' array.
  }

  // After the loop, one of the arrays might still have elements left.

  if (arr2.length) {
    result = result.concat(arr2); // If arr1 has remaining elements, concatenate them to the 'result'.
  } else if (arr1.length) {
    result = result.concat(arr1); // If arr2 has remaining elements, concatenate them to the 'result'.
  }

  return result; // Return the sorted merged array.
}

// console.log(SortedArrays(arr1, arr2));

```

### Another Method Fort SortIn And Merged 2 Arrays

```javascript
function sortByArrTwoArray(arr1, arr2) {
  let i = 0, j = 0, mergedAry = [];

  // Initialize two pointers, 'i' for arr1 and 'j' for arr2, both set to 0.
  // Create an empty array 'mergedAry' to store the merged result.

  while (i < arr1[i].length && j < arr2[j].length) {
    // This loop continues as long as both 'i' and 'j' are within the bounds of their respective arrays.
    //5 < 7
    if (arr1[i] < arr2[j]) {
      // If the current element in 'arr1' is less than the current element in 'arr2':

      mergedAry.push(arr1[i]); // Add the element from 'arr1' to 'mergedAry'.
      i++; // Move the pointer in 'arr1' to the next element.
    } else {
      // If the current element in 'arr1' is greater than or equal to the current element in 'arr2':

      mergedAry.push(arr2[j]); // Add the element from 'arr2' to 'mergedAry'.
      j++; // Move the pointer in 'arr2' to the next element.
    }
  }

  // At this point, one of the arrays has been fully processed, and we need to add the remaining elements from both arrays.

  while (i < arr1.length) {
    // If there are remaining elements in 'arr1':

    mergedAry.push(arr1[i]); // Add them to 'mergedAry'.
    i++; // Move the pointer in 'arr1' to the next element.
  }

  while (j < arr2.length) {
    // If there are remaining elements in 'arr2':

    mergedAry.push(arr2[j]); // Add them to 'mergedAry'.
    j++; // Move the pointer in 'arr2' to the next element.
  }

  return mergedAry; // Return the sorted merged array.
}

// Call the function with your example arrays and log the result.
// console.log(sortByArrTwoArray(arr1, arr2));

```

---

## 8. Product Class

```javascript
// Define a Product class with a constructor and getTotalPrice method
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Create an instance of the Product class
const laptop = new Product("Laptop", 1000, 3);

// Calculate and print the total price
console.log(`Total price for ${laptop.name}: $${laptop.getTotalPrice()}`);
```