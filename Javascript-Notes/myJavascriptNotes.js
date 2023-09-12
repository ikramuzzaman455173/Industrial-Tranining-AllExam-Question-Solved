/* All Most Common And Most UseFull Javascript Data typeof() Method Find:) */
// Check the data type of a string
console.log(typeof 'Hello Javascript'); // Output: 'string'

// Check the data type of a number
console.log(typeof 20); // Output: 'number'

// Check the data type of a boolean
console.log(typeof true); // Output: 'boolean'

// Check the data type of an empty object
console.log(typeof {}); // Output: 'object'

// Check the data type of an empty array (also an object)
console.log(typeof []); // Output: 'object'

// Check the data type of null (typeof null returns 'object' due to a historical quirk)
console.log(typeof null); // Output: 'object'

// Check the data type of undefined (represents the absence of a value)
console.log(typeof undefined); // Output: 'undefined'

// Check the data type of NaN (typeof NaN returns 'number' due to a quirk)
console.log(typeof NaN); // Output: 'number'

// Check the data type of the isNaN function
console.log(typeof isNaN); // Output: 'function'

// Check the data type of a function
function exampleFunction() {}
console.log(typeof exampleFunction); // Output: 'function'

// Check the data type of an arrow function
const arrowFunction = () => {};
console.log(typeof arrowFunction); // Output: 'function'

// Check the data type of a date object
const currentDates = new Date();
console.log(typeof currentDates); // Output: 'object'

// Check the data type of a regular expression
const regexPattern = /[a-z]/;
console.log(typeof regexPattern); // Output: 'object'

// Check the data type of an error object
const errorObject = new Error('This is an error.');
console.log(typeof errorObject); // Output: 'object'

// Check the data type of a custom object
const customObject = { name: 'John', age: 30 };
console.log(typeof customObject); // Output: 'object'

// Check the data type of a symbol
const mySymbol = Symbol('description');
console.log(typeof mySymbol); // Output: 'symbol'

// Check the data type of a BigInt
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue); // Output: 'bigint'

// Check the data type of a Map
const myMap = new Map();
console.log(typeof myMap); // Output: 'object'

// Check the data type of a Set
const mySet = new Set();
console.log(typeof mySet); // Output: 'object'

/* Some Data Types Related Most Common & Usefull Examples:) */

// 10 + '20'
// Topic: Addition with a string converts the number to a string and concatenates them.

const result1 = 10 + '20';
console.log(result1); // Output: "1020"

// 9 - '5'
// Topic: Subtraction with a string converts the string to a number and performs subtraction.

const result2 = 9 - '5';
console.log(result2); // Output: 4

// "Java" + "script"
// Topic: The + operator with two strings performs string concatenation.

const result3 = "Java" + "script";
console.log(result3); // Output: "Javascript"

// "" + ""
// Topic: Concatenating two empty strings results in an empty string.

const result4 = "" + "";
console.log(result4); // Output: ""

// "" + 0
// Topic: Concatenating an empty string with a number converts the number to a string.

const result5 = "" + 0;
console.log(result5); // Output: "0"

// "vinod" - "thapa"
// Topic: The - operator is not defined for strings, so this operation results in NaN (Not-a-Number).

const result6 = "vinod" - "thapa";
console.log(result6); // Output: NaN

// true + true
// Topic: true is equivalent to 1, so adding two true values results in 2.

const result7 = true + true;
console.log(result7); // Output: 2

// true + false
// Topic: true is equivalent to 1, and false is equivalent to 0, so adding them results in 1.

const result8 = true + false;
console.log(result8); // Output: 1

// false + true
// Topic: false is equivalent to 0, and true is equivalent to 1, so adding them results in 1.

const result9 = false + true;
console.log(result9); // Output: 1

// false - true
// Topic: Subtraction is performed, so false is equivalent to 0, true is equivalent to 1, and the result is -1.

const result10 = false - true;
console.log(result10); // Output: -1



/* All Most Common And Most UseFull Javascript String Method:) */

//! String length
// Topic: Returns the number of characters in a string.

const text = "Hello, World!";
const length = text.length;
console.log(length); // Output: 13

//! String slice()
// Topic: Extracts a portion of a string and returns it as a new string.

const str1 = "Hello, World!";
const slicedStr = str1.slice(0, 5); // Slices from index 0 to 4
console.log(slicedStr); // Output: "Hello"

//! String substring()
// Topic: Similar to slice but can't accept negative indexes.

const str2 = "Hello, World!";
const subStr = str2.substring(6, 11); // Extracts from index 6 to 10
console.log(subStr); // Output: "World"

//! String substr()
// Topic: Extracts a specified number of characters from a string, starting at a specified index.

const str3 = "Hello, World!";
const subStr2 = str3.substr(7, 5); // Extracts 5 characters starting from index 7
console.log(subStr2); // Output: "World"

//! String replace()
// Topic: Searches a string for a specified value and replaces the first occurrence with another value.

const str4 = "Hello, World!";
const replacedStr = str4.replace("World", "Universe");
console.log(replacedStr); // Output: "Hello, Universe!"

//! String replaceAll()
// Topic: Replaces all occurrences of a specified value in a string.

const str5 = "Hello, World!";
const replacedStr2 = str5.replaceAll("o", "0");
console.log(replacedStr2); // Output: "Hell0, W0rld!"

//! String toUpperCase()
// Topic: Converts a string to uppercase.

const str6 = "Hello, World!";
const upperStr = str6.toUpperCase();
console.log(upperStr); // Output: "HELLO, WORLD!"

//! String toLowerCase()
// Topic: Converts a string to lowercase.

const str7 = "Hello, World!";
const lowerStr = str7.toLowerCase();
console.log(lowerStr); // Output: "hello, world!"

//! String concat()
// Topic: Combines two or more strings and returns a new string.

const str8 = "Hello,";
const str9 = " World!";
const concatStr = str8.concat(str9);
console.log(concatStr); // Output: "Hello, World!"

//! String trim()
// Topic: Removes whitespace from both ends of a string.

const str10 = "   Hello, World!   ";
const trimmedStr = str10.trim();
console.log(trimmedStr); // Output: "Hello, World!"

//! String trimStart()
// Topic: Removes whitespace from the beginning of a string.

const str11 = "   Hello, World!   ";
const trimmedStr2 = str11.trimStart();
console.log(trimmedStr2); // Output: "Hello, World!   "

//! String trimEnd()
// Topic: Removes whitespace from the end of a string.

const str12 = "   Hello, World!   ";
const trimmedStr3 = str12.trimEnd();
console.log(trimmedStr3); // Output: "   Hello, World!"

//! String padStart()
// Topic: Pads the string with another string until it reaches the specified length.

const str13 = "42";
const paddedStr = str13.padStart(5, "0");
console.log(paddedStr); // Output: "00042"

//! String padEnd()
// Topic: Pads the string with another string until it reaches the specified length.

const str14 = "42";
const paddedStr2 = str14.padEnd(5, "0");
console.log(paddedStr2); // Output: "42000"

//! String charAt()
// Topic: Returns the character at a specified index in a string.

const str15 = "Hello, World!";
const char = str15.charAt(7); // Get character at index 7
console.log(char); // Output: "W"

//! String charCodeAt()
// Topic: Returns the Unicode value of the character at a specified index in a string.

const str16 = "Hello, World!";
const charCode = str16.charCodeAt(7); // Get Unicode value of character at index 7
console.log(charCode); // Output: 87

//! String split()
// Topic: Splits a string into an array of substrings based on a specified delimiter.

const str17 = "apple,banana,cherry";
const fruitsArray = str17.split(",");
console.log(fruitsArray); // Output: ["apple", "banana", "cherry"]



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


/*  Javascript All Common Math Method:) */


//! Math.round(x)
// Topic: Returns x rounded to its nearest integer.

const number1 = 3.6;
const roundedNumber = Math.round(number1);
console.log(roundedNumber); // Output: 4

//! Math.ceil(x)
// Topic: Returns x rounded up to its nearest integer.

const number2 = 3.2;
const ceiledNumber = Math.ceil(number2);
console.log(ceiledNumber); // Output: 4

//! Math.floor(x)
// Topic: Returns x rounded down to its nearest integer.

const number3 = 3.8;
const flooredNumber = Math.floor(number3);
console.log(flooredNumber); // Output: 3

//! Math.trunc(x)
// Topic: Returns the integer part of x (new in ES6).

const number4 = 3.9;
const truncatedNumber = Math.trunc(number4);
console.log(truncatedNumber); // Output: 3

