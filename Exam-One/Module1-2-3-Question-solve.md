<h3 align="center">Industrial Training First Exam Question Solve HashtechIt:)</h3>

----

<!-- **Question 1:**

a. What is the output of false && 'true'?
```javascript
console.log(false && 'true'); // Output: false
```

b. If let a = 5, what is the value of ++a + a--?
```javascript
let a = 5;
console.log(++a + a--); // Output: 11 (6 + 5)
```

c. What is the output of (true || 'true') && 'true'?
```javascript
console.log((true || 'true') && 'true'); // Output: "true"
```

d. What does null ?? 'default' evaluate to?
```javascript
console.log(null ?? 'default'); // Output: "default"
```

e. What is the result of 5 + '2' and 5 - '2'?
```javascript
console.log(5 + '2'); // Output: "52" (concatenation)
console.log(5 - '2'); // Output: 3 (subtraction)
```

f. What does the expression true && false || true evaluate to?
```javascript
console.log(true && false || true); // Output: true
```

**Question 2:**

Event bubbling in JavaScript refers to the propagation of events through the DOM tree hierarchy. When an event occurs on a specific element, it can also trigger the same event on its parent elements, propagating upwards through the hierarchy. This can affect how events are handled because parent elements can catch and react to events triggered on their descendants.

To prevent event bubbling, you can use the `stopPropagation()` method on the event object. This stops the event from further propagation through the DOM tree.

**Question 3:**

The `indexOf()`, `lastIndexOf()`, and `includes()` methods are used to search for substrings within a string.

- `indexOf(substring)` returns the index of the first occurrence of the `substring` in the string, or -1 if it's not found.
- `lastIndexOf(substring)` returns the index of the last occurrence of the `substring` in the string, or -1 if it's not found.
- `includes(substring)` returns a boolean indicating whether the `substring` is found in the string.

**Question 4:**

- `Math.round(x)` rounds the number `x` to the nearest integer. It uses "round half up" logic.
- `Math.floor(x)` rounds the number `x` down to the nearest integer.
- `Math.ceil(x)` rounds the number `x` up to the nearest integer.

Examples:
```javascript
console.log(Math.round(2.4)); // Output: 2
console.log(Math.floor(2.7)); // Output: 2
console.log(Math.ceil(2.3));  // Output: 3
```

**Question 5:**

a. How can you create an empty array in JavaScript?
```javascript
const emptyArray = [];
```

b. How does the `map()` method differ from the `forEach()` method?
The `map()` method creates a new array by applying a function to each element of the original array, while the `forEach()` method simply iterates over the array without creating a new one.

c. Can you change the length of an array declared with `const`?
Yes, you can change the contents of an array declared with `const`, but you cannot reassign it to a completely new array. So, you can modify the array's elements and length, but you cannot do `const array = ...` again.

---

**Question 6:**

Here's a function to check if all elements of an array are positive:

#### Explained

This JavaScript code defines a function called `areAllPositive` that takes an array (`arr`) as its parameter and checks if all the numbers in the array are positive. Here's a step-by-step explanation of how the code works:

1. **Function Declaration**: The code starts by declaring a function named `areAllPositive` that takes one parameter, `arr`, which is expected to be an array.

2. **For Loop**: Inside the function, there's a `for...of` loop. This loop is used to iterate through each element (`num`) in the input array (`arr`).

3. **Conditional Check**: Inside the loop, there is an `if` statement that checks if the current element (`num`) is less than or equal to zero (i.e., if it's not positive). If the current element is not positive, the `if` block is executed.

4. **Return `false`**: If the condition inside the `if` statement is true (i.e., if `num` is less than or equal to zero), the function immediately returns `false`. This means that if it finds any non-positive number in the array, the function will return `false` and stop further iteration.

5. **Return `true` Outside the Loop**: If the loop completes without encountering a non-positive number (i.e., all numbers in the array are positive), the function will reach the `return true` statement outside the loop.

6. **Function Call**: The code then calls the `areAllPositive` function twice with different arrays as arguments and logs the results to the console.

Now, let's see how it works with the example calls:

- `console.log(areAllPositive([1, 2, 3, 4, 5]));` is the first call. Since all numbers in the array `[1, 2, 3, 4, 5]` are positive, the function returns `true`, and this result is logged to the console.

- `console.log(areAllPositive([1, -2, 3, 4, 5]));` is the second call. In this case, there is a negative number (-2) in the array `[1, -2, 3, 4, 5]`. Therefore, the function immediately returns `false` when it encounters -2, and this result is logged to the console. The function doesn't continue checking the rest of the elements after it finds the first non-positive number.

```javascript
function areAllPositive(arr) {
  for (const num of arr) {
    if (num <= 0) {
      return false;
    }
  }
  return true;
}

console.log(areAllPositive([1, 2, 3, 4, 5]));   // Output: true
console.log(areAllPositive([1, -2, 3, 4, 5]));  // Output: false
```

---

**Question 7:**

Here's a JavaScript function to remove duplicates from an array:

#### Explained

This JavaScript code defines a function called `removeDuplicates` that takes an array (`arr`) as input and returns a new array containing the unique elements from the input array. Here's a step-by-step explanation of how the code works:

1. **Function Declaration**: The code starts by declaring a function named `removeDuplicates` that takes one parameter, `arr`, which is expected to be an array.

2. **Set to Remove Duplicates**: Inside the function, it uses the `Set` data structure to remove duplicates from the input array. A `Set` is a built-in JavaScript data structure that stores unique values, so any duplicate elements in the input array will be automatically eliminated.

3. **Spread Operator (`[...new Set(arr)]`)**: To convert the `Set` back into an array, the spread operator (`[...]`) is used. This operator spreads the elements of the `Set` into a new array.

4. **Return**: The function returns this new array containing unique elements.

5. **Array with Duplicates**: After defining the `removeDuplicates` function, the code creates an input array named `inputArray` that contains duplicate elements `[1, 2, 2, 3, 4, 4, 5]`.

6. **Function Call**: The `removeDuplicates` function is called with `inputArray` as the argument, and the result is assigned to `resultArray`. When this function is called, it processes `inputArray` and returns a new array containing only the unique elements.

7. **Console Output**: Finally, the code logs the `resultArray` to the console. In this case, `resultArray` will contain `[1, 2, 3, 4, 5]`, which are the unique elements from the `inputArray`.

So, the code effectively removes duplicate elements from an array by converting it into a `Set` and then back into an array using the spread operator.

```javascript
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const inputArray = [1, 2, 2, 3, 4, 4, 5];
const resultArray = removeDuplicates(inputArray);
console.log(resultArray); // Output: [1, 2, 3, 4, 5]
```
---

**Question 8:**

Here's a JavaScript function to capitalize each word in a string:

#### Explained

```javascript
function capitalizeWords(str) {
  return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const inputString = "We are learning JavaScript";
const resultString = capitalizeWords(inputString);
console.log(resultString); // Output: "We Are Learning JavaScript"
```

**Question 9:**

Here's a function that counts the occurrences of each unique word in a string:

```javascript
function countWordOccurrences(str) {
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

const inputString = "apple banana apple orange banana apple";
const wordOccurrences = countWordOccurrences(inputString);
console.log(wordOccurrences);
// Output:
// {
//   "apple": 3,
//   "banana": 2,
//   "orange": 1
// }
```

**Question 10:**

Here's a function that counts the number of vowels in a given string:

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

const inputString = 'I Love JavaScript';
const vowelCount = countVowels(inputString);
console.log(vowelCount); // Output: 6
``` -->

## Theory solving questions

### Q1.

**Q:** What is the output of `false && 'true'`?

**Q:** If `let a = 5`, what is the value of `++a + a--`?

**Q:** What is the output of `(true || 'true') && 'true'`?

**Q:** What does `null ?? 'default'` evaluate to?

**Q:** What is the result of `5 + '2'` and `5 - '2'`?

**Q:** What does the expression `true && false || true` evaluate to?

**A1.** 1: false 2: 11 3: 'true' 4: 'default' 5: 52 and 3 6: true

### Q2.

**Q:** What is event bubbling in JavaScript? How does it affect the propagation of events in the DOM? How can you prevent event bubbling?

**A2.** Event bubbling is a phenomenon in which an event triggered on a nested element inside the DOM will "bubble up" through its parent elements in the DOM hierarchy. This means that the same event will be triggered on parent elements as well. You can prevent event bubbling using the `stopPropagation()` method of the event object. This stops the event from propagating further up the DOM tree.

### Q3.

**Q:** Explain the difference between the `indexOf()`, `lastIndexOf()`, and `includes()` methods when used to search for substrings within a string.

**A3.** `indexOf()` returns the index of the first occurrence of a substring within a string, while `lastIndexOf()` returns the index of the last occurrence. `includes()` returns a boolean indicating whether a substring exists in a string.

### Q4.

**Q:** Describe the purpose of the `Math.round()`, `Math.floor()`, and `Math.ceil()` methods in JavaScript. Provide examples of their usage.

**A4.**

- `Math.round(x)` rounds a number to the nearest integer, rounding up for values exactly halfway between integers.
- `Math.floor(x)` rounds a number down to the nearest integer.
- `Math.ceil(x)` rounds a number up to the nearest integer.

### Q5.

**Q:** How can you create an empty array in JavaScript?

**Q:** How does the `map()` method differ from the `forEach()` method?

**Q:** Can you change the length of an array declared with `const`?

**A5.**

**A:** You can create an empty array using empty square brackets: `const myArray = [];`.

**A:** While both methods iterate over array elements, `map()` returns a new array with transformed values, while `forEach()` does not return anything.

**A:** Yes, you can change the length of an array declared with `const`, but you cannot reassign it to a new array.

## Problem-solving questions

### Q1:

**Q:** Write a function that takes an array and checks if all elements of that array are positive. (Mark: 5)

**Example:**

Input: [1, 2, 3, 4, 5]

Output: true

Input: [1, -2, 3, 4, 5]

Output: false

**A1:**

```javascript
function areAllPositive(arr) {
    return arr.every(num => num > 0);
}
```

### Q2:

**Q:** Write a JavaScript function to remove duplicates from an array. (Mark: 5)

**Example:**

Input: [1, 2, 2, 3, 4, 4, 5]

Output: [1, 2, 3, 4, 5]

**A2:**

```javascript
function removeDuplicates(arr) {
  const uniqueArray = [];
  arr.forEach((item) => {
    if (uniqueArray.indexOf(item) === -1) uniqueArray.push(item);
  });
  return uniqueArray;
}
```

OR:

```javascript
function removeDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) === index;
  });
}
```

### Q3:

**Q:** Write a JavaScript function that takes a string and returns the string with each word capitalized. (Mark: 5)

**Example:**

Input: "We are learning JavaScript"

Output: "We Are Learning JavaScript"

**A3:**

```javascript
const capitalize = (_word) => {
    const wordsArray = _word.split(' ');
    const wordsArrayCapitals = wordsArray.map((word) => {
        return word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase();
    });
    return wordsArrayCapitals.join(' ');
}
```

### Q4:

**Q:** You are given a string that contains words separated by spaces. Write a function that takes this string as input and returns an object where the keys are the unique words in the string, and the values are the counts of how many times each word appears. (Mark: 5)

**Example:**

Input: "apple banana apple orange banana apple"

Output:
{
  "apple": 3,
  "banana": 2,
  "orange": 1
}

**A4:**

```javascript
function wordCounts(string) {
  const obj = {};
  string.split(" ").forEach((word) => {
    if (obj[word]) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  });
  return obj;
}
```

### Q5:

**Q:** Write a function that counts the number of vowels in a given string. (Mark: 5)

**Example:**

Input: 'I Love JavaScript'

Output: 6

**A5:**

```javascript
function countVowels(sentence) {
  const vowels = ["a", "e", "i", "o", "u"];
  const letters = sentence.toLowerCase().split("");
  let count = 0;
  letters.forEach((value) => {
    if (vowels.includes(value)) count++;
  });
  return count;
}
```

#### [Orginal Doc Ans:)](https://doc.clickup.com/9002196645/d/h/8c957n5-85/344f2cea52799c6)
