/* All Most Common And Most UseFull Javascript String Method:) */

//! String Length
const text = "Hello, World!";
const length = text.length; // Returns the length of the string (13 in this case).

//! String Slice
const sliced = text.slice(7, 12); // Extracts a portion of the string (from index 7 to 11) - "World".
console.log(sliced); // Output: "World"

//! String Substring
const substring = text.substring(7, 12); // Similar to slice, extracts a substring - "World".
console.log(substring); // Output: "World"

//! String Substr
const substr = text.substr(7, 5); // Extracts a substring starting at index 7 with a length of 5 - "World".
console.log(substr); // Output: "World"

//! String Replace
const replaced = text.replace("World", "JavaScript"); // Replaces the first occurrence of "World" with "JavaScript" - "Hello, JavaScript!".
console.log(replaced); // Output: "Hello, JavaScript!"

//! String ReplaceAll (requires JavaScript ES2021+)
const replacedAll = text.replaceAll("l", "X"); // Replaces all occurrences of "l" with "X" - "HeXXo, WorXd!".
console.log(replacedAll); // Output: "HeXXo, WorXd!"

//! String toUpperCase
const upperCase = text.toUpperCase(); // Converts the string to uppercase - "HELLO, WORLD!".
console.log(upperCase); // Output: "HELLO, WORLD!"

//! String toLowerCase
const lowerCase = text.toLowerCase(); // Converts the string to lowercase - "hello, world!".
console.log(lowerCase); // Output: "hello, world!"

//! String Concatenation
const str1 = "Hello";
const str2 = "World";
const concatenated = str1.concat(", ", str2); // Concatenates two strings with a separator - "Hello, World!".
console.log(concatenated); // Output: "Hello, World!"

//! String Trim
const spacedText = "   Hello, World!   ";
const trimmed = spacedText.trim(); // Removes leading and trailing whitespace - "Hello, World!".
console.log(trimmed); // Output: "Hello, World!"

//! String TrimStart
const trimStart = spacedText.trimStart(); // Removes leading whitespace - "Hello, World!   ".
console.log(trimStart); // Output: "Hello, World!   "

//! String TrimEnd
const trimEnd = spacedText.trimEnd(); // Removes trailing whitespace - "   Hello, World!".
console.log(trimEnd); // Output: "   Hello, World!"

//! String PadStart
const paddedStart = text.padStart(15, " "); // Pads the string from the start with spaces to a length of 15 - "   Hello, World!".
console.log(paddedStart); // Output: "   Hello, World!"

//! String PadEnd
const paddedEnd = text.padEnd(15, "*"); // Pads the string from the end with asterisks to a length of 15 - "Hello, World!***".
console.log(paddedEnd); // Output: "Hello, World!***"

//! String CharAt
const char = text.charAt(7); // Returns the character at index 7 - "W".
console.log(char); // Output: "W"

//! String CharCodeAt
const charCode = text.charCodeAt(7); // Returns the ASCII code of the character at index 7 - 87 (ASCII code for 'W').
console.log(charCode); // Output: 87

//! String Split
const words = text.split(", "); // Splits the string into an array using the specified delimiter - ["Hello", "World!"].
console.log(words); // Output: ["Hello", "World!"]


/*  Javascript All Common Number Method:) */

//! String indexOf()
// Topic: Searches for a specified substring within a string and returns the index of the first occurrence.
const texte = "Hello, World!";
const index = texte.indexOf("World"); // index is 7 (first occurrence of "World").
console.log(index); // Output: 7

//! String lastIndexOf()
// Topic: Searches for the last occurrence of a specified substring within a string and returns its index.
const text2 = "Hello, World, World!";
const lastIndex = text2.lastIndexOf("World"); // lastIndex is 13 (last occurrence of "World").
console.log(lastIndex); // Output: 13

//! String search()
// Topic: Searches for a regular expression pattern within a string and returns the index of the first match.
const text3 = "Hello, World!";
const index2 = text3.search(/W\w+/); // index is 7 (matches "World").
console.log(index2); // Output: 7

//! String match()
// Topic: Searches for a regular expression pattern within a string and returns an array of all matching substrings.
const text4 = "Hello, World!";
const matches = text4.match(/o/g); // matches is ["o", "o"] (matches all "o" characters).
console.log(matches); // Output: [ 'o', 'o' ]

//! String matchAll()
// Topic: Searches for a regular expression pattern within a string and returns an iterator of all matches, including capturing groups.
const text5 = "Hello, World!";
const matches2 = [...text5.matchAll(/o/g)]; // matches is an array of matches.
console.log(matches2); // Output: [ [ 'o', index: 4, input: 'Hello, World!' ], [ 'o', index: 7, input: 'Hello, World!' ] ]

//! String includes()
// Topic: Checks if a specified substring exists within the string and returns true or false.
const text6 = "Hello, World!";
const hasWorld = text6.includes("World"); // hasWorld is true (string contains "World").
console.log(hasWorld); // Output: true

//! String startsWith()
// Topic: Checks if a string starts with a specified prefix and returns true or false.
const text7 = "Hello, World!";
const startsWithHello = text7.startsWith("Hello"); // startsWithHello is true (starts with "Hello").
console.log(startsWithHello); // Output: true

//! String endsWith()
// Topic: Checks if a string ends with a specified suffix and returns true or false.
const text8 = "Hello, World!";
const endsWithWorld = text8.endsWith("World!"); // endsWithWorld is true (ends with "World!").
console.log(endsWithWorld); // Output: true

/* All Most Common And Most UseFull Javascript String Method:) */
//! Number toString()
// Topic: Converts a number to its string representation.
const num = 42;
const numAsString = num.toString(); // numAsString is "42"
console.log(numAsString); // Output: "42"

//! Number toExponential()
// Topic: Returns a string representation of a number in exponential notation.
const num2 = 12345.6789;
const exponential = num2.toExponential(2); // exponential is "1.23e+4"
console.log(exponential); // Output: "1.23e+4"

//! Number toFixed()
// Topic: Returns a string representation of a number with a fixed number of decimal places.
const num3 = 3.14159;
const fixedNum = num3.toFixed(2); // fixedNum is "3.14"
console.log(fixedNum); // Output: "3.14"

//! Number toPrecision()
// Topic: Returns a string representation of a number with a specified total length.
const num4 = 123.45678;
const precisionNum = num4.toPrecision(4); // precisionNum is "123.5"
console.log(precisionNum); // Output: "123.5"

//! Number valueOf()
// Topic: Returns the primitive value of a number (rarely used explicitly).
const num5 = new Number(42); // Creating a Number object
const primitiveValue = num5.valueOf(); // primitiveValue is 42
console.log(primitiveValue); // Output: 42


/* All Most Common And Most UseFull Javascript Array Method:) */


//! Array length
// Topic: Returns the number of elements in the array.
const fruits = ["apple", "banana", "cherry"];
const lengths = fruits.length; // length is 3
console.log(lengths); // Output: 3

//! Array toString()
// Topic: Converts an array to a comma-separated string.
const fruitsToString = ["apple", "banana", "cherry"];
const fruitsString = fruitsToString.toString(); // fruitsString is "apple,banana,cherry"
console.log(fruitsString); // Output: "apple,banana,cherry"

//! Array pop()
// Topic: Removes and returns the last element from an array.
const fruitsPop = ["apple", "banana", "cherry"];
const removedFruitPop = fruitsPop.pop(); // removedFruit is "cherry", fruits is now ["apple", "banana"]
console.log(removedFruitPop); // Output: "cherry"

//! Array push()
// Topic: Adds one or more elements to the end of an array.
const fruitsPush = ["apple", "banana"];
const newLengthPush = fruitsPush.push("cherry"); // newLength is 3, fruits is now ["apple", "banana", "cherry"]
console.log(newLengthPush); // Output: 3
console.log(fruitsPush); // Output: ["apple", "banana", "cherry"]

//! Array shift()
// Topic: Removes and returns the first element from an array.
const fruitsShift = ["apple", "banana", "cherry"];
const removedFruitShift = fruitsShift.shift(); // removedFruit is "apple", fruits is now ["banana", "cherry"]
console.log(removedFruitShift); // Output: "apple"

//! Array unshift()
// Topic: Adds one or more elements to the beginning of an array.
const fruitsUnshift = ["banana", "cherry"];
const newLengthUnshift = fruitsUnshift.unshift("apple"); // newLength is 3, fruits is now ["apple", "banana", "cherry"]
console.log(newLengthUnshift); // Output: 3
console.log(fruitsUnshift); // Output: ["apple", "banana", "cherry"]

//! Array join()
// Topic: Joins all elements of an array into a string using a specified separator.
const fruitsJoin = ["apple", "banana", "cherry"];
const joinedStringJoin = fruitsJoin.join(", "); // joinedString is "apple, banana, cherry"
console.log(joinedStringJoin); // Output: "apple, banana, cherry"

//! Array delete() - Note: There is no "delete" method for arrays in JavaScript.

//! Array concat()
// Topic: Combines two or more arrays into a new array.
const fruits1Concat = ["apple", "banana"];
const fruits2Concat = ["cherry", "date"];
const mergedFruitsConcat = fruits1Concat.concat(fruits2Concat); // mergedFruits is ["apple", "banana", "cherry", "date"]
console.log(mergedFruitsConcat); // Output: ["apple", "banana", "cherry", "date"]

//! Array flat()
// Topic: Creates a new array with sub-array elements concatenated to a specified depth.
const nestedArrayFlat = [1, 2, [3, 4, [5, 6]]];
const flatArrayFlat = nestedArrayFlat.flat(2); // flatArray is [1, 2, 3, 4, 5, 6]
console.log(flatArrayFlat); // Output: [1, 2, 3, 4, 5, 6]

//! Array splice()
// Topic: Modifies the contents of an array by removing, replacing, or adding elements.
const fruitsSplice = ["apple", "banana", "cherry"];
fruitsSplice.splice(1, 1, "grape"); // Removes "banana" and adds "grape", fruits is now ["apple", "grape", "cherry"]
console.log(fruitsSplice); // Output: ["apple", "grape", "cherry"]

//! Array slice()
// Topic: Returns a shallow copy of a portion of an array into a new array.
const fruitsSlice = ["apple", "banana", "cherry", "date"];
const slicedFruitsSlice = fruitsSlice.slice(1, 3); // slicedFruits is ["banana", "cherry"]
console.log(slicedFruitsSlice); // Output: ["banana", "cherry"]


//! Array Sort
// Topic: Sorting the elements of an array.
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort(); // Sorts the array in ascending order.
console.log(numbers); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

//! Array Sort (Descending)
// Topic: Sorting the elements of an array in descending order.
const numbersDescending = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbersDescending.sort((a, b) => b - a); // Sorts the array in descending order.
console.log(numbersDescending); // Output: [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]


//! Array Iteration (forEach)
// Topic: Iterating through elements of an array using forEach.
const colors = ["red", "blue", "green"];
colors.forEach((color) => {
  console.log(color); // Output: "red", "blue", "green" (each color is logged one by one)
});

//! Array Iteration (map)
// Topic: Creating a new array by mapping each element of an existing array.
const numberss = [1, 2, 3, 4, 5];
const doubledNumbers = numberss.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

//! Array Iteration (filter)
// Topic: Creating a new array by filtering elements of an existing array based on a condition.
const ages = [25, 16, 30, 18, 22, 19];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // Output: [25, 30, 18, 22, 19]

//! Array Const
// Topic: Declaring an array as a constant (immutable reference).
const fruitss = ["apple", "banana", "cherry"];
fruitss[0] = "orange"; // Modifying elements is allowed.
console.log(fruitss); // Output: ["orange", "banana", "cherry"]

// Attempting to assign a new array to the constant will result in an error:
// fruitss = ["grape", "kiwi"]; // Error: Assignment to constant variable.



//! JavaScript Dates
// Topic: Creating and working with dates in JavaScript.

// Creating a new Date object with the current date and time.
const currentDate = new Date();
console.log(currentDate); // Output: Current date and time in your local timezone.

// Creating a Date object with a specific date and time (Year, Month, Day, Hours, Minutes, Seconds).
const customDate = new Date(2023, 0, 15, 12, 30, 0); // January 15, 2023, 12:30:00 PM
console.log(customDate);

// Creating a Date object from a date string.
const dateString = "2023-09-15T15:30:00Z";
const dateFromString = new Date(dateString);
console.log(dateFromString);

//! JavaScript Date Formats
// Topic: Formatting dates in JavaScript.

// Creating a new Date object.
const date = new Date(2023, 0, 15);

// Formatting the date as a string with different formats.
const isoString = date.toISOString(); // ISO 8601 format
console.log(isoString); // Output: "2023-01-15T00:00:00.000Z"

const dateStrings = date.toDateString(); // "Day Month Date Year" format
console.log(dateStrings); // Output: "Sun Jan 15 2023"

const timeString = date.toTimeString(); // "HH:MM:SS GMT" format
console.log(timeString); // Output: "00:00:00 GMT+0000 (Coordinated Universal Time)"

const localeDateString = date.toLocaleDateString(); // Local date format
console.log(localeDateString); // Output: Varies by locale

const localeTimeString = date.toLocaleTimeString(); // Local time format
console.log(localeTimeString); // Output: Varies by locale

//! JavaScript Date Get Methods
// Topic: Getting various components of a Date object.

const year = date.getFullYear(); // Get the year (e.g., 2023)
console.log(year); // Output: 2023

const month = date.getMonth(); // Get the month (0-11; 0 is January)
console.log(month); // Output: 0 (January, zero-based index)

const day = date.getDate(); // Get the day of the month (1-31)
console.log(day); // Output: 15

const hours = date.getHours(); // Get the hours (0-23)
console.log(hours); // Output: 0

const minutes = date.getMinutes(); // Get the minutes (0-59)
console.log(minutes); // Output: 0

const seconds = date.getSeconds(); // Get the seconds (0-59)
console.log(seconds); // Output: 0

const milliseconds = date.getMilliseconds(); // Get the milliseconds (0-999)
console.log(milliseconds); // Output: 0

const dayOfWeek = date.getDay(); // Get the day of the week (0-6; 0 is Sunday)
console.log(dayOfWeek); // Output: 0 (Sunday, zero-based index)

//! JavaScript Date Set Methods
// Topic: Setting various components of a Date object.

date.setFullYear(2024); // Set the year to 2024
console.log(date); // Output: Sat Aug 25 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

date.setMonth(6); // Set the month to July (0-11; 6 is July)
console.log(date); // Output: Mon Jul 25 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

date.setDate(25); // Set the day of the month to 25
console.log(date); // Output: Thu Jul 25 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

date.setHours(15); // Set the hours to 15 (3 PM)
console.log(date); // Output: Thu Jul 25 2024 15:00:00 GMT+0000 (Coordinated Universal Time)

date.setMinutes(45); // Set the minutes to 45
console.log(date); // Output: Thu Jul 25 2024 15:45:00 GMT+0000 (Coordinated Universal Time)

date.setSeconds(20); // Set the seconds to 20
console.log(date); // Output: Thu Jul 25 2024 15:45:20 GMT+0000 (Coordinated Universal Time)

date.setMilliseconds(500); // Set the milliseconds to 500
console.log(date); // Output: Thu Jul 25 2024 15:45:20 GMT+0000 (Coordinated Universal Time)
