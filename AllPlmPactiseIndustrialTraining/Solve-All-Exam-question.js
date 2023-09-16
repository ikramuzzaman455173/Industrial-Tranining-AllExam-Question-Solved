// # Examp One Problem Solving All Questions:)

/* Q1: Write a function that take an array and checks if all elements of that array are positive. */
{
  function isArrayPositive(ary = []) {
    if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
    return minAry = ary.every(arr => arr > 0)
  }
  function arrayIsPositive(ary) {
    if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
    for (const arr of ary) {
      if (arr < 0) return false
    }
    return true
  }
  const input = [5, 6, 7, 9, 10]
  // console.log(isArrayPositive(input));
  console.log(arrayIsPositive(input));
}

/* Q2: Write a JavaScript function to remove duplicates from an array. */
{
  function findUniqueAry(ary = []) {
    if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
    const uniqueAry = []
    const dubAry = []
    for (const arr of ary) {
      if (!uniqueAry.includes(arr)) uniqueAry.push(arr)
      else dubAry.push(arr)
    }
    const sortUniqueAry = uniqueAry.sort((a, b) => a - b)
    const sortDubary = dubAry.sort((a, b) => a - b)
    return { sortUniqueAry, sortDubary }
  }
  const input = [5, 6, 6, 7, 5, 7, 9, 8]
  console.log(findUniqueAry(input));
}

/* Q3: Write a JavaScript function that takes a string and returns the string with each word capitalized. */
{
  function wordCapitalized(str = '') {
    if (typeof str !== 'string') return `Function paramiter value mast be decleare on string!`
    const splitWord = str.split(' ')
    let capitalizedWords = []
    splitWord.forEach(word => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      capitalizedWords.push(capitalizedWord)
    })
    return capitalizedWords.join(' ')
  }
  const input = 'hElLo tHeRE hOw ARe yOu!'
  console.log(wordCapitalized(input));
}
// for (const word of splitWord) {
//   const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//   capitalizedWords.push(capitalizedWord)
//   // console.log(capitalizedWord);
// }
// const capitalizedWord = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
/* Q4: You are given a string that contains words separated by spaces. Write a function that takes this string as input and returns an object where the keys are the unique words in the string, and the values are the counts of how many times each word appears.
 */
{
  function eachWord(str = '') {
    if (typeof str !== 'string') return `Function paramiter value mast be decleare on string!`
    const myObj = {}
    const splitWord = str.toLowerCase().split(' ')
    for (const obj of splitWord) {
      if (myObj.hasOwnProperty(obj)) myObj[obj]++
      else myObj[obj] = 1
    }
    return myObj
  }
  const input = 'apple mango apple mango orange Apple'
  console.log(eachWord(input));
}

/* Q5: Write a function that counts the number of vowels in a given string. */
function countVowel(str = '') {
  if (typeof str !== 'string') return `Function paramiter value mast be decleare on string!`
  const vowel = ['a', 'e', 'i', 'o', 'u']
  // let count=0
  // for (let i = 0; i < str.length;i++){
  //   if(vowel.includes(str[i])) count++
  // }
  let filterWord = str.split('')
  const count = filterWord.filter(word => vowel.includes(word))
  return `Total Vowel find:${count.length}`
  // return count
}
console.log(countVowel('hello there how are you'));
// # Examp Two Problem Solving All Questions:)


/* 1. Write a JavaScript function that takes an array and returns the minimum
number of this array using a loop. Ignore the built-in method for finding.
(Mark: 5)
Example:
Input: const numbers = ["10", "21", 3, "14", "53", 55, ”36”, 48];
Output: 3 */
{
  function findAryMinVal(ary = []) {
    if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
    let minAry = ary[0]
    for (const arr of ary) {
      if (arr < minAry) minAry = arr
    }
    return `This array minimum value find:${minAry}`
  }
  const input = ["10", "21", '3', "14", "53", 55, 36, 48]
  console.log(findAryMinVal(input));
}
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
{
  function generateRandomPassword(num) {
    if (!Number(num)) return `Function paramiter value mast be decleare on number!`
    let str = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%()^&*`, strLength = str.length, pass = ''
    for (let i = 0; i < num; i++) {
      let char = Math.floor(Math.random() * strLength)
      pass += str.charAt(char)
    }
    return { password: pass, passwordLength: pass.length }
  }
  const input = 8
  console.log(generateRandomPassword(input));
}


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

{
  const productList = [
    { id: 101, title: "Product 1" },
    { id: 102, title: "Product 2" },
    { id: 103, title: "Product 3" },
    { id: 104, title: "Product 4" }
  ];
  const availableProductInInventory = [102, 104];
  function stockStatus(productList, availableProductInInventory) {
    // const inStockProductList = productList.filter(product => availableProductInInventory.includes(product.id))
    // const outOfStockProductList = productList.filter(product => !availableProductInInventory.includes(product.id))
    // return { inStockProductList, outOfStockProductList }
    // let inStockProductList = [], outOfStockProductList = [], pLength = productList.length, aLength = availableProductInInventory.length
    // for (let i = 0; i < pLength; i++){
    //   let product = true
    //   for (let j = 0; j < aLength; j++){
    //     if (productList[i].id === availableProductInInventory[j]) {
    //       inStockProductList.push(productList[i])
    //       product = false
    //       break
    //     }
    //   }
    //   if(product) outOfStockProductList.push(productList[i])
    // }
    let inStockProductList = [], outOfStockProductList = []
    for (const product of productList) {
      if (availableProductInInventory.includes(product.id)) inStockProductList.push(product)
      else outOfStockProductList.push(product)
    }
    return { inStockProductList, outOfStockProductList }
  }
  console.log(stockStatus(productList, availableProductInInventory));
}

/* 4. How do you add or remove properties from an object dynamically two
operations are managed from one function? (Mark: 5) */
function modifyObjProperty(obj, key, value, remove = false) {
  if (remove) {
    if (obj.hasOwnProperty(key)) delete obj[key]
  }
  else obj[key] = value
}
const myObj = { name: 'John Doe', age: 22 }
modifyObjProperty(myObj, 'age', 25)
console.log(myObj);
modifyObjProperty(myObj, 'age', null, true)//delete age property or value
console.log(myObj);

/* 5. Write a JavaScript function that takes an array of numbers and returns a
new array with only the even numbers. (Mark: 5)
Example:
Input: const numbers = [10, 21, 3, 14, 53, 55, 36, 48]
Output: [10, 14, 36, 48] */
function findAryEvenValu(ary = []) {
  if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
  const evenAry = ary.filter(arr => arr % 2 === 0)
  return evenAry
}
console.log(findAryEvenValu([10, 21, 3, 14, 53, 55, 36, 48]));
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

  { name: "Alice", age: 35 },

  { name: "Bob", age: 35 },

];

// const sortByKey = (arr, key) => {

//   return arr.sort( (a, b) => {

//       const valueA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];

//       const valueB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

//       if(valueA > valueB) {

//           return 1;

//       }

//       if(valueA < valueB) {

//           return -1;

//       }

//       return 0

//   })

// }

// const result = sortByKey(people, 'name');

// console.log(result)

// const sortAry = (ary = [],key)=>{
//   if (!Array.isArray(ary)) return `Function paramiter value mast be decleare on array!`
//   const sortAry = ary.sort((a, b) => a[key] - b[key])
//   return sortAry
// }
// const result = sortAry(people,'name')
// console.log(result);

const sortAry = (ary = [], key) => {
  if (!Array.isArray(ary)) return 'Function parameter must be an array!';

  if (typeof ary[0][key] === 'number') {
    // Sort numbers
    return ary.slice().sort((a, b) => a[key] - b[key]);
  } else if (typeof ary[0][key] === 'string') {
    // Sort strings
    return ary.slice().sort((b,a) => a[key].localeCompare(b[key]));
  } else {
    return 'Invalid data type for sorting';
  }

};


const resultName = sortAry(people,'name');
const resultAge = sortAry(people, 'age');

console.log('Sorted by name:', resultName);
console.log('Sorted by age:', resultAge);

// const str = 'hello there'
// const subStr = str.slice()
// console.log(subStr);+
/* 7. Write a JavaScript function that takes two sorted arrays and merges them
into a single sorted array without using any built-in sorting functions.
(Mark: 5)
Example:
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
myfunction(arr1, arr2);
Output: [8,7,5,4,3,2,1]
Output: [1, 2, 3, 4, 5, 6, 7, 8] */



/* 8. Write a JavaScript class definition for the Product class with a constructor and
the getTotalPrice() method. Additionally, create an instance of the Product
class and calculate its total price (price multiplied by quantity). (Mark: 5)
Assume the following product data:
Product Name: "Laptop"
Price: 1000
Quantity: 3 */

