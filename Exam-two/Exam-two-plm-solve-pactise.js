/* 1. Write a JavaScript function that takes an array and returns the minimum
number of this array using a loop. Ignore the built-in method for finding.
(Mark: 5)
Example:
Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];
Output: 3 */
const numbers = ["10", "21", 3, "14", "53", 55, 48];
function aryMinValue(ary=[]) {
  if(!Array.isArray(ary)) return `Function value mast be decleare on array`
  let minAryVal = ary[0]
  for (let arr of ary) if (arr < minAryVal) minAryVal = arr
  return minAryVal
}
console.log(aryMinValue(numbers));

/* 2. Create a JavaScript function that generates a random password with a specified
length. The password should include a mix of uppercase letters, lowercase
letters, numbers, and special characters. (Mark: 5)
Character Set :
"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%
^&*()"
Example:
Input: generateRandomPassword(8);
Output: “Pas@word” */

function generateRandomPassword(num) {
  if (!Number(num)) return `Function paramiter value on mast be number`
  let str=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%
  ^&*()`, strLength = str.length, pass = ''
  for (let i = 0; i < num; i++){
    let char = Math.floor(Math.random() * strLength)
    pass+=str.charAt(char)
  }
  return {password:pass,passwordLength:pass.length}
}
console.log(generateRandomPassword(8));

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
const productList = [
  {id: 101, title: "Product 1"},
  {id: 102, title: "Product 2"},
  {id: 103, title: "Product 3"},
  {id: 104, title: "Product 4"}
  ];
  const availableProductInInventory = [102, 104];
function checkStockStatus(productList, availableProductInInventory) {
  const inStockProductList = productList.filter(product=>availableProductInInventory.includes(product.id))
  const outOfStockProductList = productList.filter(product => !availableProductInInventory.includes(product.id))
  return {inStockProductList,outOfStockProductList}
}

// console.log(checkStockStatus(productList,availableProductInInventory));

function checkStockStatus(productList,availableProductInInventory) {
  let inStockProductList = [], outOfStockProductList = [], productListLenth = productList.length, availableProductInInventoryLength = availableProductInInventory.length
  for (let i = 0; i < productListLenth; i++){
    let product=false
    for (let j = 0; j < availableProductInInventoryLength; j++){
      if (productList[i].id === availableProductInInventory[j]) {
        inStockProductList.push(productList[i])
        product = true
        break
      }
    }
    if (!product) outOfStockProductList.push(productList[i])
  }
  return {inStockProductList,outOfStockProductList}
}
// console.log(checkStockStatus(productList,availableProductInInventory));

function checkStockStatus(productList,availableProductInInventory) {
  const inStockProductList = [], outOfStockProductList = [], setProductList = new Set(availableProductInInventory)
  for (let product of productList) {
    if (setProductList.has(product.id)) inStockProductList.push(product)
    else outOfStockProductList.push(product)
  }
  return {inStockProductList,outOfStockProductList}
}
console.log(checkStockStatus(productList,availableProductInInventory));

/*
4. How do you add or remove properties from an object dynamically two
operations are managed from one function? (Mark: 5) */
function modifyObjectProperty(obj,key,value,remove=false) {
  if (remove) {
    if (obj.hasOwnProperty(key)) delete obj[key]
  }
  else obj[key]=value
}
const myObj = { name: 'John', age: 30 }
modifyObjectProperty(myObj, 'age',25)
console.log(myObj);

/* 5. Write a JavaScript function that takes an array of numbers and returns a
new array with only the even numbers. (Mark: 5)
Example:
Input: const numberes = [10, 21, 3, 14, 53, 55, 36, 48]
Output: [10, 14, 36, 48] */
const numberes = [10, 21, 3, -14, 53, 55, 36, 48]
function findAryAllEvenNum(ary) {
  if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array`
  const evenValAry = ary.filter(num => num>0 && num %2===0)
  return evenValAry
}
console.log(findAryAllEvenNum(numberes));

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
] */

const people = [
  { name: "John", age: 30 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 35 },
];

function SortedArray(ary,key) {
  if (!Array.isArray(ary)) return `Function 1st paramiter value mast be decleare on array`
  else if (!key) return `Function 2nd paramiter value mast be decleare`
  return ary.sort((a,b)=>a[key]-b[key])
}
console.log(SortedArray(people,'age'));


/* 7. Write a JavaScript function that takes two sorted arrays and merges them
into a single sorted array without using any built-in sorting functions.
(Mark: 5)
Example:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
myfunction(arr1, arr2);
Output: [1, 2, 3, 4, 5, 6, 7, 8] */


/* 8. Write a JavaScript class definition for the Product class with a constructor and
the getTotalPrice() method. Additionally, create an instance of the Product
class and calculate its total price (price multiplied by quantity). (Mark: 5)
Assume the following product data:
Product Name: "Laptop"
Price: 1000
Quantity: 3 */

