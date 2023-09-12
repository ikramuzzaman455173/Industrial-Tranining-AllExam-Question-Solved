/* 1. Write a JavaScript function that takes an array and returns the minimum
number of this array using a loop. Ignore the built-in method for finding.
(Mark: 5)
Example:
Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];
Output: 3 */
const numbers = ["10", "21", 3, "14", "53", 55, "36", 48];
function findAryMinVal(ary) {
  let minAry = ary[0]
  for (let arr of ary) {
    if (arr < minAry) minAry = arr
  }
  return `This Array:[${ary}] Minimum Value Is:${minAry}`
}
console.log(findAryMinVal(numbers));

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
  if (num <= 0) return 'Value mast be grater then 0'
  let str = `"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%
  ^&*()`, pass = "", strLength = str.length
  for (let i = 0; i < num; i++) {
    let char = Math.floor(Math.random() * strLength)
    pass += str.charAt(char)
  }
  return { password: pass, passwordLength: pass.length }
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
  { id: 101, title: "Product 1" },
  { id: 102, title: "Product 2" },
  { id: 103, title: "Product 3" },
  { id: 104, title: "Product 4" }
];
const availableProductInInventory = [102, 104];
function checkStockStatus(productList, availableProductInInventory) {
  let inStockProductList = productList.filter(product => availableProductInInventory.includes(product.id))
  let outOfStockProductList = productList.filter(product => !availableProductInInventory.includes(product.id))
  return { inStockProductList, outOfStockProductList }
}
console.log(checkStockStatus(productList, availableProductInInventory));


/* 4. How do you add or remove properties from an object dynamically two
operations are managed from one function? (Mark: 5) */
function modifyObjectProperty(obj, key, value, remove = false) {
  if (remove) {
    if (obj.hasOwnProperty(key)) delete obj[key]
  } else obj[key] = value
}
let myObj = { name: "John Doe", age: 20 }
modifyObjectProperty(myObj,'age',25)
console.log(myObj);

/* 5. Write a JavaScript function that takes an array of numbers and returns a
new array with only the even numbers. (Mark: 5)
Example:
Input: const numbers = [10, 21, 3, 14, 53, 55, 36, 48]
Output: [10, 14, 36, 48] */
const numberes = [10, 21, 3, 14, 53, 55, 36, 48]
function findArrayEvenNum(ary) {
  if (!Array.isArray(ary)) return 'Value Only Defined Arrays'
  let evenNum = ary.filter(num => num > 0 && num % 2 == 0)
  return evenNum
}
console.log(findArrayEvenNum(numberes));


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
  { name: "Doe", age: 19 }
];
function sortByKeyAscending(ary, key) {
  return ary.sort((a,b)=>a[key]-b[key])
}
console.log(sortByKeyAscending(people,"age"));