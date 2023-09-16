/* Q1: Write a function that take an array and checks if all elements of that array are positive. */

function checkArrayValuePositive(arr) {
	// for(let i=0;i<arr.length;i++){
	//   if(arr[i]<=0) return false
	// }
	// return true
	// return arr.every(num=> num > 0)
	let positiveArray = [],
		negativeArray = [];
	arr.map(item => {
		// if (item <= 0) negativeArray.push(item);
		// else positiveArray.push(item);
		item <= 0 ? negativeArray.push(item) : positiveArray.push(item);
	});
	console.log(positiveArray, negativeArray);
}
// checkArrayValuePositive([5, 4, -3, 3, 4, 2]);

/* Q2: Write a JavaScript function to remove duplicates from an array. */

function removeArrayDublicateValue(arr) {
	let arrayUniqueValue = [];
	let arrayDublicateValue = [];
	let arrayObj = {};
	// for(let i=0;i<arr.length;i++){
	//   if(arrayUniqueValue.indexOf(arr[i])===-1) arrayUniqueValue.push(arr[i])
	//   else if(!arrayDublicateValue.includes(arr[i])) arrayDublicateValue.push(arr[i])
	//   if(arrayObj[arr[i]]) arrayObj[arr[i]]++
	//   else arrayObj[arr[i]]=1
	// }
	for (let item of arr) {
		// arrayUniqueValue.includes(item)===false?arrayUniqueValue.push(item):arrayDublicateValue.push(item)
		arrayUniqueValue.indexOf(item) === -1? arrayUniqueValue.push(item):null
	!arrayDublicateValue.includes(item)? arrayDublicateValue.push(item): null
		arrayObj[item] ? arrayObj[item]++ : (arrayObj[item] = 1);
	}
	console.log(
		'This Array Unique Value:',
		arrayUniqueValue,
		'\n',
		'This array dublicate value:',
		arrayDublicateValue,
		arrayObj
	);
}
removeArrayDublicateValue([3, 4, 5, 4, 5, 3, 2, 2, 2, 2, 3, 1, 4]);

/* Q3: Write a JavaScript function that takes a string and returns the string with each word capitalized. */
function wordCapitalized(str){
	return console.log(str.toString().toLowerCase().split(' ').map(word=>word.slice(0,1).toUpperCase()+word.slice(1)).join(' '))
}
// wordCapitalized(["We are learning JavaScript", " hello tHere how are you"])

/* Q4: You are given a string that contains words separated by spaces. Write a function that takes this string as input and returns an object where the keys are the unique words in the string, and the values are the counts of how many times each word appears.
 */
function wordCount(str) {
	let myObj = {}
	let myStr=str.toString().toLowerCase().split(' ')
	for (let word of myStr) myObj[word] ? myObj[word]++ : myObj[word] = 1
	// myStr.map(item=>myObj[item]?myObj[item]++:myObj[item]=1)
	console.log(myObj);
}
// wordCount("apple Apple banana apple orange banana apple")

/* Q5: Write a function that counts the number of vowels in a given string. */
function countVowel(str) {
	let myStr = str.toString().toLowerCase()
	let allVowel='aeiou'
	let count=0
	for (let word of myStr) {
		// if(word==='a'||word==='e'||word==='i'||word==='o'||word==='u') count++
		if(allVowel.includes(word)) count++
	}
	console.log(`This Value '${str}' total vowel find:${count}`)
}
// countVowel('I Love JavaScript Hello there')
