/* 1. Write a JavaScript function that takes an array and returns the minimum
number of this array using a loop. Ignore the built-in method for finding.
(Mark: 5)
Example:
Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];
Output: 3 */

function findAryMinVal(ary) {
  if (ary.length === 0) return undefined
  let minAry = ary[0]
  for (let num of ary) if (num > minAry) minAry = num
  return minAry
}
const numbers = ["10", "21", 3, "14", "53", 55, "56", "36", 48];
// console.log(findAryMinVal(numbers));

function findAryMaxVal(ary) {
  if (ary.length === 0) return undefined
  let aryMaxVal = ary[0]
  for (let num of ary) if (num > aryMaxVal) aryMaxVal = num
  return aryMaxVal
}
// console.log(findAryMaxVal(numbers));

// function findMin(arr) {
//   if (arr.length === 0) {
//     return undefined; // Handle the case of an empty array
//   }

//   let min = arr[0]; // Assume the first element is the minimum

//   for (let i = 1; i < arr.length; i++) {
//     // let current = arr[i];
//     min = arr[i] < min ? arr[i] : min;
//   }

//   return min;
// }

// // Example usage:
// const minimum = findMin(numbers);
// console.log(`The minimum number is: ${minimum}`); // Output: The minimum number is: 1

function findMin(arr) {
  if (arr.length === 0) return undefined
  let length = arr.length
  let minAryVal = arr[0]
  for (let i = 0; i < length; i++) minAryVal = minAryVal > arr[i] ? arr[i] : minAryVal
  return minAryVal
}
const minimum = findMin(numbers)
// console.log(`The minimum number is:${minimum}`);






/*
2. Create a JavaScript function that generates a random password with a specified
length. The password should include a mix of uppercase letters, lowercase
letters, numbers, and special characters. (Mark: 5)
Character Set :
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%
^&*()"
Example:
Input: generateRandomPassword(8);
Output: “Pas@word” */

function generateRandomPassword(num) {
  let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`, pass = '', strLength = str.length, numLenth = num.length
  if (num <= 0) return 'Value mast be grater then 0'
  for (let i = 0; i < numLenth; i++) {
    let char = Math.floor(Math.random() * strLength)
    pass += str.charAt(char)
  }
  return { RandomPassword: pass, passwordLenth: pass.length }
}
// console.log(generateRandomPassword(8));
/* Function to generate combination of password */
function generatePass(num = 8) {
  let pass = '';
  let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()`
  for (let i = 0; i <= num; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
  }

  return { pass, passLength: pass.length };
}

// console.log(generatePass(10));


function generateRandomPassword(length) {
  // Define the character set
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

  // Check if the length is valid
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
// console.log(password);


// console.log(Math.round(4.6));//5
// console.log(Math.round(4.5));//5
// console.log(Math.round(4.3));//4
// console.log();
// console.log(Math.ceil(4.6));//5
// console.log(Math.ceil(4.5));//5
// console.log(Math.ceil(4.3));//5
// console.log();
// console.log(Math.floor(4.6));//4
// console.log(Math.floor(4.5));//4
// console.log(Math.floor(4.3));//4


/* 3. Write a Javascript function that takes 2 arrays as input. Which are productList
and availableProductInInventory. Your task is to determine which products are
in stock and which are out of stock. (Mark: 5)
Example
Input:
const productList = [
{id: 101, title: "Product 1"},
{id: 102, title: "Product 2"},
{id: 103, title: "Product 3"},
{id: 104, title: "Product 4"}
];
const availableProductInInventory = [102, 104];

Output:
{
inStockProductList: [{id: 102, title: "Product 2"}, {id: 104, title: "Product 4"}],
outOfStockProductList: [{id: 101, title: "Product 1"}, {id: 105, title: "Product 3"}]
} */

function checkStockStatus(productList, availableProductInInventory) {
  const inStockProductList = [];
  const outOfStockProductList = [];

  // Create a set of available product IDs for faster lookup
  const availableProductSet = new Set(availableProductInInventory);

  productList.forEach(product => {
    if (availableProductSet.has(product.id)) {
      inStockProductList.push(product);
    } else {
      outOfStockProductList.push(product);
    }
  });

  return {
    inStockProductList,
    outOfStockProductList,
  };
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
// console.log(result);

function checkStockStatus(productList, availableProductInInventory) {
  let inStockProductList = [], outOfStockProductList = [], productListLenth = productList.length, availableProductInInventoryLength = availableProductInInventory.length
  for (let i = 0; i < productListLenth; i++) {
    let found = false
    for (let j = 0; j < availableProductInInventoryLength; j++) {
      if (productList[i].id === availableProductInInventory[j]) {
        inStockProductList.push(productList[i])
        found = true
        break
      }
    }
    if (!found) {
      outOfStockProductList.push(productList[i])
    }
  }
  return { inStockProductList, outOfStockProductList }
}
// console.log(checkStockStatus(productList,availableProductInInventory));


function checkStockStatus(productList = [], availableProductInInventory = []) {
  const inStockProductList = [], outOfStockProductList = [], availableProductInInventorySet = new Set(availableProductInInventory)
  for (let product of productList) {
    // if (availableProductInInventorySet.has(product.id)) inStockProductList.push(product)
    // else outOfStockProductList.push(product)
    if (availableProductInInventory.includes(product.id)) inStockProductList.push(product)
    if (!availableProductInInventory.includes(product.id)) outOfStockProductList.push(product)
  }
  return { inStockProductList, outOfStockProductList }
}

// console.log(checkStockStatus(productList,availableProductInInventory));

function checkStockStatus(productList = [], availableProductInInventory = {}) {
  const inStockProductList = productList.filter(product => availableProductInInventory.includes(product.id))
  const outOfStockProductList = productList.filter(product => !availableProductInInventory.includes(product.id))
  return { inStockProductList, outOfStockProductList }
}
// console.log(checkStockStatus(productList,availableProductInInventory));



/* 4. How do you add or remove properties from an object dynamically two
operations are managed from one function? (Mark: 5) */


// function modifyObjectProperty(obj, key, value, remove = false) {
//   if (remove) {
//     // Remove the property if it exists
//     if (obj.hasOwnProperty(key)) {
//       delete obj[key];
//     }
//   } else {
//     // Add or update the property
//     obj[key] = value;
//   }
// }

function modifyObjectProperty(obj = {}, key, value, remove = false) {
  if (remove) {
    if (obj.hasOwnProperty(key)) delete obj[key]
  }
  else obj[key] = value
}


// // Example usage:
const myObject = {
  name: 'John',
  age: 22
}
// Add a new property
modifyObjectProperty(myObject, "city", "New York");
// console.log(myObject); // { name: 'John', age: 30, city: 'New York' }

// Update an existing property
modifyObjectProperty(myObject, "street", 'Miami');
// console.log(myObject); // { name: 'John', age: 31, city: 'New York' }

// Remove a property
modifyObjectProperty(myObject, "street", null, true);
// console.log(myObject); // { name: 'John', age: 31 }







/* 5. Write a JavaScript function that takes an array of numbers and returns a
new array with only the even numbers. (Mark: 5)
Example:
Input: const numbers = [10, 21, 3, 14, 53, 55, 36, 48]
Output: [10, 14, 36, 48] */

const numberes = [10, 21, 3, 14, 53, 55, 36, 48]
function findAryAllEvenNum(num) {
  // const evenNum = []
  // for (let val of num) if (val>0 && val%2===0) evenNum.push(val)
  // const evenNum = num.filter(val=>val>0 && val%2===0)
  const evenNum = num.filter(val => val > 0 && val % 2 === 0)
  return { evenNum, valueFind: `This Array Total Even Value Find:${evenNum ? evenNum.length : 0}` }
}
// console.log(findAryAllEvenNum(numberes));.





/* 6. Write a JavaScript function that takes an array of objects and a key, and
returns a new array sorted based on the values of that key in ascending
order. (Mark: 5)
Example:
Input const people = [
{ name: "John", age: 30 },
{ name: "Alice", age: 25 },
{ name: "Bob", age: 35 },
];
const data = myfunction(people, "age");
[
{ name: "Alice", age: 25},
{ name: "John", age: 30 },
{ name: "Bob", age: 35 },
]
 */
const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

function sortByKeyAscending(ary, key) {
  return ary.sort((a, b) => a[key] - b[key])
}
// console.log(sortByKeyAscending(people, "age"));

function sortByKeyAscending(array, key) {
  return array.sort((a, b) => a[key] - b[key]);
}

const data = sortByKeyAscending(people, "age");
// console.log(data);


/* 7. Write a JavaScript function that takes two sorted arrays and merges them
into a single sorted array without using any built-in sorting functions.
(Mark: 5)
Example:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
myfunction(arr1, arr2);
Output: [8,7,5,4,3,2,1]
Output: [1, 2, 3, 4, 5, 6, 7, 8] */

const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8]
function SortedArray(ary1,ary2) {
  let concatAry = ary1.concat(ary2)
  return concatAry.sort((a,b)=>a-b)
}
// console.log(SortedArray(arr1, arr2));

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



/* 8. Write a JavaScript class definition for the Product class with a constructor and
the getTotalPrice() method. Additionally, create an instance of the Product
class and calculate its total price (price multiplied by quantity). (Mark: 5)
Assume the following product data:
Product Name: "Laptop"
Price: 1000
Quantity: 3 */

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
