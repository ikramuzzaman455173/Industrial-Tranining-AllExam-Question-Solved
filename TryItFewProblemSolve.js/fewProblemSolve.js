// 1.লুডু খেলায় আমরা কিভাবে ১ থেকে ৬সংখ্যা রেন্ডমলি  প্রিন্ট করতে পারি ?
console.log('1.লুডু খেলায় আমরা কিভাবে ১ থেকে ৬সংখ্যা রেন্ডমলি  প্রিন্ট করতে পারি ?')
function chackRandom (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(`Your OutPut Is:${chackRandom(1,6)}`)
console.log()
// 2.কি ভাবে আমরা আমাদের   ক্লাসরুমক্লাসরুম এর সকলের নাম Alphabetically সাজাতে পারি ?
console.log(`2.কি ভাবে আমরা আমাদের   ক্লাসরুমক্লাসরুম এর সকলের নাম Alphabetically সাজাতে পারি ?
`)
const studentname = ['siam', 'rony', 'kony', 'Shamim', 'Sakib', 'Habib', 'Akbor']
const studentnames = studentname.sort()
console.log(`Your Output Is:${studentnames}`)
console.log()
// 3.কি ভাবে আমরা আমাদের   ক্লাসরুমক্লাসরুম এর সকলের রোল নম্বর ক্রম অনুযায়ী সাজাতে পারি ?
console.log(`3.কি ভাবে আমরা আমাদের   ক্লাসরুমক্লাসরুম এর সকলের রোল নম্বর ক্রম অনুযায়ী সাজাতে পারি ?`)
const sRoll = [10, 12, 20, 30, 40, 50]
const studentRoll = sRoll.sort(function (min, max) { return min - max })
console.log(`Your Output Is:${studentRoll}`)
console.log()
// 4.কোনো সাল Leap Year কীনা তা কিভাবে বের করতে পারি ?
console.log(`4.কোনো সাল Leap Year কীনা তা কিভাবে বের করতে পারি ?`)
{
  function leapYear (year) {
    if ( (year % 100 !== 0 || year % 4 === 0 && year % 400 === 0)) {
      console.log(`${year} Is A LeapYear!`)
    } else {
      console.log(`${year} Is Not A LeapYear!`)
    }
  }
  leapYear(2020)
}
console.log()

// 5.কোনো sentence এ কতগুলো vowel আছে  তা কিভাবে নিণয় করা যাবে ?
console.log(`5.কোনো sentence এ কতগুলো vowel আছে  তা কিভাবে নিণয় করা যাবে ?`)
const vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function chackVowel (sentence) {
  let count = 0
  const latter = Array.from(sentence)
  latter.forEach(function (value) {
    if (vowel.includes(value)) {
      count++
    }
  })
  return count
}
console.log(`This Paragrapgh Total Vowel Find:${chackVowel('aeiouAEIOU')}`)
console.log()
// 6.কোনো array থেকে কিভাবে ডুব্লিকেট নাম্বার বের করে আনতে পারি ?
console.log(`6.কোনো array থেকে কিভাবে ডুব্লিকেট নাম্বার বের করে আনতে পারি ?`)
const number = [10, 10, 20, 20, 50, 5, 50, 40, 40, 30, 14, 15]
const numbers = number.sort(function (min, max) { return min - max })
const dublicate = numbers.filter(function (value, index, array) {
  return (array.indexOf(value) !== index)
})
console.log(`Our Dublicate Number Is:${dublicate}`)
console.log()
// 7.কোনো array থেকে কিভাবে  unique  নাম্বার বের করে আনতে পারি ?
console.log(`6.কোনো array থেকে কিভাবে ইউনিক নাম্বার বের করে আনতে পারি ?`)
const num = [10, 10, 20, 20, 50, 5, 50, 40, 40, 30, 14, 15]
const num1 = num.sort(function (min, max) { return max - min })
const unique = num1.filter(function (value, index, array) {
  return (array.indexOf(value) === index)
})
console.log(`Our Dublicate Number Is:${unique}`)
console.log()



/* Problem Solve 2nd Part */

1. // নিচের sentence এ "JavaScript"শব্দটি কয়বার ব্যাবহার হয়েছে? পথমবার "JavaScript"কত নাম্বার পজিশন পাওয়া গেছে?

console.log(`1. নিচের sentence এ " "শব্দটি কয়বার ব্যাবহার হয়েছে? পথমবার " "কত নাম্বার পজিশন পাওয়া গেছে? \n`)
// let text = 'JavaScript has come a long way since its humble beginnings as a clunky, exclusively front-end scripting language. We saw some big developments in the JavaScript landscape during 2019, including the widespread adoption of React hooks and functional programming concepts, steady conversion to TypeScript, and continued domination of React in the front-end framework ecosystem.'
// let metches = text.match(/javascripts/ig)
// let occurence = metches ? metches.length : 0
// let position = text.lastIndexOf(/javascript/i)
// position = position >= 0 ? position : 'Not Found'
// console.log(`Total Value Find:${occurence} & Value First Index ${position}`);

let text = 'JavaScript has come a long way since its humble beginnings as a clunky, exclusively front-end scripting language. We saw some big developments in the JavaScript landscape during 2019, including the widespread adoption of React hooks and functional programming concepts, steady conversion to TypeScript, and continued domination of React in the front-end framework ecosystem.';

// // Corrected regular expression to match "JavaScript" (case-insensitive)
// let matches = text.match(/JavaScript/ig);

// // Count occurrences of "JavaScript"
// let occurrence = matches ? matches.length : 0;

// // Find the last position of "JavaScript" (case-insensitive)
// let position = text.toLowerCase().lastIndexOf('javascripts');

// position = position >= 0 ? position : 'Not Found';

// console.log(`Total Occurrences Found: ${occurrence} & Last Position: ${position}`);

const matches = text.match(/Javascript/ig)
const occurence = matches ? matches.length : 0
let position = text.search(/Javascript/i)
position = position >= 0 ? position : 'Not Found'
console.log(`Total Occurence Is:${occurence} & First Position ${position}`);
2. /*
*input:linearSearch (['a','b','c','d','e'],'c')
*output:2 or  'not   found!'
*প্রবলেম :linearSearch () function  টি   ইমপ্লিমেন্ট  করে  দেখান ?
*/

console.log(`2.*input:linearSearch (['a','b','c','d','e'],'c')
*output:2 or  'not   found!'
*প্রবলেম :linearSearch () function  টি   ইমপ্লিমেন্ট  করে  দেখান ? \n`)
function linearSearch(arr,val) {
  let length = arr.length
  for (let i = 0; i < length; i++){
    if (arr[i] === val) {
      return `This Array [${arr}] ${val} Find ${i} No Index!`
    }
  }
  return `This Array [${arr}] ${val} Not Found!`
}
console.log(linearSearch(['a','b','c','d','e'],'f'));
3. // কোনো Array থেকে কি ভাবে সব থেকে বড় String খুঁজে বের করবেন এবং তার index নাম্বার কিভাবে দেখবেন?

console.log(`3. কোনো Array থেকে কি ভাবে সব থেকে বড় String খুঁজে বের করবেন এবং তার index নাম্বার কিভাবে দেখবেন? \n`);

function longestString(arr) {
  let longString = ''
  for (const word of arr) if(word.length>longString.length) longString=word
  return [longString,arr.indexOf(longString)]
}
console.log(longestString(['Hello there', 'Hi There', 'I love my Country', 'I live In dhaka']));

4. // ১-১০০ পযন্ত কোন সংখ্যা গুলো ৩-৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা  বিভাজ্য কীনা টা বের করুন?

console.log(`4. ১-১০০ পযন্ত কোন সংখ্যা গুলো ৩-৫, এবং ৩ ও ৫ উভয় সংখ্যা দ্বারা  বিভাজ্য কীনা টা বের করুন? \n`);

function fizzBuzz(num) {
  for (let i = 1; i <= num; i++){
    if (i % 15 === 0) console.log(`${i} Is fizzBuzz!`);
    else if (i % 3 === 0) console.log(`${i} Is Fizz!`);
    else if (i % 5 === 0) console.log(`${i} Is Buzz!`);
    else console.log(`${i} is not fizzBuzz or Fizz & Buzz`);
  }
}

function fizzBuzzs(num) {
  for (let i = 1; i <= num; i++) {
    const output =
      i % 15 === 0 ? 'FizzBuzz!' :
      i % 3 === 0 ? 'Fizz!' :
      i % 5 === 0 ? 'Buzz!' :
      'Not Fizz or Buzz';
    console.log(`${i} ${output}`);
  }
}

fizzBuzzs(20)
5. // Array থেকে কিভাবে falsy value খুঁজে বের করে বাদ দিতে পারি?
console.log(`5. Array থেকে কিভাবে falsy value খুঁজে বের করে বাদ দিতে পারি? \n`);
const myArray = [
  'Mr:Cooder', undefined, null, 'Hello There', 'Hablu', false, NaN
]
const myArray1 = [
  'Mr:Cooder', undefined, null, 'Hello There', 'Hablu', false, NaN
]
const trueAry = myArray.filter(el => {
  if (el) return true
  else return false
})
// const trueArray =myArray1.filter(el=>Boolean(el))
const trueArray =myArray1.filter(Boolean)
console.log(trueAry);
console.log(trueArray);
6. // Object থেকে কিভাবে falsy value খুঁজে বের করে বাদ দিতে পারি?

console.log(`6. Object থেকে কিভাবে falsy value খুঁজে বের করে বাদ দিতে পারি? \n`);
const obj = {
  a: "Mr:Cooder",
  b: null,
  c: undefined,
  d: 'Mr:Hacker',
  e: NaN,
  f: 'Hello JavaScript',
  g: false,
  h: true,
  i:''
}
const trueObj = function (obj) {
  for (let i in obj) {
    if(!obj[i]) delete obj[i]
  }
  return obj
}
console.log(trueObj(obj));