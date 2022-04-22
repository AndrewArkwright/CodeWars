/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/
function gimme (triplet) {
    let copyArray = [...triplet]
    copyArray.sort((a, b) => a-b, 0)
    return triplet.indexOf(copyArray[1])
}

/*
Write function bmi that calculates body mass index (bmi = weight / height2).
if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi(weight, height) {
    let bmiCalc = (weight/height**2)
    if (bmiCalc < 18.5) {
      return "Underweight"
    }
    else if (bmiCalc < 25.0) {
      return "Normal"
    }
    else if (bmiCalc < 30.0) {
      return "Overweight"
    }
    else {
      return "Obese"
    }
    return "";
}

/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
Note: input will never be an empty string
*/

function fakeBin(x){
    let newString = ""
    for (let i = 0; i < x.length; i++) {
        if (x.charAt(i) < 5 ) {
        newString += 0
    }
    else {
        newString += 1
    }
    }
    return newString
}

//Complete the square sum function so that it squares each number passed into it and then sums the results together.

function squareSum(numbers){
    let sum = 0
    numbers.forEach((item, index) => sum += (numbers[index] ** 2))
    return sum
}

/*
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/

function smash (words) {
    let stringSmash = ""
    let i = 0
    while (i < words.length) {
      if (i === words.length - 1) {
        stringSmash += words[i]
        i++
        //do not add space at end
      }
      else {
        stringSmash += `${words[i]} `
        i++
        //add space
      }
    }
    return stringSmash
}

/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/
function sum (numbers) {
    let sumNums = 0
    for (let i = 0; i < numbers.length; i++) {
      sumNums += numbers[i]
    }
    return sumNums
}

/*
Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
*/
var min = function(list){
    let small
      for (let i = 0; i < list.length; i++) {
        if (small === undefined) {
          small = list[i]
        }
        else if (small > list[i]) {
          small = list[i]
        }
      }
    return small
}
  
  var max = function(list){
      let big
      for (let i = 0; i < list.length; i++) {
        if (big === undefined) {
          big = list[i]
        }
        else if (big < list[i]) {
          big = list[i]
        }
      }
      return big
}

//Write a function to split a string and convert it into an array of words.
function stringToArray(string){
    return string.split(' ');
}

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/
function isIsogram(str){
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return false
    }
  }
  return true
}

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
*/

function countSheep(array) {
  let sheep = array.filter(word => word === true, 0)
  return sheep.reduce((sum, next) => sum + next, 0)
}

/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
Note: For 4 or more names, the number in "and 2 others" simply increases.
*/

function likes(names) {
  if(names.length === 0){
    return "no one likes this"
  }
  else if(names.length === 1){
    return `${names[0]} likes this`
  }
  else if(names.length === 2){
    return `${names[0]} and ${names[1]} like this`
  }
  else if(names.length === 3){
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else{
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.
*/
function addBinary(a,b){
  return (a+b).toString(2)
}

/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/
//Can probably do it better now
function rgb(r, g, b){
  if (r < 0) {
      r = 0
  }
  if (r > 255) {
      r = 255
  }
  if (b < 0) {
      b = 0
  }
  if (b > 255) {
      b = 255
  }
  if (g < 0) {
      g = 0
  }
  if (g > 255) {
      g = 255
  }
let red = r.toString(16)
if (red.length == 1) {
  red = "0" + red
}
let green = g.toString(16)
if (green.length == 1) {
  green = "0" + green
}
let blue = b.toString(16)
if (blue.length == 1) {
  blue = "0" + blue
}
return (red.concat(green, blue)).toUpperCase()
}

/*
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

function DNAStrand(dna){
  //a to t, t to a, g to c, c to g
  otherDNA = ""
  for (let i = 0; i < dna.length; i++){
    if (dna.charAt(i) === "A") {
      otherDNA += "T"
    }
    else if (dna.charAt(i) === "T") {
      otherDNA += "A"
    }
    else if (dna.charAt(i) === "G") {
      otherDNA += "C"
    }
    else {
      otherDNA += "G"
    }
    
  }
  return otherDNA
}

/*
Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?
*/

function roundToNext5(n){
  if (n === 0) {
    return 0
  }
  else {
    return 5 * (Math.ceil(n/5))
  }
}

/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.
*/

function printerError(s) {
  let errors = 0
    for (let i = 0; i < s.length; i++) {
      if (/^[a-m]/.test(s.charAt(i)) === false) {
        errors++    
      }
    }
  return `${errors}/${s.length}`
}

/*
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).
*/

function oddOrEven(array) {
  let sum = array.reduce((total, nextValue) => total + nextValue, 0)
  if (sum % 2 === 0) {
      return "even"
  }
  else {
      return "odd"
  }
}

/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/

var capitals = function (word) {
  let array = []
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i].toUpperCase()) { //if uppercase
      array.push(i)
    }
  }
  return array
}

/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/
//can use split() to make it into an array that you can filter or map

function XO(str) {
  str = str.toLowerCase()
  let x = 0
  let o = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      x++
    }
    else if (str[i] === "o") {
      o++
    }
  }
  if (x === o) {
    return true
  }
  else {
    return false
  }
}

/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
Note:
Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear(p0, percent, aug, p) {
  let year = 0
  if (percent !== 0) {
    percent /= 100 //makes it a percentage since given as a whole number
  }
  while (p0 < p) {
    Math.round(p0 += (Math.floor((p0 * percent)) + aug)) //must do Math.floor because JS can't math
    year++
  }
  return year
}

/*
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
*/

function rowWeights(array){
  let teamOne = 0
  let teamTwo = 0
  array.map((value, count) => count % 2 == 0 ? teamOne += value : teamTwo += value)
  let newArray = [teamOne, teamTwo]
  return newArray
}

/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
*/

function solution(string) {
  if (string === "") {
    return string
  }
  else {
    for (let i = 0; i < string.length; i++) {
      let upperCheck = string[i].toUpperCase()
      if (string[i] === upperCheck) {
        string = string.slice(0, i) + " " + string.slice(i, string.length)
        i++ //to increment past the space
      }
    }
    return string
  }
}

//scramble,but it is taking too long, need to make it more efficient
function scramble(str1, str2) {
  if (str2.length > str1.length) {
    return false //if there are not even enough characters in str1, return false
  }
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return false //no index of character in string2, return false
    }
    else {
      str1 = str1.replace(str1[str1.indexOf(str2[i])], "")
    }
  }
  return true
}

//keep last index for indexOf search, and use that for repeated letters
//if value does not match, remove all values in array1, in order to do this, we have to compare each value from array 1 to see if matches a value in array 2, but we are doing the reverse right now
function scramble(str1, str2) {
  if (str2.length > str1.length) {
    return false //if there are not even enough characters in str1, return false
  }
  let i = 0
  while (str2.length !== 0 || str1.length !== 0)
  {
    if (str2.indexOf(str1[i]) == -1) { //if it is not found, remove all characters that = that on array 1
      str1 = str1.replaceAll(str2[i], "")
    }
    else { //else it is found and we remove that character from array 2
      str2 = str2.replace(str2[i], "")
      if (str2.length === 0) {
        return true
      }
    }
    i++
  }
  return false
}

/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
*/

function encode(string) {
  string = string.replaceAll("a", "1")
  string = string.replaceAll("e", "2")
  string = string.replaceAll("i", "3")
  string = string.replaceAll("o", "4")
  string = string.replaceAll("u", "5")
  return string
}

function decode(string) {
  string = string.replaceAll("1", "a")
  string = string.replaceAll("2", "e")
  string = string.replaceAll("3", "i")
  string = string.replaceAll("4", "o")
  string = string.replaceAll("5", "u")
  return string
}

/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/
//there are quicker ways to type it to get it to work, but I wanted to write one that would be effecient for long 
function disemvowel(str) {
  const vowelMap = new Map()
  vowelMap.set("a" , "")
  vowelMap.set("e" , "")
  vowelMap.set("i" , "")
  vowelMap.set("o" , "")
  vowelMap.set("u" , "")
  vowelMap.set("A" , "")
  vowelMap.set("E" , "")
  vowelMap.set("I" , "")
  vowelMap.set("O" , "")
  vowelMap.set("U" , "")
  
  
  for (let i = 0; i < str.length; i++){
    if (vowelMap.has(str[i]) === true) { //if there is a key in the object with value str[i]
      //replace
      str = str.substring(0, i) + str.substring(i+1, str.length) //could use the value of the key here, but not needed since we delete it
      i--
    }
  }
  return str;
}

/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return (str.match(/[aeiou]/ig || [])).length; //need || [] for empty string / no vowels
}
//or
function getCount1(str) {
  var vowelsCount = 0;
  const vowelMap = new Map()
  vowelMap.set("a" , "")
  vowelMap.set("e" , "")
  vowelMap.set("i" , "")
  vowelMap.set("o" , "")
  vowelMap.set("u" , "")
  for (let i = 0; i < str.length; i++){
    if (vowelMap.has(str[i]) === true) { //if there is a key in the object with value str[i]
      vowelsCount++
    }
  }
  return vowelsCount;
}

/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

function accum(string) {
  let newString = ""
  for (let i = 0; i < string.length; i++) {
    newString += string[i].toUpperCase()
    if (i !== 0) {
      let multString = ""
      for (let j = 0; j < i; j++) {
        multString += string[i].toLowerCase() 
      }
      newString += multString
    }
    if ( i === string.length-1) {
      return newString //do now so we dont add a - at the end
    }
    else {
      newString += "-"
    }
  }
}

/*
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  return l.filter(value => Number.isInteger(value))
}

/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
*/

function getMiddle(s)
{
  if (s.length % 2 === 0) {
    return `${s[s.length/2-1]}${s[s.length/2]}`
  }
  else {
    return `${s[Math.floor(s.length/2)]}`
  }
}

/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
  return parseInt(Array.from(String(num), value => value*value).join(""))
}

/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.--
*/

function highAndLow(numbers){
  let array = numbers.split(" ")
  let maxNum = Math.max(...array)
  let minNum = Math.min(...array)
  return `${maxNum} ${minNum}`
}

/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

function descendingOrder(n){
  let answer = Array.from(String(n))
  answer.sort((a, b) => b-a)
  return Number(answer.join(""))
}

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
*/

function findNextSquare(sq) {
  if (Math.sqrt(sq)%2 === 0 || Math.sqrt(sq)%2 === 1) {
    return (Math.sqrt(sq)+1)**2
  }
  return -1
}

/*
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  string = string.toLowerCase()
  let matchString = "abcdefghijklmnopqrstuvwxyz"
  for (let i = 0; i < matchString.length; i++) {
    if (string.indexOf(matchString.charAt(i)) === -1) {
      return false
    }
  }
  return true
}

/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

function duplicateCount(text){
  let charCount = 0
  let checkString = "abcdefghijklmnopqrstuvwxyz1234567890"
  text = text.toLowerCase()
  for (let i = 0; i < checkString.length; i++) {
    if (text.indexOf(checkString.charAt(i)) != -1) {// if we find a character of it, then lets check for another
      let lastIndex = text.indexOf(checkString.charAt(i)) //just to make it more readable
      if (text.indexOf(checkString.charAt(i), lastIndex + 1) != -1) { //if it finds another of the same char
        charCount++
      }
    }
  }
  return charCount
}

/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

//can probably do this better with arrays and slice

String.prototype.toJadenCase = function () {
  let copy = this.substring(0, this.length)
  
  let after = copy.substring(1, copy.length)
  let changeChar = copy.charAt(0).toUpperCase()
  copy = changeChar + after
  
  for (let i = 0; i < copy.length; i++) {
    if (copy.charAt(i) === " ") {
      let before = copy.substring(0, i+1)
      after = copy.substring(i+2, copy.length)
      changeChar = copy.charAt(i+1).toUpperCase()
      copy = before + changeChar + after
    }
  }
  return copy
};

/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
  let sortedNums = numbers.sort( (a,b) => a - b );
  return sortedNums[0] + sortedNums[1];
};


/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
aka add them together, sort, and return with no duplicate characters

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('') //does the same thing, but shorter, did not write
*/

function longest(s1, s2) {
  let bestString = s1 + s2
  bestString = bestString.split("").sort().join("")
  for (let i = 0; i < bestString.length; i++) {
    if (bestString.lastIndexOf(bestString.charAt(i)) != bestString.indexOf(bestString.charAt(i))) {
      //if duplicate
      while (bestString.lastIndexOf(bestString.charAt(i)) != bestString.indexOf(bestString.charAt(i))) {
        bestString = bestString.replace(bestString.charAt(i), "")
      }
    }
  }
  return bestString
}

/*
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

better code I didn't make
const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
*/

function expandedForm(num) {
  let numArray = String(num).split("").map((num) => {
    return Number(num)
  })

  let i = 1
  let stringAnswer = ""
  while (i < num) {
    if (numArray[numArray.length-1] != 0) {
      if (i === 1) {
        //add first number if not 0
        stringAnswer = `${numArray.pop() * i}`
      }
      else {
        stringAnswer = `${numArray.pop() * i} + ` + stringAnswer
      }
    }
    else {
      if (i === 1) {
        while (numArray[numArray.length - 1] === 0) { //remove all 0s if first number is a 0
          numArray.pop() //pop all 0s
          i *= 10 //increment so we start adding to the array properly once done
        }
        stringAnswer = `${numArray.pop() * i}`
      }
      else {
        numArray.pop()
      }
    }
    i *= 10
  }
  return stringAnswer
}

/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.
*/

maskify = (cc) => cc.length < 5 ? cc : cc.split("").map((value, index, array) => index < array.length - 4 ? array[index] = "#" : array[index]).join("")

/*
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.
*/

isSquare = (n) => Math.sqrt(n) % 1 === 0 ? true : false