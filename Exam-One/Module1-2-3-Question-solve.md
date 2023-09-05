<h3 align="center">Industrial Training First Exam Question Solve HashtechIt:)</h3>

----


1. Output of the Code:
a. `false && 'true'` evaluates to `false` because `&&` returns the second operand if the first one is falsy.
```javascript
console.log(false && 'true'); // Output: false
```

b. `let a = 5; ++a + a--` first increments `a` by 1 and then adds the original value of `a` to it. So, `6 + 5` equals `11`, but `a` will become `4` after this operation.
```javascript
let a = 5;
console.log(++a + a--); // Output: 11
console.log(a); // Output: 4
```

c. `(true || 'true') && 'true'` first evaluates `true || 'true'`, which results in `true`, and then `true && 'true'` evaluates to `'true'`.
```javascript
console.log((true || 'true') && 'true'); // Output: 'true'
```

d. `null ?? 'default'` uses the nullish coalescing operator (`??`), which returns the right operand if the left operand is `null` or `undefined`. Since `null` is a falsy value, it evaluates to `'default'`.
```javascript
console.log(null ?? 'default'); // Output: 'default'
```

e. `5 + '2'` performs type coercion, resulting in a string concatenation, so it becomes `'52'`. `5 - '2'` also performs type coercion and evaluates to `3`.
```javascript
console.log(5 + '2'); // Output: '52'
console.log(5 - '2'); // Output: 3
```

f. `true && false || true` follows operator precedence and evaluates to `true`. It first evaluates `true && false`, which is `false`, and then `false || true`, which is `true`.
```javascript
console.log(true && false || true); // Output: true
```

2. Event Bubbling in JavaScript:
Event bubbling is a phenomenon in the DOM where events triggered on an inner, nested element propagate or "bubble up" through the hierarchy of parent elements until they reach the root of the document. This means that if you have an event listener on a parent element, it can receive and handle events triggered on its child elements.

To prevent event bubbling, you can use the `stopPropagation()` method within the event handler for the inner element. For example:

```javascript
document.getElementById('innerElement').addEventListener('click', function(event) {
  event.stopPropagation(); // Prevent the event from bubbling up
  // Your event handling code here
});
```

3. Difference between `indexOf()`, `lastIndexOf()`, and `includes()`:
   - `indexOf(substring)` returns the index of the first occurrence of the `substring` within the string. If not found, it returns -1.
   - `lastIndexOf(substring)` returns the index of the last occurrence of the `substring` within the string. If not found, it returns -1.
   - `includes(substring)` checks if the `substring` is present in the string and returns a boolean (`true` if found, `false` otherwise).

```javascript
const text = "Hello, world! Hello, universe!";

console.log(text.indexOf("Hello")); // Output: 0
console.log(text.lastIndexOf("Hello")); // Output: 13
console.log(text.includes("universe")); // Output: true
```

4. Purpose of `Math.round()`, `Math.floor()`, and `Math.ceil()`:
   - `Math.round()` rounds a number to the nearest integer.
   - `Math.floor()` rounds a number down to the nearest integer (always towards negative infinity).
   - `Math.ceil()` rounds a number up to the nearest integer (always towards positive infinity).

Examples:

```javascript
console.log(Math.round(4.5)); // Output: 5
console.log(Math.floor(4.5)); // Output: 4
console.log(Math.ceil(4.5)); // Output: 5
```

5. Answers to Additional Questions:
a. To create an empty array in JavaScript, you can use either of the following methods:

```javascript
const emptyArray1 = [];
const emptyArray2 = new Array();
```

b. The `map()` method and the `forEach()` method both iterate over the elements of an array, but they differ in their purposes:
   - `map()` returns a new array with the results of applying a provided function to each element in the original array. It creates a new array and doesn't modify the original one.
   - `forEach()` iterates over the array elements and executes a provided function for each element but doesn't return a new array. It is primarily used for side effects.

```javascript
const numbers = [1, 2, 3];
const squared = numbers.map(x => x * x); // Returns [1, 4, 9]

numbers.forEach(x => console.log(x)); // Logs each number
```

c. You cannot change the length of an array declared with `const`, but you can modify its contents. For example:

```javascript
const myArray = [1, 2, 3];
myArray.push(4); // Modifies the content of the array
myArray.length = 2; // Cannot change the length of a const array

```

---

6. Function to Check if All Elements Are Positive:

```javascript
function areAllPositive(arr) {
  return arr.every(element => element > 0);
}

console.log(areAllPositive([1, 2, 3, 4, 5])); // Output: true
console.log(areAllPositive([1, -2, 3, 4, 5])); // Output: false
```

7. Function to Remove Duplicates from an Array:
```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
```

8. Function to Capitalize Each Word in a String:
```javascript
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeWords("We are learning JavaScript")); // Output: "We Are Learning JavaScript"
```

9. Function to Count Word Frequencies in a String:
```javascript
function countWordFrequencies(str) {
  const words = str.split(' ');
  const wordCount = {};

  for (const word of words) {
    if (wordCount[word]) {
      wordCount[word]++;
    } else {
      wordCount[word] = 1;
    }
  }

  return wordCount;
}

console.log(countWordFrequencies("apple banana apple orange banana apple"));
// Output: { "apple": 3, "banana": 2, "orange": 1 }
```

10. Function to Count Vowels in a String:
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels('I Love JavaScript')); // Output: 6
```