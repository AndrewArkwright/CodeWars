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

/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

function solution(number){
  let sum = 0
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }
  return sum
}

/*
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).
*/

function countBy(x, n) {
  let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(i*x);
    }
  return z;
}

/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
*/

function countSmileys(arr) {
  //not by code, but also works, return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  let count = 0
  arr.forEach(value => {
    if (value.charAt(0) === ":" || value.charAt(0) === ";") {
      if (value.charAt(1) === "-" || value.charAt(1) === "~") {
        if (value.charAt(2) === "D" || value.charAt(2) === "\)") {
          count++
        }
      }
      else if(value.charAt(1) === "D" || value.charAt(1) === "\)") {
        count++
      }
    }
  })
  return count
}

/*
This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
*/

simpleMultiplication = (number) => number%2 === 0 ? number*8 : number*9;

/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s){
  let smallest = 1000
  s.split(" ").forEach(value => {
    if (value.length < smallest) {
      smallest = value.length
    }
  })
  return smallest
}

/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

//could have just used reduce to do the multiplication instead
function persistence(num) {
  num = num.toString().split("")
  let max = 0
  let nextIteration = 1
  while (num.length > 1) {
    for (let i = 0; i < num.length; i++) {
      nextIteration *= num[i]
    }
    num = nextIteration.toString().split("")
    nextIteration = 1
    max++
  }
  return max
}

/*
Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

Mind the input validation.
*/

function sumArray(array) {
  if (array === null || array === undefined || array.length < 3) return 0
  return array.reduce((previous, current) => previous + current, 0) - Math.min(...array) - Math.max(...array)
}

/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Other code found online that works
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false; //when more closed and open, it returns false
  }
  
  return n == 0;
}
*/

function validParentheses(parens) {
  if (parens.length === 0) return true
  if (parens.length % 2 != 0) return false
  
  let open = 0, close = 0
  for (let i = 0; i < parens.length; i++) {
    if (parens.charAt(i) === "(") {
      open++
    }
    else {
      close++
    }
    if (close > open) { //if there are more close brackets than open currently
      return false
    }
  }
  let sorted = parens.split("").sort().join("")
  if (sorted.charAt(sorted.length/2-1) === "(" && sorted.charAt(sorted.length/2) === ")") { //if there are an equal amount of "(" and ")"
      return true
  }
  return false
}

/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

found another function that just used reduce a ^ b, works since XOR will return 0 for all even numbers and just leave the remaining number since the previous was 0
*/

function findOdd(A) {
  A.sort()
  let keep
  while (A.length % 2 != 0) {
    keep = A[0] 
    A = A.filter(value => value != keep)
  }
  return keep
}

/*
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

Learned afterwards that string.endsWith() exists
*/

solution = (str, ending) => str.substring(0, str.length-ending.length) + ending === str ? true : false

/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.
*/

const arrayDiff = (a, b) => a.filter(value => !b.includes(value));

/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7

Found online that there is another way to do it: return (n - 1) % 9 + 1;
*/

function digital_root(n) {
  while (n > 9) {
    n = Array.from(String(n)).reduce((previous, current) => Number(previous) + Number(current), 0)
  }
  return n
}

/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(string){
  return string.split(" ").map((value, index, array) => {
    let reverse = ""
    if (value.length > 4) {
      for (let i = value.length; i > 0; i--) {
        reverse += value.charAt(i-1)
      }
    value = reverse
      return value
    }
    else {
      return value
    }
  }).join(" ")
}

/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/

const countBits = n => parseInt(n.toString(2).split("").reduce((a, b) => Number(a) + Number(b)))

/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
*/

function reverseWords(str) {
  return str.split(" ").map(value => value.split("").reverse().join("")).join(" ")
}

/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
  let min = Math.min(...numbers)
  let onlyOne = 0
  let newArray = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === min && onlyOne === 0) {
      //found first min and don't add it
      onlyOne++
    }
    else {
      newArray.push(numbers[i])
    }
  }
  return newArray
}

/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

function createPhoneNumber(numbers){
  //could us a template string and replace the numbers with the array values, but this just seemed easiest
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
  //if there is a odd outlier
  if (integers.filter(value => value % 2 === 0).length === 1) {
    return integers.filter(value => value % 2 === 0).reduce((a, b) => a + b)
  }
  else {
    //return even outlier
    return integers.filter(value => value % 2 != 0).reduce((a, b) => a + b)
  }
}

function findOutlier(integers){
  //even is first
  if (integers[0] % 2 === 0) {
    if (integers[1] % 2 === 0) {
      //search for a odd and first two are even\
      for (let i = 2; i < integers.length; i++) {
        console.log(integers[i])
        if (integers[i] % 2 != 0) {
          return integers[i]
        }
      }
    }
    else if (integers[2] % 2 === 0) {
      //if there is a odd between two even
      return integers[1]
    }
    else {
      //if first is even and next two are odd
      return integers[0]
    }
  }
  //odd is first
  else {
      if (integers[1] % 2 != 0) {
        //first two are odd so search for even
        for (let i = 2; i < integers.length; i++) {
          if (integers[i] % 2 === 0) {
            return integers[i]
          }
        }
      }
      else if (integers[2] % 2 != 0) {
        //if there is a even between two odd
        return integers[1]
      }
      else {
        //first is odd and next two are even
        return integers[0]
    }
  }
}

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Found that you could also do return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
*/

function duplicateEncode(word){
  let answer = ""
  word.toLowerCase().split("").forEach((value, index, array) => array.indexOf(value) === array.lastIndexOf(value) ? answer += '(' : answer += ")")
  return answer
}

/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

const makeNegative = num => num <= 0 ? num : num * -1

/*
Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

function dirReduc(arr){
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === "NORTH" && arr[i+1] === "SOUTH") || (arr[i] === "SOUTH" && arr[i+1] === "NORTH")) {
      arr[i] = 0
      arr[i+1] = 0
      arr = arr.filter(value => value != 0)
      i -= 2    
    }
      else if ((arr[i] === "EAST" && arr[i+1] === "WEST") || (arr[i] === "WEST" && arr[i+1] === "EAST")) {
      arr[i] = 0
      arr[i+1] = 0
      arr = arr.filter(value => value != 0)
      i -= 2
    }
  }
  return arr
}

/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Could have just compared i to !/5/.test(i)
*/

const dontGiveMeFive = (start, end) => {
  let count = 0
  for (let i = start; i <= end; i++) {
    if (String(i).split("").map(value => value === "5" ? true : false).indexOf(true) === -1) {
      count++
    }
  }
  return count
}

/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
*/

function isValidWalk(walk) {
  if (walk.length != 10) {
    return false
  }
  let n = 0, s = 0, e = 0, w = 0
  walk.map(value => value === "n" ? n++ : undefined)
  walk.map(value => value === "s" ? s++ : undefined)
  walk.map(value => value === "e" ? e++ : undefined)
  walk.map(value => value === "w" ? w++ : undefined)
  if (n === s && e === w) {
    return true
  }
  else {
    return false
  }
  /*
  This works as well, make sure to include the first if statement with this
  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === "n") {
      if (walk.indexOf("s") != -1) {
        walk[i] = 0
        walk[walk.indexOf("s")] = 0
        walk = walk.filter(value => value != 0)
        i--
      }
      else {
        return false
      }
    }
    else if (walk[i] === "e") {
      if (walk.indexOf("w") != -1) {
        walk[i] = 0
        walk[walk.indexOf("w")] = 0
        walk = walk.filter(value => value != 0)
        i--
      }
      else {
        return false
      }
    }
  }
  if (walk.length != 0) {
    return false
  }
  else {
    return true
  }
*/
}

/*
  Given a number, determine if the number is odd or even and return "Even" or "Odd"
*/

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even"
  }
  else {
    return "Odd"
  }
}

/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!
*/

function getSum( a,b ) {
  if (a === b) return a
  if (a < b) {
    let count = b
    for (let i = a; i < b; i++) {
    count += i
    }
    return count
  }
  else {
    let count = a
    for (let i = b; i < a; i++) {
    count += i
    }
    return count
  }
}

/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/

function alphabetPosition(text) {
  let alphabet = [NaN, "a" , "b", "c", "d", "e", "f", "g" , "h", "i", "j", "k", "l", "m" , "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let answer = []
  text.toLowerCase().split(" ").join("").split("").forEach(value => alphabet.indexOf(value) != -1 ? answer.push(alphabet.indexOf(value)) : undefined)
  return answer.join(" ")
}

/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

function moveZeros(arr) {
  let count = arr.filter(value => value === 0).length
  arr = arr.filter(value => value !== 0)
  for (let i = 0; i < count; i++) {
    arr.push(0)
  }
  return arr
}

/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));

Another way to do it using recursion that I found, 
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };
*/

function zero(array) {
  if (array === undefined) {
    let array = [0]
    return array
  }
  else {
    if (array[1] === "+") {
        return 0 + array[0]
    }
    else if (array[1] === "-") {
        return 0 - array[0]
    }
    else if (array[1] === "*") {
        return 0 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(0 / array[0])
    }
  }
}

function one(array) {
  if (array === undefined) {
    let array = [1]
    return array
  }
  else {
    if (array[1] === "+") {
        return 1 + array[0]
    }
    else if (array[1] === "-") {
        return 1 - array[0]
    }
    else if (array[1] === "*") {
        return 1 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(1 / array[0])
    }
  }
}  

function two(array) {
  if (array === undefined) {
    let array = [2]
    return array
  }
  else {
    if (array[1] === "+") {
        return 2 + array[0]
    }
    else if (array[1] === "-") {
        return 2 - array[0]
    }
    else if (array[1] === "*") {
        return 2 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(2 / array[0])
    }
  }
}  

function three(array) {
  if (array === undefined) {
    let array = [3]
    return array
  }
  else {
    if (array[1] === "+") {
        return 3 + array[0]
    }
    else if (array[1] === "-") {
        return 3 - array[0]
    }
    else if (array[1] === "*") {
        return 3 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(3 / array[0])
    }
  }
}  

function four(array) {
  if (array === undefined) {
    let array = [4]
    return array
  }
  else {
    if (array[1] === "+") {
        return 4 + array[0]
    }
    else if (array[1] === "-") {
        return 4 - array[0]
    }
    else if (array[1] === "*") {
        return 4 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(4 / array[0])
    }
  }
}  

function five(array) {
  if (array === undefined) {
    let array = [5]
    return array
  }
  else {
    if (array[1] === "+") {
        return 5 + array[0]
    }
    else if (array[1] === "-") {
        return 5 - array[0]
    }
    else if (array[1] === "*") {
        return 5 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(5 / array[0])
    }
  }
}

function six(array) {
  if (array === undefined) {
    let array = [6]
    return array
  }
  else {
    if (array[1] === "+") {
        return 6 + array[0]
    }
    else if (array[1] === "-") {
        return 6 - array[0]
    }
    else if (array[1] === "*") {
        return 6 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(6 / array[0])
    }
  }
}  
function seven(array) {
  if (array === undefined) {
    let array = [7]
    return array
  }
  else {
    if (array[1] === "+") {
        return 7 + array[0]
    }
    else if (array[1] === "-") {
        return 7 - array[0]
    }
    else if (array[1] === "*") {
        return 7 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(7 / array[0])
    }
  }
}

function eight(array) {
  if (array === undefined) {
    let array = [8]
    return array
  }
  else {
    if (array[1] === "+") {
        return 8 + array[0]
    }
    else if (array[1] === "-") {
        return 8 - array[0]
    }
    else if (array[1] === "*") {
        return 8 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(8 / array[0])
    }
  }
}  

function nine(array) {
  if (array === undefined) {
    let array = [9]
    return array
  }
  else {
    if (array[1] === "+") {
        return 9 + array[0]
    }
    else if (array[1] === "-") {
        return 9 - array[0]
    }
    else if (array[1] === "*") {
        return 9 * array[0]
    }
    else if (array[1] === "/") {
        return Math.floor(9 / array[0])
    }
  }
}  

function plus(array) {
  array.push("+")
  return array
}
function minus(array) {
  array.push("-")
  return array
}
function times(array) {
  array.push("*")
  return array
}
function dividedBy(array) {
  array.push("/")
  return array
}

/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

Saw someone else do
return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
*/

function order(words){
  let answer = []
  words = words.split(" ")
  let num = 1
  for(let j = 0; j < words.length; j++) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(num) === true) {
        answer.push(words[i])
      }
    }
    num++
  }
  return answer.join(" ")
}

/*
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/

function tribonacci(signature,n){
  let index = 0
  for (let i = 0; i < n; i++) {
    signature.push(signature[index] + signature[index+1] + signature[index+2])
    index++
  }
  for (let i = 0; i < 3; i++) {
    signature.pop()
  }
  return signature
}

/*
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']

Found that someone else did this: return [...iterable].filter((a, i) => a !== iterable[i-1])
*/

var uniqueInOrder=function(iterable){
  if (typeof iterable === "string") {
    iterable = iterable.split("")
  }
  if (iterable.length === 0) return iterable
  let array = []
  array.push(iterable[0])
  iterable.map(value => value != array[array.length-1] ? array.push(value) : undefined)
  return array
}

/*
89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p){
  p--
  let answer = [...String(n)].map(value => {
    p++
    return Number(value) ** p
  }).reduce((previous, current) => previous + current, 0)/n
  if(answer % 1 != 0) {
    return -1
  }
  return answer
}

/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
*/

function digPow(n, p){
  p--
  let answer = [...String(n)].map(value => {
    p++
    return Number(value) ** p
  }).reduce((previous, current) => previous + current, 0)/n
  if(answer % 1 != 0) {
    return -1
  }
  return answer
}

/*
Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
With list [20,37,20,21] and number 1, the result would be [20,37,21].

One answer by another person:
function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
}
*/

function deleteNth(arr,n){
  let count = 0
  let prevIndex = 0
  for (let i = 0; i < arr.length; i++) {
    while(arr.indexOf(arr[i], prevIndex) != -1) {
      prevIndex = arr.indexOf(arr[i], prevIndex) + 1
      count++
    }
    if (count > n) {
      for (let j = count; j > n; j--) {
        arr[arr.lastIndexOf(arr[i])] = undefined
      }
      arr = arr.filter(value => value != undefined)
    }
    prevIndex = 0
    count = 0
  }
  return arr
}

/*
Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.

The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.

Note to Tax: not the invested principal is taxed, but only the year's accrued interest
*/

function calculateYears(principal, interest, tax, desired) {
  let years = 0
  while (principal < desired) {
    principal += principal * (interest-(interest * tax))
    years++
  }
  return years
}

/*
Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]

Another way to do it that I found:
function towerBuilder(nFloors) {
  var tower = [];
  for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
             + "*".repeat((i * 2)+ 1)
             + " ".repeat(nFloors - i - 1));
  }
  return tower;
}
*/

function towerBuilder(nFloors) {
  //prep
  //parameter seems to only be a number and not 0, but not stated
  //return is an array it seems and spaces are set to max number of * in the pyramid, assuming that it splits the pyramid
  //examples
  /*
  we are given 6 as nFloors
  1 - 1* and 10 spaces
  2 - 3* and 8 spaces
  3 - 5* and 6 spaces
  4 - 7* and 4 spaces
  5 - 9* and 2 spaces
  6 - 11* and 0 spaces
  n is the middle point on each row
  */
  //will need to find the max right off the bat to know how many spaces to put in and maybe replace the middle depending on the row
  //n * 2 - 1 = number of *

  let pyramid = []
  for (let i = 0; i < nFloors; i++) {
    let stars = "" //zero out each run
    for (let k = 0; k < (i + 1) * 2 - 1; k++) {
      stars += "*"
    }
    let spacesOnEachSide = ((nFloors * 2 - 1) - stars.length)/2
    let stringSpaces = "" //zero out each run
    for (let j = 0; j < spacesOnEachSide; j++) {
      stringSpaces += " "
    }
    pyramid.push(stringSpaces + stars + stringSpaces)
  }
  return pyramid
}

/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.
*/

var number=function(array){
  //PREP
  //Parameter will always be an array, but may be empty
  //Return will always be an array with  "${i+1}: " in front of each value
  //Examples: ["a", "b", "c"]), ["1: a", "2: b", "3: c"]
  //Pseudo - look at return for more info
  return array.map((value, index) => value = `${index+1}: ` + value)
}

/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

Could have done this as well probably...
forEach
slice left.reduce
slice right.reduce
if equal, return index
else - 1
Saw other answers similar to the above that used findIndex() instead of forEach
*/

function findEvenIndex(arr) {
  //PREP
  //given an array of numbers that could be empty, including negative numbers
  //return the index of which both sides of the array sum to the same number or -1 if it does not exist
  // [1,2,3,4,3,2,1]),3    [1,2,3,4,5,6]),-1
  
  //while sum left side != sum right side && index(answer) < array.length
  //sum left side
  //sum right side
  //increment index
  let sumLeft = 1, sumRight = 0
  let index = 0
  while (sumLeft != sumRight && index <= arr.length) {
    sumLeft = 0
    sumRight = 0
    //sum left
    for(let i = 0; i < index; i++){
      sumLeft += arr[i]
    }
    //sum right
    for(let i = index + 1; i < arr.length; i++){
      sumRight += arr[i]
    }
    index++
  }
  if (index - 1 === arr.length) {return -1}
  else {return index - 1}
}

/*
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
*/

function lovefunc(flower1, flower2){
  // PREP
  //Parameters are numbers that are >= 0
  //we return true or false depending on if one flower is odd and one flower is even
  // 1, 4 = true, 2, 2 = false
  if (flower1 % 2 === flower2 % 2) {return false}
  else {return true}
}

/*
A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.

He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).

His mother looks out of a window 1.5 meters from the ground.

How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

Three conditions must be met for a valid experiment:
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.
If all three conditions above are fulfilled, return a positive integer, otherwise return -1.

Note:
The ball can only be seen if the height of the rebounding ball is strictly greater than the window parameter.
*/

function bouncingBall(h,  bounce,  window) {
  //PREP
  //All numbers are floats. H is >= 1, bounce is how much it goes up by compared to original height and is between 0 and 1, window where mom is watching is < h
  //return is how many times the ball will bounce UP AND DOWN until it is below window
  // 3, .65, 1.5 -> 3,
  //while h >= window, do math for ball, assign h as the new height. once out of the loop, return count of loops
  if (bounce < 0 || bounce >= 1) {return -1}
  if (window > h) {return -1}
  if (h <= 0) {return -1}
  
  let count = 0
  while (h > window) {
    h *= bounce
    count++
  }
  return count * 2 - 1
}

/*
You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/

//PREP
//Parameters is a non empty array of numbers with only one number being different
//We return the numbers that is different in the array
// [1, 1, 2] -> 2
// sort the array and that will either put the number we want at the very beginning or end of the array, then we will check if array[1] is equal to one of the numbers since we know it is not the odd one out
function stray(numbers) {
	numbers.sort();
	if (numbers[0]===numbers[1]) {
	  return numbers[numbers.length-1];
	}
  else {
	  return numbers[0];
	}
}

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

//remembered after that you can use padStart() to add padding instead
*/

function humanReadable (seconds) {
  //PREP
  //Parameter is a non negative integer
  //We return a string with hours, minutes, and seconds
  //90 -> 00:01:30
  //i'm thinking of doing two while statements and doing while num > 60, minute++ and then doing the same thing for hours and then putting those into the string
  
  //convert seconds to hours, minutes, and seconds
  let minutes = 0, hours = 0
  while (seconds >= 60) {
    seconds -= 60
    minutes++
  }
  while (minutes >= 60) {
    minutes -= 60
    hours++
  }
  
  //convert to string to prepare to return
  seconds.toString()
  minutes.toString()
  hours.toString()

  //if an answer is a single digit, we need to add a leading zero
  if (seconds < 10) {
    seconds = "0" + seconds 
  }
  if (minutes < 10) {
    minutes = "0" + minutes 
  }
  if (hours < 10) {
    hours = "0" + hours 
  }
  
  return `${hours}:${minutes}:${seconds}`
}

/*
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
*/

function twiceAsOld(dadYearsOld, sonYearsOld) {
  //Needed to append this one and the later one. Forgot to commit
  //PREP
  //parameters will be numbers >= 0
  //return a number, which is the number of years until father is twice the son's age
  // 36, 7 => 22
  // i would double the son's age and then check if it is > or < dad's age. If older, return son - dad, else return dad - son
  
  return sonYearsOld * 2 > dadYearsOld ? sonYearsOld * 2 - dadYearsOld : dadYearsOld - sonYearsOld * 2
}

/*
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/
*/

function twoSum(numbers, target) {
  //PREP
  //Parameters are an array and a number. Array will have at least two numbers. The number will always be a sum of two different numbers in the array
  //we return the index of the two numbers in the array that add up to the targer and put it in an array
  // [1,2,3], 4 => [0,2]
  //I"m thinking of doing a for loop nested in a for loop and if they equal the target, return
  
  for(let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) return [i, j]
    }
  }
}

/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
*/

function pigIt(str){
  //PREP
  //we are giving a string, doesn't state if it could be empty
  //we return a string. All but the first letter is moved behind the first letter and then you add "ay" at the end of each string
  //('Pig latin is cool'),'igPay atinlay siay oolcay')
  //get a substring of of the first char and the rest of the string, arrange them, and then add "ay" at the end. Do that for each word, which we can do by changing it to an array and doing map 
  //However, if there is punctuation, we can determine if it is punctualtion using value.match and using a if statment
  
  return str.split(" ").map(value => value.match(/[a-z]/i) ? value = value.substring(1) + value.substring(0,1) + "ay" : value).join(" ")
}

/*
What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

'abba' & 'baab' == true

'abba' & 'bbaa' == true

'abba' & 'abbba' == false

'abba' & 'abca' == false
Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
Note for Go
For Go: Empty string slice is expected when there are no anagrams found.
*/

function anagrams(word, words) {
  //PREP
  //We are given a string and an array of strings
  //We return all of the strings in words that are anagrams of word
  //('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
  //first thought about looping through each word and checking index and removing it from the words string, but that would be overly complex
  //instead thought about sorting each string and word to each string in words, would need a copy of the array to keep track of what the original string was and to return it
  
  let copy = [...words]
  let answer = []
  words = words.map((value, index) => value.split("").sort().join("") === word.split("").sort().join("") ? answer.push(copy[index]) : undefined)                  
  return answer
}

/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

var maxSequence = function(arr){
  //prep
  //parameter - array of numbers, can be all negative as well or an empty array
  //return the max sum of any amount of numbers in a sequence
  //([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  //What I'm thinking is setting maxVal to 0 and doing a nested for loop for each index and change max if we get a bigger number
  
  let max = 0 //may need to change
  for (let i = 0; i < arr.length; i++) {
    //where each sequence check starts
    let temp = arr[i] //do this here so it resets temp each loop
    if (temp > max) {max = temp}
    for (let j = i+1; j < arr.length; j++) {
      //start at i+1 so we don't grab i since we do in the above loop and so we don't check previous values
      temp += arr[j]
      if (temp > max) {max = temp}
    }
  }
  return max
}

/*
You will be given an array of numbers.

For each number in the array you will need to create an object.

The object key will be the number, as a string. The value will be the corresponding character code, as a string.

Return an array of the resulting objects.

All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.
*/

//Prep
//parameter is an array of numbers that are all valid ASCII characters and the array will not be empty
//We return an array of objects which contain one property. The property key is the value stored in the array and the value of it is that number converted to ASCII
//[118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]
//Since we are working with an array and making an object for each value, I want to use Array.forEach or Array.map, create the object for each one, and then return

const numObj = s => s.map(value => obj = {[value] : String.fromCharCode(value)})

/*
You'll be passed an array of objects (list) - you must sort them in descending order based on the value of the specified property (sortBy).
*/

//PREP
//sortBy parameter is either "a" or "b" to represent which key you want to sort by of the object. list is the array of objects, which can be empty, but will always have a and b as properties
//Return the array of objects sorted. It is sorted by descending order so sort(b-a)
/*
  {"a": 1, "b": 3},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 4, "b": 12}
]
should return:

[
  {"a": 4, "b": 12},
  {"a": 3, "b": 2},
  {"a": 2, "b": 40},
  {"a": 1, "b": 3}
]
*/
// retur if "a", array.sort(second.a - first.a) else array.sort(second.b - first.b)

const sortList = (sortBy, list) => sortBy === "a" ? list.sort((first, second) => second.a - first.a) : list.sort((first, second) => second.b - first.b)

/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.
*/

function encrypt(text, n) {
  //given a string and the number of times we need to encrypt/decrypt. string can be empty or null. number of times can be 0 or negative, in which we return just return text
  //returning the string encrypted and decrypted
  //encrypt("This is a test!", 1), "hsi  etTi sats!"
  //for encrypt,loop for text.length and compare if odd or even, move to even and odd array, then add arrays together (odd first)
  //for decrypt, do reverse
  if (text === null) {return null}
  let even = "", odd = ""
  for(let j = 0; j < n; j++) {
    for (let i = 0; i < text.length; i++) {
      //do even
      if (i % 2 === 0) {even += text.charAt(i)}
      //do odd
      else {odd += text.charAt(i)}
    }
    text = odd + even
    odd = ""
    even = ""
  }
  return text
}

function decrypt(encryptedText, n) {
  console.log(encryptedText, n)
  if (encryptedText === null) {return null}
  if (encryptedText.length === 0 || n == 0) return encryptedText
  let answer = ""
  let even = Math.floor(encryptedText.length/2)
  let odd = 0
  for (let j = 0; j < n; j++) {
      for (let i = 0; i < encryptedText.length; i++) {
        //push even, then odd
        console.log(encryptedText.charAt(i))
        if(i % 2 === 0) {
          answer += encryptedText.charAt(even)
          even++
          console.log("even")
        }
        else {
          answer += encryptedText.charAt(odd)
          odd++
          console.log("odd")
        }
        console.log("Answer",answer)
      }
      encryptedText = answer
      answer = ""
      even = Math.floor(encryptedText.length/2)
      odd = 0
  }
  return encryptedText
}

/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.
*/

//array is the only parameter and contains 4 numbers from 0 to 1. It does not state it will be more than 4 or less than 4
//We return the binary combinations of the numbers as a base 2 number
//([0,0,1,0]), 2);
//arr.join to merge numbers and as thinking of using toString, but we would have to remove any leading 0's in order to make sure it is the correct number while parseInt lets us use a string.
const binaryArrayToNumber = arr => parseInt(arr.join(""),2)

/*
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 
*/

function wave(str){
  //for the parameters, we are given a string that could be empty and all characters will be lowercase. String can have spaces in it
  //We return an array that is the same length as the stirng - the amount of whitespace
  //hello => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
  //there may be a way to do it using an arrow function, but I'm thinking of just doing a nexted for loop to iterate the array and then capitalize the character. Then putting the answer into an array.
  let result = []
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) != " "){
      result.push(str.split("").map((value, index) => index === i ? value.toUpperCase() : value).join(""))
    }
  }
  return result
}

/*
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

your referral bonus, and

the price of a beer can
*/

var beeramid = function(bonus, price) {
  //We are given a refural bonus as well as the price of beers, bonus can be negative
  //we return the amount of pyrmaid levels he can make out of the beers he can buy, if any
  //(11, 2), 2
  //need to calculate how many beers he can buy, if any, and while you reduce the number of beers, you increase the level and then return level. Beers per level = level^level
  if (bonus < price) {return 0}
  let totalBeer = bonus/price
  let level = 1
  while (totalBeer >= level * level) {
    totalBeer -= (level * level)
    level++
  }
  return level-1
}

/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
  //We are given an array of customers and each value in the array is the amount of time it takes to do that person. Array queue can be empty. Also given n, the amount of tills available.
  //We return the amount of time it takes to go through all customers
  //([2,2,3,3,4,4], 2), 9);
  //I think I can just do a array.reduce and then devide by N to get the result. Need to return the max amount of time if there are more tills than people. Will need to take care of empty array case as well
  //Noticed that my method above basically made it so everyone had to wait in order for the next person to start. So if you had 6 people, one takes 10 minutes and the other 5 take 2 minutes, I would give 20 instead of 10
  //Researched and found that one way you can do it is to just push the next person in the quickest till and add the values. Then once you are done with all the people you just return the lowest since that is the lowest time to finish all customers
  let tills = Array(n).fill(0)
  let max = customers.length
  for (let i = 0; i < max; i++) {
    let min = tills.indexOf(Math.min(...tills))
    console.log(min, tills)
    tills[min] += customers.shift()
  }
  return Math.max(...tills)
}

/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.
*/

function getDivisorsCnt(n){
  //we are given n, which is a positive number
  //we return a number, which is the amount of numbers that can go into n evenly
  //12 --> 6 (1, 2, 3, 4, 6, 12)
  //There could be a formula to more efficently check the number of numbers divisible by another number, but a for loop until n should be fine and we would check if it is divisible with no remaineder and then increment a counter
  let count = 0
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++
    }
  }
  return count
}

/*
A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False in your language, e.g. PHP.

Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.
*/
function narcissistic(value) {
  // We are given a positive number and need to figure out if each number to the power of the value length is equal to the number
  // We return true or false if it is or isn't
  //1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
  //Since it is a number, we need to convert to string and if we convert to an array, we can map and reduce it to get the sum
  return String(value).split("").map(val => Number(val) ** String(value).length).reduce((prev, current) => prev + current, 0) === value ? true : false
}

/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
  //We are given an array of numbers where all but one is the same and the length is at least 3
  //We return the number that is unqiue
  //([ 1, 1, 1, 2, 1, 1 ]), 2);
  //sorting the array and checking the last or first number is one way, but means going through the entire array every time. Thinking of checking if the first number or two is the answer and if not, then doing a while loop until it does not equal array[0] since we know it is not the answer
  if (arr[0] != arr[1]) {
    if (arr[0] === arr[2]) {return arr[1]}
    else {return arr[0]}
  }
  let index = 2
  while (arr[index] === arr[0]) {
    index++
  }
  return arr[index]
}

/*
The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.
*/

function productFib(prod){
  //we are given a number and we need to see if the current fib sequence * the prev fib sequence == the number
  //we return the two numbers of the fib sequence that mult and if they do equal the number given. We go until those numbers are equal to or over the amount given
  //productFib(714) # should return [21, 34, true], 
  //since we mult the fib numbs until it is equal to or greater than the given number, a while look would be good. Make the fib sequence using an array, pop into a new array when we find an answer
  let fibArray = [0, 1]
  while(fibArray[fibArray.length-1] * fibArray[fibArray.length-2] < prod) {
    //add next number to fibArray
    fibArray.push(fibArray[fibArray.length-1] + fibArray[fibArray.length-2])
  }
  let answer = []
  answer.push(fibArray.pop())
  answer.unshift(fibArray.pop())
  if (answer[0] * answer[1] === prod) {
    answer.push(true)
    return answer
  }
  else {
    answer.push(false)
    return answer
  }
}

/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
*/

function solution(str){
  //we are given a string of letters
  //we return an array where each value is two characters and if the length of the given string is not even, the last char will be "_"
  //("abcdefg"), ["ab", "cd", "ef", "g_"]);
  //There may be a way to use str.split and join to solve it, but it seems messy. Will just put each char of the string in an array and pop two each time and if the last one is undefined when shifting, just replace it with "_"
  
  str = str.split("")
  let array = []
  while (str.length != 0) {
    let charOne = str.shift()
    let charTwo = str.shift()
    if (charTwo === undefined) {charTwo = "_"}
    array.push(charOne + charTwo)
  }
  return array
}

/*
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

Found a shorter hand way to do what I was doing that another person made
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)
*/

function cakes(recipe, available) {
  //given two objects with numbers assigned to each key for the amount of ingredients
  //return the number of cakes you can make with the available ingredients, measurements(pd vs grams) do not matter
  /*    let recipe = {flour: 500, sugar: 200, eggs: 1};
    let available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
    (cakes(recipe, available), 2);
  */
  //Thinking about for looping the receipe object and then comparing each key in the receipe to the one in available. Will do the math for each and keep the lowest value. Need to make sure the ingredient exists as well in available
  let cakes = -1
  for (const property in recipe) {
    if (typeof available[property] != "number") {return 0} //if the ingredient does not exist in available
    else if (cakes === -1) {cakes = Math.floor(available[property]/recipe[property])}// if cakes has no val, assign first val
    else if (available[property]/recipe[property] < cakes) {cakes = Math.floor(available[property]/recipe[property])} // if new number is less than current, assign new lowest
  }
  return cakes
}

/*
For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
*/

function orderWeight(string) {
  //We are given a string of numbers that are positive with a space in between them, but there extra white spaces everywhere in the string
  //We return a string of numbers that are sorted by the sum of each number (109 = 1 + 0 + 9) and when they have the same weight, we compare them as strings instead of numbers
  //("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")
  //thinking of splitting it into an array to get rid of the white spaces and then sorting it using reduce and if they are equal, just sort by a-b
  return string.split(" ").sort((a, b) => {
    let sumA = a.split("").reduce((prev, curr) => Number(prev) + Number(curr),0)
    let sumB = b.split("").reduce((prev, curr) => Number(prev) + Number(curr),0)
    if (sumA === sumB) {
      return a.localeCompare(b) //instructions just said to sort by string, but they actually wanted to sort by the values of the string on the ASCII table
    }
    else {return sumA - sumB}
  }).join(" ")
}

/*
The drawing shows 6 squares the sides of which have a length of 1, 1, 2, 3, 5, 8. It's easy to see that the sum of the perimeters of these squares is : 4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80

Could you give the sum of the perimeters of all the squares in a rectangle when there are n + 1 squares disposed in such that all the squares are arranged in a rectangle

Hint:
See Fibonacci sequence

Ref:
http://oeis.org/A000045

The function perimeter has for parameter n where n + 1 is the number of squares (they are numbered from 0 to n) and returns the total perimeter of all the squares.
*/

function perimeter(n) {
  //We are given the number of squares in the rectangle that we use to calculate the Fibonacci sequence with
  //return the sum of all the Fibonacci numbers * 4 (ie the sum of the perimeters of all squares)
  //4 * (1 + 1 + 2 + 3 + 5 + 8) = 4 * 20 = 80
  //first I want to make an array of all the Fibonnaci numbers equal to the number of squares needed and use reduce to add them all up and then * 4

  let fibArray = [0, 1] 
  for (let i = 0; i < n; i++) {
    fibArray.push(fibArray[i] + fibArray[i+1])
  }
  return fibArray.reduce((prev, current) => prev + current, 0) * 4
}

/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

function generateHashtag (str) {
  //We are given string and it may have extra spaces in between words, be empty, or just contain spaces
  //We need to return the string with "#" in front combined with each each word (that is separated by spaces) that has the first letter capitalized
  //("Codewars Is Nice"), "#CodewarsIsNice"
  //So I want split each word and then for each word, we split it again to capitalize the first letter and lowercase all the other letters. Then we return and check if the length will be correct. Will need to trim the whitespaces to check for empty string.
  let newString = str.split(" ").map(value => value.split("").map((val, index) => index === 0 ? val.toUpperCase() : val.toLowerCase()).join("")).join("")
  if ("#".length + newString.length > 140 || str.trim().length === 0) {return false}
  return "#" + newString
}

/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(s) {
  //We are given a string of characters that could be an empty
  //We are returning the first character that is not repeated in the string and does not have a uppercase or lowercase value as well in the string
  //('moonmen'), 'e')
  //the first thing that comes to mind is filtering first index === last index and if it is, then it is the only char. We also need to make sure that that lowercase or uppercase version of the characters is not in the string as well. Will need to make sure it handles empty strings.
  const lowerCaseString = s => s.toLowerCase()
  return s.split("").filter((value, index, array) => array.map(lowerCaseString).indexOf(value.toLowerCase()) === array.map(lowerCaseString).lastIndexOf(value.toLowerCase()))[0] || ""
}

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

Someone else's solution, which will work much better because it won't affect or check the domain name string

  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
*/

function domainName(url){
  //given a website url string, doesn't state whether it could be empty and I assume they are valid URLs
  //we return the domain name
  //("http://google.co.jp"), "google"
  //I only want everything between the first two "." because everything else is not needed. Check if each has http www, http, www, or just domain first
  //Mine passed, but it was due to some random test cases not popping up like ww being in the domain name, changing it to www works much more often though, but shouldn't have to worry about that

  url = url.split(".")
  while (url.length > 2) {
    url.pop()
  }
  console.log(url)
  if (url[0].includes("ww") && url[0].includes("http")) { //for ww3 urls just in case, but will break if ww is in the domain name
    return url[1]
  }
  else if (url[0].includes("http")) {
    return url[0].substring(url[0].lastIndexOf("/") + 1)
  }
  else if (url[0].includes("ww")) {
    return url[1]
  }
  else {
    return url[0]
  }
}

/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
*/

//Given a string that has a "-" or "_" between each word
//We return the string camelcased without characters between words and without changing camelcasing the first word
//("The-Stealth-Warrior"), "TheStealthWarrior"
//Since there are two different ways we will end up splitting the strings, we will want a conditional. After the split, we will map each value and capitalize it as long as it is not the first word
const toCamelCase = str => str.indexOf("-") != -1 ?
    str.split("-").map((value, index) => index != 0 ? value.split("").map((val, ind) => ind === 0 ? val.toUpperCase() : val).join("") : value).join("")
    : str.split("_").map((value, index) => index != 0 ? value.split("").map((val, ind) => ind === 0 ? val.toUpperCase() : val).join("") : value).join("")

/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].

Found another way to do it online that is more efficient
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}
*/

snail = function(array) {
  //We are given a matrix that could have an array of one number or be completely empty
  //We return an array with each number in the array, but we count them clockwise with the most outer numbers counted first like a spiral (snail)
  //([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [1, 2, 3, 6, 9, 8, 7, 4, 5]
  //I had some difficulties trying to find a way to count all the numbers on each side repeatively. I ended up keeping track of each end value and then counting each side separately
  if (array[0].length === 0) {return array[0]}
  
  let length = 0
  array.forEach(value => value.forEach(val => length++))
  let answer = []
  
  if (length === 1) {
    answer.push(array[0][0])
    return answer
  }
  
  let beginning = 0
  let end = array.length - 1
  let last = array[0].length - 1
  let first = 0
  
  for (let i = 0; i < length/2; i++) { //keep doing until done, could be more efficient/specific
    array[beginning].forEach((value, index) => index >= first && index <= last ? answer.push(value) : undefined)//push top row
    beginning++
    
    array.forEach((value, index) => index >= beginning && index <= end ? answer.push(value[last]) : undefined) //push right side
    last--
    if (answer.length >= length) {return answer}
    
    for (let j = last; j >= first; j--) {//push bottom
      answer.push(array[end][j])
    }
    end--
    if (answer.length >= length) {return answer}
    
    for (let k = end; k >= beginning; k--) {//push left
      answer.push(array[k][first])
    }
    first++
  }
}

/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/

function incrementString (string) {
  //We are given a string that could be empty, have letters, have numbers, or have letters and numbers
  //We return the string with the number incremented. If there is no number, we add one
  //("foobar099"), "foobar100"), ("foo"), "foo1")
  //So the first thing I want to do is separate the numbers from the letters just to make some things a little easier to manage
  //Will add a number if there isn't one, increment the first number if it is < 9, change 9s to 0s starting from the back until you reach another number or end of numbers and adjust
  //Then concat string and adjusted number
  
  
  string = string.split("").map(value => isNaN(Number(value)) ? value : Number(value))
  const num = value => typeof value === "number";
  
  let number = [], count = 0
  if (string.findIndex(num) != -1) { //if there is a number in the string
    for (let i = string.findIndex(num); i < string.length; i++) {
      number.push(string[i])
      count++
    }
    for (let i = 0; i < count; i++) {
      string.pop()
    }
  }
  else{ //push 1 to the number array since there are no numbers in the string
    number.push(1)
    return string.concat(number).join("")
  }
  
  if (number[number.length-1] < 9 || number.length === 1) { //if there is just one number and it is < 9, just increment it
    number[number.length-1]++
  }
  else {
    let length = number.length-1
    while (number[length] > 8) { //change all 9's starting from the end of the string until you hit something that is not 9 or the end of the array
      number[length] = 0
      length--
    }
    if (number[length+1] === 0 && length + 1 === 0) {// if 999, then change the first number to 10 since all the other 9's are 0s now
      number[length+1] = 10
    }
    else {//icrements the number befeore all the 9's so 003999 would be 004000 (9's are 0s now due to while loop)
      number[length]++
    }
  }
  return string.concat(number).join("")
}

/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

function zeros (n) {
  //Thank you Purple Math for the help, https://www.purplemath.com/modules/factzero.htm
  //Given a number N that we need to find the number of trailing zeros of N!, can be 0
  //We return a number
  //(30), 7, "Testing with n = 30"
  //After some searching, I found that the easiest way is to divide n by each power of 5, 5, 25, 125..etc until the 5^power > N, add the totals together and that's your answer
  
  if (n < 5) {return 0}
  let power = 1, answer = 0
  while (5**power <= n) {
    answer += Math.floor(n/(5**power))
    power++
  }
  return answer
}

/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
*/

function score( dice ) {
  //We are given an array of 5 numbers, which are the results of rolling a 6 sided die 5 times
  //We count up the points made by rolling the dice according to the rules of Greed
  //[2, 4, 4, 5, 4] ) == 450
  //at first I was thinking of sorting it and checking that way, but I decided to just make an array and fill it up with the amount of times each number was rolled. I then checked if there were any 3's and if not, we just counted 1's and 5's
  let diceCount = new Array(6).fill(0)
  for(let i = 0; i < dice.length; i++) {
    diceCount[dice[i]-1]++
  }
  //if there are any pairs of 3, then we add points
  let score = 0
  for ( let i = 0; i < diceCount.length; i++) {
    if (diceCount[i] >= 3) {
      if (i === 0) {score = 1000}
      else {score += (i+1) * 100}
      diceCount[i] = diceCount[i] - 3 //in case we roll 5 of one number, we can still count the other two
    }
  }
  //any 1's or 5s's
  score += diceCount[0] * 100
  score += diceCount[4] * 50
  return score
}

/*
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
*/

function diamond(n){
  //We are given a number n, which could be positive, negative, or 0, but is a whole number
  //We return a string that will create a diamond when put into a text document
  //(5), "  *\n ***\n*****\n ***\n  *\n"
  //At first I was going to just loop and create each each row, but instead chose to start from the middle since all I would need to do is remove two "*", add a space for each diamond row, and then add the new line

  if (n < 0 || n % 2 === 0) {return null}
  let midpoint = "*".repeat(n) + "\n", answer = midpoint, space = 1

  while (midpoint.length >= 3) {
    let next = " ".repeat(space) + midpoint.substring(2)
    answer = next + answer + next
    midpoint = midpoint.substring(2)
    space++
  }
  return answer
}

/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

Saw this version online
function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
  }
}
*/

function sumPairs(ints, s) {
  //We are given an array of numbers that are whole numbers, but can be even or odd. We are given a number as well that is a whole number that is positive or negative
  //we return the first two values in the array that add up to s, but both numbers must the lower than the max index of any answer (see below)
  //[10, 5, 2, 3, 7, 5], 10), [3, 7] the second 5 is further out than both 3 and 7 so we choose 3 and 7
  //Since order matters, we cannot sort the array. I tested it by just doing a loop to check all possible values and that worked for most test cases other than the large array ones
  //After that, decided to remove all duplicate numbers, except for ones that are s/2 since they would add up to s
  //I made two versions that worked, one that just ignores s/2 values when removing duplicates and one that keeps track of that value and removes all duplicates

  let answers = []
  
  ints = ints.filter((value, index) => ints.indexOf(value) === index || value === s/2) //remove duplicates except if the duplicate is s/2 while keeping order
  
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        answers.push([i, j])
      }
    }
  }
  
  if (answers.length === 0) {return undefined}
  answers = answers.sort((a, b) => a[1] - b[1], 0)
  return [ints[answers[0][0]], ints[answers[0][1]]]
}

function sumPairs(ints, s) {
  
  let answers = [], mid
  if (s % 2 === 0) { //if even
    if (ints.indexOf(s/2) !== ints.lastIndexOf(s/2)) {//if s/2 exists twice, we add to answers
      answers.push([ints.indexOf(s/2), ints.indexOf(s/2, s/2) ])
      mid = ints.indexOf(s/2) //keep track of index of s/2 
    }
  }
  ints = ints.filter((value, index) => ints.indexOf(value) === index) //remove duplicates
  
  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[i] + ints[j] === s) {
        answers.push([i, j])
      }
    }
  }

  if (answers.length === 0) {return undefined}
  if (answers.length === 1) {
    if (answers[0][0] === mid) {
      return [s/2, s/2]
    }
    else {return [ints[answers[0][0]], ints[answers[0][1]]]}
  }

  answers = answers.sort((a, b) => a[1] - b[1], 0)
  
  if (answers[0][0] === mid) {return [s/2, s/2]}
  
  return [ints[answers[0][0]], ints[answers[0][1]]]
}

/*
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
*/

function sortArray(array) {
  //We are given an array of numbers or an empty array
  //We are returning an array with the even numbers in the same spot, but odd numbers are sorted
  //([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]
  //So the easiest way I can think of is to first make an array of the odd numbers and sort them, and them map map each odd number and assigning it to the sorted.shift value
  
  let odd = array.filter(value => value % 2 !== 0)
  odd = odd.sort((a, b) => a - b)
  return array.map(value => value % 2 !== 0 ? value = odd.shift() : value)
}

/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  //We are given a string words that are all lowercase
  //We need to return the word that has the highest score. Each letter has a score of it's position in the alphabet, a = 1, b = 2, etc.
  //('man i need a taxi up to ubud'), 'taxi'
  //I wanted to create an object that we can use as a way to look up the score of each letter and then loop each word and letter. Then I'll shove the sum of each word in an array, find the max, and the return the word in that same index. 
  
  let Score = {
    "a" : 1,
    "b" : 2,
    "c" : 3,
    "d" : 4,
    "e" : 5,
    "f" : 6,
    "g" : 7,
    "h" : 8,
    "i" : 9,
    "j" : 10,
    "k" : 11,
    "l" : 12,
    "m" : 13,
    "n" : 14,
    "o" : 15,
    "p" : 16,
    "q" : 17,
    "r" : 18,
    "s" : 19,
    "t" : 20,
    "u" : 21,
    "v" : 22,
    "w" : 23,
    "x" : 24,
    "y" : 25,
    "z" : 26
  }
  
  let sum = 0, scores = []
  
  x.split(" ").forEach(value => {
    value.split("").map(letter => sum += Score[letter])
    scores.push(sum)
    sum = 0
  })
  
  x = x.split(" ")
  
  let index = scores.indexOf(Math.max(...scores))
  return x[index]
}

/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.

Saw online afterwards that someone else use charCodeAt and charCodeFrom to find where to start and just looped through the ASCII table
*/

function findMissingLetter(array) {
  //We are given an array of letters that are either all uppercase or lowercase and will have at least two letters
  //We need to find the missing letter and return it as uppercase if the array was uppercase, or lowercase if...
  //(['O','Q','R','S']), 'P'
  //The first thing I thought of was first checking was if array[0] === array[0].toUpperCase() to see if the array was lowercase or uppercase. After, I would remove all letters in an alphabet array until I reached array. Then I will .shift() each array until the first element is not equal to the first element in the other array and then return that difference in the alphabet array.
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v" , "w", "x", "y", "z"]
  if (array[0] === array[0].toUpperCase()) {
    while (array[0] !== alphabet[0].toUpperCase()) {
      alphabet.shift()
    }
    while (array[0] === alphabet[0].toUpperCase()) {
      array.shift()
      alphabet.shift()
    }
    return alphabet[0].toUpperCase()
  }
  else {
    while (array[0] !== alphabet[0]) {
      alphabet.shift()
    }
    while (array[0] === alphabet[0]) {
      array.shift()
      alphabet.shift()
    }
    return alphabet[0]
  }
}

/*
Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
*/

function isPrime(num) {
  //We are given a number that is a whole number, can be zero, and can be negative or positive
  //We return true of false depending on whether that number is prime or not
  //(73), true, "73 is prime"
  //Since prime numbers are numbers only divisible by 1 and itself, we can loop from 2 until n-1, but that is not efficient enough for this task. So a way to do it more efficiently is to check a factor of n, (sqrt(n))
  
  if (num <= 1) {return false}
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {return false}
  }
  return true
}

/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
*/

function longestConsec(strarr, k) {
  //We are given an array of strings that could be empty. We are also given a number that is a whole number, but can be negative, 0, or positive.
  //We need to return k consecutive strings in the array such that it is the largest length of k consecutive strings
  //["zone", "abigail", "theta", "form", "libe", "zas"], 2), "abigailtheta"
  //So what I want to do is make a nested for loop to create a new array of strings that have all the posibile string combinations in it. After that, I would go through each item in the array and find the max string length in the array
    if (k > strarr.length || k <= 0) {return ""}
  
    let string = "", answers = []
    for (let i = 0; i < strarr.length - k + 1; i++) {
      for (let j = i; j < i + k; j++) {
        string += strarr[j]
      }
      answers.push(string)
      string = ""
    }
  
  return answers.reduce((a, b) => a.length >= b.length ? a : b)
}

/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count (string) {
  //We are given a string that can be empty
  //We are returning an object that has each character of the string in it as the key and the value is the amount of time it occurs in the string
  //("aba"), { a: 2, b: 1 }
  //So what I want to do is create an empty object and then use split("").forEach() to check if a value is in the object and if it is, I'll increment it and if not, I'll add it
  let Count = {}
  string.split("").forEach(char => {
      if (char in Count) {Count[char]++} //the in operator is great for single characters, but it checks prototypes as well so it can cause problems
      else {Count[char] = 1}
  })
  return Count
}

/*
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
*/

function comp(array1, array2) {
  //We are given two arrays of numbers that could be different sizes, null, or empty
  //We return true if there array2 contains a unique index of each number in array1 squared, else return false
  /*
  a1 = [121, 144, 19, 161, 19, 144, 19, 11];
  a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
  comp(a1, a2), true)  
  */
  //So what I want to do is use a for loop and check if array2 contains array1[i] and if it does, then we remove that index. We could remove it by sorting each array and using shift(), but I chose to just assign it as a empty string ""
  if (array1 === null || array2 === null) {return false}
  if (array1.length != array2.length) {return false}
  
  for (let i = 0; i < array1.length; i++) {
    if (!array2.includes(array1[i] ** 2))  {return false}
    array2[array2.indexOf(array1[i] ** 2)] = ""
  }
  
  return true
}

/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Beware: r must be without duplicates.

Saw another example that would have worked in one line, return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort()
*/

function inArray(array1,array2) {
  //We are given two arrays of strings that will not be empty
  //We return each string in array1 in alphabetical order if it is a substring of a string in array2
  /*
  a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  a1 = ["xyz", "live", "strong"]
  inArray(a1, a2), ["live", "strong"]
  */
  //What I want to do is filter array1 so that each value includes something in array2. array.includes only returns true if the entire value is in the array and not just a substring though so we need to loop through array2 instead to check and then sort everything
  
  return array1.filter(value => {
    for (let i = 0; i < array2.length; i++) {
      if (array2[i].includes(value)) {
        return value
      }
    }
  }).sort()
}

/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour. Young B knows she runs faster than A, and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B's speed is 850 feet per hour. How long will it take B to catch A?

More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim, Pascal, COBOL, Erlang, [-1, -1, -1] for Perl,[] for Kotlin or "-1 -1 -1".

Examples:
(form of the result depends on the language)

race(720, 850, 70) => [0, 32, 18] or "0 32 18"
race(80, 91, 37)   => [3, 21, 49] or "3 21 49"

Note:
See other examples in "Your test cases".

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

** Hints for people who don't know how to convert to hours, minutes, seconds:

Tortoises don't care about fractions of seconds
Think of calculation by hand using only integers (in your code use or simulate integer division)
or Google: "convert decimal time to hours minutes seconds"
*/

function race(v1, v2, g) {
  //We are given v1, v2, and g which should be numbers >= 0
  //We need to return the amount of time it takes for v1 to catch up to v2 while v1 has a lead of g and it is measured in speed per hour
  //Examples above in description
  //First I need to calculate the value of x at the intersection of both lines and after that, I can calculate the time and push it into the array
  
  if (v1 >= v2) {return null}
  if (v1 === 0 || v2 === 0) {return null}
  
  let time = g / (v2-v1)

  let timeArray = []
  timeArray.push(Math.floor(time%60%60))
  timeArray.push(Math.floor(time*60%60))
  timeArray.push(Math.floor(time*60*60%60))
  return timeArray
}

/*
Having created a function NamedOne which takes first & last names as parameters and returns an object with firstName, lastName and fullName ( = firstName + a space + lastName ) properties which should be all accessibles, we discovered that "accessible" also means "mutable".

If, for example, we've got a "NamedOne" like this :

var namedOne = new NamedOne("Naomi","Wang")
namedOne.firstName // -> "Naomi"
namedOne.lastName  // -> "Wang"
namedOne.fullName  // -> "Naomi Wang"
...properties may be changed :

namedOne.firstName = "John"
namedOne.firstName // -> "John"
namedOne.lastName = "Doe"
namedOne.lastName  // -> "Doe"
...but all properties are not updated !

namedOne.fullName  // -> "Naomi Wang" 
//-- Oh no ! we want fullName == "John Doe" now !
Your mission:
So the purpose of this kata is to create an object with accessible and "updatable" (can i say that?) properties.

If .firstName or .lastName are changed, then .fullName should also be changed
If .fullName is changed, then .firstName and .lastName should also be changed.
Note : "input format" to .fullName will be firstName + space+ lastName. If given fullName isn't valid then no property is changed.

Examples:
var namedOne = new NamedOne("Naomi","Wang")

namedOne.firstName = "John"
namedOne.lastName = "Doe"
// ...then...
namedOne.fullName // -> "John Doe"

// -- And :
namedOne.fullName = "Bill Smith"
// ...then...
namedOne.firstName // -> "Bill"
namedOne.lastName  // -> "Smith"

// -- But :
namedOne.fullName = "Tom" // -> no : lastName missing
namedOne.fullName = "TomDonnovan" // -> no : no space between first & last names
namedOne.fullName // -> "Bill Smith" (unchanged)
Can you change our function to create such a NamedOne object ?
*/

class NamedOne {
  //We are given the first and last name of someone and they will change the first name, last name, and possibly both by using NamedOne.firstName... etc
  //We will return NamedOne.fullName if it they provided a new first and or last name (last name must be two words with a space between them)
  //Named One("John". "Doe") NamedOne.fullName = "Juan Herrero" => "Juan Herrero"
  //So the first thing I chose to do was to make everything into a class so I an use set and get. I then found out that they gave some names for fullName that were just one word and had to use an if statement to fix that

  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  
  get fullName() {
    return this.firstName + " " + this.lastName
  }
  
  set fullName(newName) {
    let arrayName = newName.split(" ")
    if (arrayName[1] != undefined) {
      this.firstName = arrayName[0]
      this.lastName = arrayName[1]
    }
  }
}

/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
*/

//We are given an array of objects
//We return an array of objects, but we add the property usersAnswer : null to it
//questions[0].usersAnswer === null   true
//Decided to just use a forEach loop to add each to each index

questions.forEach((value, index) => questions[index].usersAnswer = null)

/*
Greetings, warrior! In this kata you will learn, how Object.create method does its job.

First over, what does it do? The signature of Object.create is like this:

//throws TypeError
//returns newly created object
Object.create(prototype, [properties])
Object.create serves to create new object that inherits given prototype and has properties being defined by "properties" parameter set on it. Parameters values must meet following requirements:

prototype parameter should be some object1 (i.e. a non-primitive value) or null (but not undefined!). If bad value passed for prototype, error TypeError must be thrown.

properties parameter can be of any type or omitted at all.

As a result of execution, Object.create will return a newly created object with inner property [[Prototype]]2 set to value of prototype parameter. If properties parameter is passed and is not undefined, then Object.create will make call Object.defineProperties(obj,properties), where obj is the object to be returned by Object.create.
*/

Object.create = function(prototype, properties) {
  //We are given values prototype and properties that could be objects, null, or undefined
  //We are making a function to replace Object.create and return an object with prototype and property values if they exist or we throw a type error if the prototype is not an object
  //Look at description above for examples/details
  //First thing we need to do is make sure the prototype is the correct type and then we can create an object, set the prototype, add the properties if any, and return
  
  if (typeof prototype !== "object") {throw new TypeError}
  
  let obj = new Object
  Object.setPrototypeOf(obj, prototype)
  if (properties !== undefined) {Object.defineProperties(obj, properties)}
  return obj
}

/*
You're given a string containing a sequence of words separated with whitespaces. Let's say it is a sequence of patterns: a name and a corresponding number - like this:

"red 1 yellow 2 black 3 white 4"

You want to turn it into a different string of objects you plan to work with later on - like this:

"[{name : 'red', id : '1'}, {name : 'yellow', id : '2'}, {name : 'black', id : '3'}, {name : 'white', id : '4'}]"

Doing this manually is a pain. So you've decided to write a short function that would make the computer do the job for you. Keep in mind, the pattern isn't necessarily a word and a number. Consider anything separeted by a whitespace, just don't forget: an array of objects with two elements: name and id.

As a result you'll have a string you may just copy-paste whenever you feel like defining a list of objects - now without the need to put in names, IDs, curly brackets, colon signs, screw up everything, fail searching for a typo and begin anew. This might come in handy with large lists.
*/

function wordsToObject(input) {
  //We are given a string such that every two words (strings seperated by a space) are two different propreties for an object. We are also given a special string format similar to an array of objects that we must use to return as well
  //We are returning a string in a specific format with the given properties in it
  // "red 1" -> [{name : 'red', id : '1'}]
  // The tags for this kata hint at using a regular expression, but I instead used a if statement. Since there can be multiple objects, I want to use a for loop and we will need a different if statement to add to the string depending on if it is the first object, a middle object, or the last object. I will need a special case as well if there will be only one object
  
  input = input.split(" ")
  let string = ""
  
  if (input.length === 2) {
    string = `[{name : '${input[0]}', id : '${input[1]}'` + "}]"
    return string
  }
  
  for (let i = 0; i < input.length; i += 2) {
    if (i === 0) {
      string += `[{name : '${input[i]}', id : '${input[i+1]}'`
    }
    else if (i === input.length - 2) {
      string += `}, {name : '${input[i]}', id : '${input[i+1]}'` + "}]"
    }
    else {
      string += `}, {name : '${input[i]}', id : '${input[i+1]}'`
    }
  }
  return string
}

/*
Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
*/

//We are given a string that can have multiple words seperated by a space
//We are returning that same string such that every even indexed character is capitalized and odd ones are lowercase
//'This is a test'), 'ThIs Is A TeSt'
//So the first thing I thought of was using split() to sepearate each word and then split again to seperate each letter in the string. Then I would toUpperCase even indexes and toLowerCase odd characters

const toWeirdCase = string => string.split(" ").map(word => word.split("").map((char, index) => index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()).join("")).join(" ")

/*
Let us consider this example (array written in general format):

ls = [0, 1, 3, 6, 10]

Its following parts:

ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

Notes
Take a look at performance: some lists have thousands of elements.
*/

function partsSums(ls) {
  //We are given an array of numbers that are >= 0 (pretty sure there were not any negative numbers)
  //We are returning an array that contains the sum of all numbers in array[0] and array[1] will be the sum of all numbers except for the first number in the given array. Then you will continue until to remove each number from the sum and inserting it into the array you are returning
  //[0, 1, 3, 6, 10], [20, 20, 19, 16, 10, 0]
  //At first I was pushing 0 into my array and then adding each index to a sum and unshifting to the array, but it was too slow. Tried doing the reverse and calculating the largest number using Array.reduce() and then subtracting each index and pushing. That ended up being a lot faster
  
  let sum = ls.reduce((prev, curr) => prev + curr, 0)
  let sumArray = [sum]

  for (let i = 0; i < ls.length; i++) {
    sumArray.push(sum -= ls[i])
  }
  
  return sumArray
}

/*
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.
*/

function sumDigPow(a, b) {
  //We are given numbers a and b such that they are positive non zero numbers
  //We return an array of numbers between (and including) a and b such that the sum of each digit to the power of it's index is the number itself.
  //(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]      8 ^ 1 + 9 ^ 2 === 89
  //So the first thing I thought was a for loop where I would take each number, make it a string, and then split it into an array where I can reduce the number. After that, I would just check if it is equal to i.
  
  let answer = []
  
  for (let i = a ; i <= b; i++) {
    if (i === i.toString().split("").reduce((prev, curr, index) => prev + curr**(index+1), 0)) {answer.push(i)}
  }
  
  return answer
}

/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string
*/

function isValidIP(str) {
  //We are given a string
  //We are returning true or false depending of if that string is a valid IP address
  //("137.255.156.100"), true,  ('123.456.789.0'), false
  //The first thing I thought of doing was string.split(".") and making sure there are only 4 octects. Next easiest thing was checking if the value was between 0 and 255. The last two checks we had to do was making sure there were no leading 0's before a character and that each character is a number.
  
  let array = str.split(".").map(value => {
    let numCheck = value.split("")
    if (numCheck[0] == 0 && numCheck[1] != undefined) {return false} //if 0 followed by another character
    for (let i = 0; i < numCheck.length; i++) {
      if (!numCheck[i].match(/[0-9]/)) {return false} //if value is not a number
    }
    return parseInt(value) >= 0 && value <= 255 ? true : false //using parseInt makes sure that values between each octet are not blank
  })
  
  if (array.length != 4) {return false} //if there are more or less than 4 octets
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === false) {return false}
  }
  return true
}

/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Note: keep the original order of the names in the output.
*/

//We are given an array of strings
//We are return an array of strings such that the length of each string is only 4
//(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]
//Decided to just use an arrow function and the array method filter to get all the strings I need
const friend = friends => friends.filter(value => value.length === 4)

/*
There is a bus moving in the city, and it takes and drop some people in each bus stop.

You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

Take a look on the test cases.

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

//We are given an matrix such that each column has two numbers in the array, one for the amount of passengers that get on the bus and one for the amount of passengers that get off
//We return the number of people left on the bus after all columns have been counted
//[[10,0],[3,5],[5,8]]), 5
//Decided to use array.map to get the total amount of people we add or subtract from the total and then used reduce to add up each total

var number = function(busStops){
  return busStops.map(value => value[0] - value[1]).reduce((prev, curr) => prev + curr, 0)
}

/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
*/

function divisors(integer) {
  let answer = []
  for (let i = 2; i <= integer/2; i++){
    if (integer % i === 0) {answer.push(i)}
  }
  if (answer.length === 0) {return `${integer} is prime`}
  return answer
}

/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

sz is <= 0 or if str is empty return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:
revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
*/

//We are given a string of numbers and a number (sz)
//We return a string such that every substring of size sz is checked to see if the sum of each digit cubed in the substring is even or odd and if it is odd, we shift that substring to the left, else we reverse the entire substring. We then return the concatination of each of those substring of size sz even the given string is longer.
//revrot(s, 5), "330479108928157"
//I decided to do a for loop x times where x is the amount of times sz goes into str.lenght rounded down so we know how many times we need to check each substring. I then checked if the sum of each digit cubed is odd or even and shifted or reversed the string depending on the results and pushed it into an array. I then joined the array and return the string

function revrot(str, sz) {
  if (sz === 0 || str.length < sz) {return ""}
  let count = 0, answer = []
  
  for (let i = 0; i < Math.floor(str.length/sz); i++) {
    let sub = str.substring(count, count + sz)
    if ((sub.split("").reduce((prev, curr) => prev + Math.pow(Number(curr), 3), 0)) % 2 != 0) {answer.push(sub.substring(1, sz) + sub.charAt(0))}
    else {answer.push(sub.split("").reverse().join(""))}
    count += sz
  }
  
  return answer.join("")
}

/*
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10
Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.

Found a better result that I liked that used two arrays of the worths and just multiplied the value out in the reduce statement
*/

//We are given two strings of numbers separated by a space. Each number represents a unit type that has a worth in the army
//We return a string depending on which side has the strongest army or if they are equal
// ('1 1 1 1 1 1', '1 1 1 1 1 1 1'), 'Battle Result: Evil eradicates all trace of Good'
//I decided to just split each string and use a if statement to modify the value of each number and then reduce it to get the total army power for each side and them compare them to see who the victor was.

function goodVsEvil(good, evil){
  
  let goodArmy = good.split(" ").map((value, index) => {
    value = Number(value)
    if (index === 1) {value *= 2}
    else if (index === 2 || index === 3) {value *= 3}
    else if (index === 4) {value *= 4}
    else if (index === 5) {value *= 10}
    return value
  }).reduce((prev, curr) => prev + curr, 0)
  
  let evilArmy = evil.split(" ").map((value, index) => {
    value = Number(value)
    if (index === 1 || index === 2 || index === 3) {value *= 2}
    else if (index === 4) {value *= 3}
    else if (index === 5) {value *= 5}
    else if (index === 6) {value *= 10}
    return value
  }).reduce((prev, curr) => prev + curr, 0)
  
  if (goodArmy > evilArmy) {return "Battle Result: Good triumphs over Evil"}
  if (goodArmy < evilArmy) {return "Battle Result: Evil eradicates all trace of Good"}
  return "Battle Result: No victor on this battle field"
}

/*
John has invited some friends. His list is:

s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
Could you make a program that

makes this string uppercase
gives it sorted in alphabetical order by last name.
When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:

"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
It can happen that in two distinct families with the same family name two people have the same first name too.
*/

//We are given a string of names
//We need to return the string of names such that it is sorted by last name, the entire name is capitalized, and each name has a pair of parentheses around it
//"Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill" => "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
//What I want to do is split up each person and each part of their name, push each string the way it is requried into an array, sort it, and then return it as a string

function meeting(s) {
  let names = s.split(";").map(value => value.toUpperCase()).map(value => value.split(":"))
  
  let newArray = []
  
  for(let i = 0; i < names.length; i++) {
   newArray.push(`(${names[i][1]}, ${names[i][0]})`)
  }

  return newArray.sort().join("")
}

/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.

For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.

If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/

//We are given two numbers which are the length and width of a chocolate
//We are to return the amount of times we much break chocolate in order to have each chocolate in a 1x1 square or 0 if we are not able to break the chocolate
//(5, 5) , 24
//After making the exeptions return 0, I was able to determine algorithm by looking at the test cases and answers and just had to return it after I did the math

function breakChocolate(n,m) {
  if (n <= 1 && m <= 1) {return 0}
  if (n < 1 || m < 1) {return 0}
  return (n * m) - 1
}

/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

Task
Write a function that returns both the minimum and maximum number of the given list/array.

Examples (Input --> Output)
[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]
Remarks
All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/

//We are given an array with at least on number
//We return an array with the min and then max value
//[1, 2, 3, 4, 5], [1, 5]
//Just used Math.min and Math.max with the spread opperator to interate over the array and return the values

function minMax(arr){
  return [Math.min(...arr), Math.max(...arr)]
}

/*
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

//We are given a string with at least two characters
//We return the same string without the first and last character
//('person'), 'erso'
//Decided to use substring method and just adjust the length by 1 on each side

function removeChar(str){
  return str.substring(1, str.length-1)
}

/*
Complete the solution so that it reverses the string passed into it.


*/

//We are given a string that could be empty
//We return the string with the characters reversed
//('world'), 'dlrow'
//Decided to split it into an array, reverse it, and then join it back into a string to return

function solution(str){
  return str.split("").reverse().join("")
}

/*
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

//We are given a boolean value
//We return a string, "Yes" if true, "No" if false
//See above for example
//Used a ternary operator to return it in one line and since a boolean is truthy or falsey, just needed to use the value as the conditional and return the appropriate string

function boolToWord( bool ){
  return bool ? "Yes" : "No"
}

/*
We need a function that can transform a number into a string.
*/

//We are given a number
//We are returning that number as a string
// 5, "5"
//Just used a ${} to insert the variable

function numberToString(num) {
  return `${num}`
}

/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

//We are given m, the total volume of all cubes
//We are to return how many cubes it takes to reach that volume exactly and if it is not exact, then we return -1
//(4183059834009), 2022
//So I decided to make a number that will accumulate all of the cube volumes and then used another number to increment for each cube until the volume reaches m. I would then return the amount of cubes if the accumulator is equal to m or -1 otherwise.

function findNb(m) {

  let num = 0
  let cubes = 1
  while (num < m) {
    num += cubes * cubes * cubes
    cubes++
  }

  return num === m ? cubes - 1 : -1
}

/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

//We are given an array of whole numbers or it can be empty
//We return the sum of all positive numbers in the given array
//[1,-2,3,4,5]),13
//Decided to use filter to remove all of the numbers that are not positive and then reduce to add them all together

function positiveSum(arr) {
  return arr.filter(value => value > 0).reduce((prev, curr) => prev + curr, 0)
}

/*
Very simple, given an integer or a floating-point number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/

//We are given a number
//We are to return the number as negative if it is positive or positive if it is negative
//(-10) => 10
//Just multipled the given number by -1 and returned it

function opposite(number) {
  return number * -1
}

/*
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
*/

//We are given a number
//We must return the sum of all numbers from 1 to that number
//(summation(8), 36
//Decided to just use a for loop and make a variable to keep track of the sum to return

var summation = function (num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {sum += i}
  return sum
}

/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
*/

//We are given an array of numbers
//We are returning the smallest number in the given array
//[78,56,232,12,18], 12
//Used Math.min and the spread operator to search throughout the array for the smallest number

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}

/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.

Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)

Found a regex version that would do the same thing: return /^\(\d{3}\) \d{3}\-\d{4}$/.test(phoneNumber)
*/

//We are given a string of characters
//We are returning true or false if the string matches the correct format of a phone number, ie (123) 456-7890
//(123) 456-7890"), true
//Could use regex, but using if statments would probably be easier. Decided to just split the area code and phone number into two different strings for easier checks

function validPhoneNumber(phoneNumber){
  let areaCode = phoneNumber.substring(0, 6)
  let number = phoneNumber.substring(6)
  
  //Area Code checking
  areaCode = areaCode.split("")
  if (areaCode[0] != "(" ) {return false}
  if (areaCode[4] != ")" ) {return false}
  if (areaCode[5] != " " ) {return false}
  areaCode = phoneNumber.substring(1, 4)
  if (Number.isNaN(Number(areaCode)) === true) {return false}
  
  //Phone Number checking
  number = number.split("")
  if (number.length < 8 || number.length > 8) {return false}
  if (number[3] != "-" ) {return false}
  number = phoneNumber.substring(6).split("-").map(value => Number(value))
  if (Number.isNaN(number[0]) === true ) {return false}
  if (Number.isNaN(number[1]) === true ) {return false}
  return true
}

/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
*/

//We are given a string that could contain numbers or letters
//we are returning true or false dependong on if the string is a 4 or 6 digit number using a regular expression
//("12345"),false     ("1234"),true
//We used \d{4} to match the number of digits we could use and then ^ and $ to make sure it starts and stops with only 4 or 6 digits.

function validatePIN (pin) {
  return (/^\d{4}$/.test(pin) || /^\d{6}$/.test(pin)) ? true : false
}

/*
Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).
*/

//We are given three numbers
//We are returning true if the numbers would make a triangle or false if not
//(1,2,2), true    (7,2,2), false
//A valid triangle is one wuch that every two sides added together will always be greater than the third side so I just checked that and returned true or false

function isTriangle(a,b,c) {
  return a + b > c && a + c > b && b + c > a ? true : false
}

/*
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.
*/

//We are given a number
//We are returning a string of a number that follows the series given above
//(3), "1.39"
//I will make a few lines to deal with some of the exceptions like 0 returning 0.00. Will need to use toPrecision to make sure it returns the right amount of decimals. I will then make a number that I can add three to so I can keep track of the fraction I need to add each loop.

function SeriesSum(n){
  if (n === 0) {return 0.00.toPrecision(3).toString()}
  if (n === 1) {return ((1).toPrecision(3)).toString()}
  if (n === 2) {return 1.25.toString()}

  let num = 1.25, fraction = 4
  n -= 2
  
  for (let i = 0; i < n; i++) {
    fraction += 3
    num += (1/fraction)
  }

  return num.toPrecision(3).toString()
}

/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
*/

//We are given a string that has a random combination of braces
//We return true or false on whether the string had valid braces or not
//([{}])", true
//I was going to use a loop to check and remove valid braces, but then I just decided to remove only remove valid braces and would just need to make sure I would break out of removing them if the remaining braces were not valid

function validBraces(braces){
  let temp = 0
  
  while (braces.length != 0) {
    temp = braces.length
    braces = braces.replace("()", "")
    braces = braces.replace("[]", "")
    braces = braces.replace("{}", "")
    if (temp === braces.length) {break}
  }
  
  return braces.length === 0 ? true : false
}

/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

//We are given an array of strings
//We are returning the array sorted by string string length, smallest to largest
//["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]
//Easiest way is to just use a normal sort method, but instead of just comparing values, you compare the string length

function sortByLength (array) {
  return array.sort((a, b) => a.length - b.length)  
}

/*
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero.

Remember that there can't be more than 3 identical symbols in a row.
*/

//We are number
//We are returning a string that is the number converted to Roman Numeral
//(2007), 'MMVII'
//After some researching, the best way I found to do it was to make a object I can use a search reference for each Roman Numeral. I added all Roman Numerals that I would need to add to the string including stuff like IV for 4 so it is cleaner. I then would loop each roman numeral starting from the largest and added to a string that we will return.

function solution(number) {
  
  let table = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1}
  let roman = ""
  let i = 0
  
   for ( i in table ) {
     while ( number >= table[i] ) {
       roman += i;
       number -= table[i];
     }
   }
   
   return roman;
}

/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. 
*/

//We are given a string, which is a Roman Numeral
//We return a number which is the Roman Numeral converted to a number
//'XXI', 21
//I decided to use a table of values that are possible in the string given and I put two character values first because we will be removing the values. Will make a loop to iterate the object and another loop to remove multiple characters of the same character. Will use the value of the key to add to the number that we return each time we do so.

function solution (roman) {
  let table = {CM:900, CD:400, XC:90, XL:40, IX:9, IV:4, M:1000, D:500, C:100, L:50, X:10, V:5, I:1}
  let number = 0, i = 0
  
  for (i in table) {
    while (roman.includes(i)) {
      number += Number(table[i])
      let ind = roman.indexOf(i)
      roman = roman.substring(0, ind) + roman.substring(ind + i.length)
    }
  }

   return number;
}

/*
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.
*/

//We are given a string, but we must use this.toString() to get the value since it is within an object that we get at runtime
//We return that string with no spaces and the first letter capitalized of each word that had a space between it while everything else is lowercase
//"test case".camelCase(), "TestCase"
//Will just need to split it by " " to get each word and then by "" to get each letter, change the first letter to uppercase and rest to lower case, then join them all back together and return

String.prototype.camelCase=function(){
  return this.toString().split(" ").map(value => value.split("").map((val, ind) => ind === 0 ? val.toUpperCase() : val.toLowerCase()).join("")).join("")
}

/**
* @Description Assume that "#" is a backspace and return the string after all backspaces are removed
* @Parameter We are given a string
* @Return We are returning a string
* @Example "abc#d##c"      ==>  "ac"
* @Prototype I am going to loop through it multiple times and remove the character before each "#" until there are no "#" left
*/

function cleanString(s) {
  while (s.includes("#")) {
        for (let i = 0; i < s.length; i++) {
          if (s.charAt(i + 1) === "#") {
            if (i === 0) {
              s = s.slice(2, s.length)
            }
            else {
              s = s.slice(0, i) + s.slice(i+2, s.length)
              i-=2
            }
          }
          else if (s.charAt(0) === "#") {
            s = s.slice(1, s.length)
          }
        }
  }
  return s
}

/**
* @Description - Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
* @Parameter - We are given an array of strings are actually number. Doesn't say if it could be empty, but it does include float numbers
* @Return - We are returning an array of numbers such that the strings are converted to numbers
* @Example - ["1.1","2.2","3.3"]) => [1.1,2.2,3.3]
* @Prototype - Number() can convert a string to a number and I'll use Array.map() since I want to return an array
*/

const toNumberArray = stringarray => {return stringarray.map(value => value = Number(value))}

/**
* @Description - Given a string of numbers and characters, return the largest group of numbers in the string
* @Parameters - string. Does not say if it could be empty.
* @Return - number
* @Example - 'gh12cdy695m1' => 695
* @Prototype - Was thinking of converting to an array and then filtering, but would have to still go through each element to gather the full number and would need to make sure the numbers do not combine. Decided to just loop through the string and keep track of the largest number. Regex would probably be good for this.
*/

function solve(s){
  let answer = "", temp = ""
  for(let i = 0; i < s.length; i++) {
    if (!isNaN(Number(s.charAt(i)))) {
      temp += s.charAt(i)
      if (temp > answer) {answer = Number(temp)}
    }
  else {temp = ""}
  }
  return answer
};

/**
* Description - If there are more uppercase letters in the string, return the string with all characters as uppercase, else have all characters be lowercase
* Parameters - string of letters, doesn't say if it can be empty
* Return - string of characters as all lowercase or uppercase depending on how many of each was in the original string
* Example - "COde" => "code"
* Prototype - Decided to use a forEach loop to increment a value for each uppercase and lowercase value and then return the correct string based on the result. Could make it more efficient by incrementing until there one of the values is equal to string.length.
*/

function solve(s){
  let upper = 0, lower = 0
  s.split("").forEach(value => value === value.toLowerCase() ? lower++ : upper++)

  if (upper > lower){
    return s.split("").map(value => value = value.toUpperCase()).join("")
  }

  else {
    return s.split("").map(value => value = value.toLowerCase()).join("")
  }
}

/**
* @Description - Given a string, reverse every other word in the string and remove any whitespace before and after the string.
* @Parameters - We are given a string that can just be spaces
* @Return - We return the resulting string after following the info above
* @Example - "I really don't like reversing strings!" => "I yllaer don't ekil reversing !sgnirts"
* @Prototype - Can use trim() to remove any extra white space before and after the string. Can check if the index is even and then change the string into an array and reverse it to get the correct strings.
*/

const reverse = str => str.trim().split(" ").map((value, index) => index % 2 === 0 ? value : value.split("").reverse().join("")).join(" ")

/**
* Description - Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated.
* Parameter - Given a string that has no spaces in it and are valid strings
* Return - String that follows the above rules
* Example - "CodeWars" => "CdWr oeas"
* Prototype - Chose to just make two filters and add them together
*/

function sortMyString(S) {
  let even = S.split("").filter((value, index) => index % 2 === 0).join("")
  let odd = S.split("").filter((value, index) => index % 2 === 1).join("")
  return even + " " + odd
}

/**
* @Description - Given a hex string, convert it to rgb and return it as an object
* @Parameters - We are given a hex string that has a # in front
* @Return - We are return an object that has the letter of each color of rgb and the number value for it
* @Example - "#FF9933" => {r:255, g:153, b:51}
* @Prototype - I first converted my string into an array because it is easier to access the values. I then would take each two numbers/characters and convert it from base 16 (hex) to base 10 (normal numbering system). Will then put each of those in an object to return.
*/

function hexStringToRGB(hexString) {
  hexString = hexString.split("")
  let red = parseInt((hexString[1] + hexString[2]), 16)
  let green = parseInt((hexString[3] + hexString[4]), 16)
  let blue = parseInt((hexString[5] + hexString[6]), 16)
  
  const Rgb = {}
  Rgb.r = red
  Rgb.g = green
  Rgb.b = blue
  
  return Rgb
}

/**
* @Description - given a string of words, return the string such that each word is turned inside out (the left and right sides are reversed).
* @Parameters - we are given a string of words
* @Return - we return a string of words
* @Example - 'take me to semynak' => 'atek me to mesykan'
* @Prototype - What I chose to do was change the entire string to an array and map it. I then took each element and then sliced, split, reversed, and joined each side and then recombined it into a single string. Would need to just make sure I check if the string has an odd or even number of characters since we would have to add the middle character if it is odd.
*/

function insideOut(x){
  return x.split(" ").map(value => {
    if (value.length % 2 === 0) {
      return value.slice(0, Math.floor(value.length/2)).split("").reverse().join("") + value.slice(value.length/2).split("").reverse().join("")
    }
    else {
      return value.slice(0, Math.floor(value.length/2)).split("").reverse().join("") + value.charAt(Math.ceil(value.length/2) - 1) + value.slice(Math.ceil(value.length/2)).split("").reverse().join("")
    }
  }).join(" ")
}

/**
* @Description - Given an array of strings, remove all duplicate consecutive characters in the string.
* @Parameters - We are given an array of strings.
* @Return - We return an array of strings following the description.
* @Example - ["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"] => ['codewars','picaniny','hubububo']
* @Prototype - At first I thought about filtering out the duplicates, but instead I just made a temp array and pushed each character in the string into it and I would change the character I am looking at until it is not the previous character push.
*/

function dup(s) {
  for(let i = 0; i < s.length; i++) { //for each string in s array
    let temp = []
    s[i] = s[i].split("")
    
    for (let j = 0; j < s[i].length; j++) { //for each char in each string
      temp.push(s[i][j]) //Push it once
      if (s[i][j] === s[i][j+1]) { //if next char is equal to current char, change spot we are looking at in the array
        while (s[i][j+1] === temp[temp.length-1]) {j++}
      }
    }
    
    s[i] = temp.join("")
  }
  return s
}

/**
* @Description - Convert a PascalCase String to snake_case
* @Parameters - We are given a stirng in the format of PascalCase, but we can also just be given a number
* @Return - We return the given information as a string in snake_case, including if it is a number
* @Example - "App7Test" => "app7_test"
* @Prototype - Instead of making it a little messy with slicing the string up, I decided to change the string into an array and then push each character into a an array that we would return until we reached an uppercase letter, in which we would push "_" and the value as lowercase. Would then return the temp array as a string.

Found this solution that was pretty cool
  var toUnderscore;

  toUnderscore = function(string) {
    return string.toString().split(/(?=[A-Z])/).join('_').toLowerCase();
  };
*/

function toUnderscore(string) {
  if (Number.isInteger(string)) {return string.toString()}
  string = string.split("")
  let snakeString = []
  for(let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase() && !Number.isInteger(Number(string[i]))) {
      if (i === 0) {snakeString.push(string[i].toLowerCase())}
      else {snakeString.push("_" + string[i].toLowerCase())}
    }
    else {snakeString.push(string[i])}
  }
  return snakeString.join("")
}

/**
* @Description - Given a string, return that string as a number
* @Parameters - We are given a string
* @Return - We return a number
* @Example - "437" => 437
* @Prototype - Decided to use the Number method to change the string into a number
*/

const stringToNumber = function(str){
  return Number(str)
}

/**
* @Description - Given a boolean value, covert it to a string
* @Parameters - We are given a boolean value
* @Return - We return the string "true" or "false" depending on the boolean value
* @Example - true => "true"
* @Prototype - Decided to just use a ternary operator to return the correct value since we only had two options that it could be
*/

function booleanToString(b){
  return b ? "true" : "false"
}

/**
* @Description - We are given a string that could be empty and need to return the sum of both numbers in the string as a string
* @Parameters - We are given two strings that could be empty, in which we would treat them as 0
* @Return - We return the string that contains both numbers given to us added together
* @Example - ("4","5") => "9"
* @Prototype - I decided to use Nummber() to change the string into a number and use || 0 in case it is empty. Then I added them together, changed them to a string, and returned it
*/

function sumStr(a,b) {
  return ((Number(a) || 0 ) + (Number(b) || 0)).toString()
}

/**
* @Description - We are given a string inside an object and must return true if the entire string is uppercase or false otherwise
* @Parameters - Technically there isn't a parameter since we are making a prototype, but we are using a string that can contain any character
* @Return - We return true if all characters are uppercase or false otherwise
* @Example - '#lovewins' => false, 'BOB WALKS HIS DOG EVERY DAY." => true
* @Decided to use a loop and change the string into an array. I checked to see if each letter matched the lowercase equivelent. Then I checked if the lowercase matched the uppercase equivelent to determine if the character was a special character so we could ignore it. If any loop failed, it returned false or it would return true at the end.
*/

String.prototype.isUpperCase = function() {
  let temp = this.split("")

  for (let i = 0; i < temp.length; i++) {
    if (temp[i].toLowerCase() === temp[i] && temp[i].toLowerCase() != temp[i].toUpperCase()) {
      return false
    }
  }
  return true
}

/**
* @Description - Given a string, return it such that all uppercase letters are lowercase and vise versa and that the words are in the reverse order. You will hae to handle extra spaces and spaces that are trailing or leading as well.
* @Parameters - We are given a string. Description did not say if it could be empty or not
* @Return - We return the same string following the description above
* @Example - 'Example string' => 'STRING eXAMPLE'
* @Prototype - So the first thing I thought of was just switching the string to an array so I can map it and return the value as lowercase if it is uppercase and vice versa. Then I would just reverse the array before I join it back into a string.
*/

const stringTransformer = str => str.split(" ").map(value => value.split("").map(val => val === val.toUpperCase() ? val.toLowerCase() : val.toUpperCase()).join("")).reverse().join(" ")

/**
* @Description - We are given an array of numbers and need sort them such that the first value is the max value, the second value is the min value, the third value is the second max value, and so on
* @Parameters - We are given an array of numbers
* @Return - We return that same array of numbers sorted
* @Example - [15,11,10,7,12] => [15,7,12,10,11]
* @Prototype - I was going to just loop and find the min and max multiple times, but that would be costly so I just sorted the array and grab values from it. I ended up using a if statement to determine if there was an even or odd amount and them popped and pushed the values appropriately depending on the amount of values in the array into a new array that I would return.
*/

function solve(arr){
  arr = arr.sort((a, b) => a - b)
  let answerArr = []
  
  if (arr.length % 2 === 0) {
    while (arr.length > 0) {
      answerArr.push(arr.pop())
      answerArr.push(arr.shift())
    }
  }
  else {
    while (arr.length > 1) {
      answerArr.push(arr.pop())
      answerArr.push(arr.shift())
    }
    answerArr.push(arr.pop())
  }
return answerArr
}

/**
* @Description - We are given two arrays and need to return the sum of both arrays added together as if the entire array was the number we added
* @Parameters - We are given two arrays that can be empty
* @Return - We return an array following the info above. If the number is negative, the first number in the array would be negative
* @Example - [3,2,9], [1,2] => [3,4,1]
* @Prototype - I decided to first get the number I needed to put into an array. I then just change the number into a string and split it to return postiive numbers. I did the same thing for negative numbers, but I had to change it to a positive number first and then change the first value in the array to negative before returning. Also had to add a check for empty array to return [].
*/

function addArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0) {return []}
  let array = Number(array1.join("")) + Number(array2.join(""))
  if (array < 0) {
    array *= -1
    array = array.toString().split("").map(value => Number(value))
    array[0] *= -1
    return array
  }
  else {
    return array.toString().split("").map(value => Number(value))
  }
}

/**
* @Description - Given two arrays, return them merged together, sorted, and without duplicates
* @Parameteres - We are given two arrays of numbers that can be empty
* @Return - We return one sorted array without any duplicates
* @Example - [1,2,3,4], [5,6,7,8] => [1,2,3,4,5,6,7,8]
* @Prototype - I will use concat to merge them together. I will use the filter method to filter out any duplicates by checking if current index is the first index of the value. Then I will use the sort method, which will take a little less time since we removed the duplicates first.
*/

const mergeArrays = (arr1, arr2) => arr1.concat(arr2).filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => a - b)

/**
* @Description - given an array, sort it in lexicographical order
* @Parameters - We are given an array of strings
* @Return - We return that same array of strings sorted as stated above
* @Example - ['one', 'two', 'three' ] => ["one", "three", "two"]
* @Prototype - At first I thought localecompare would work when using sort, but it is not exactly the same. Found out that the normal sort method actually sorted it in lexicographical order and used that.
*/

/**
* @Description - Write a function that determines whether the passed in arrays are similar. Similar means they contain the same elements, and the same number of occurrences of elements.
* @Parameters - two arrays of characters that can most likely be empty
* @Return - true or false depending on if the arrays are similar or not
* @Example - [1, 2, 3, "4"], [1, 2, 3, 4] => false
* @Prototype - So I thought about making a hash map for each array, but I don't think it wouldn't be much more efficient with the way I'm thinking and it would take up more memory so I just sorted each array and checked if the index of both arrays were equal and if not, we would return false.
*/

function arraysSimilar(arr1, arr2) {
  arr1 = arr1.sort()
  arr2 = arr2.sort()
  if (arr1.length != arr2.length) {return false}
  let i = 0
  while (arr1[i] === arr2[i]) {
    if (i === arr1.length) {return true}
    i++
  }
  return false
}

/**
* @Description - given a string in the format name-yymm, and we must sort it by yymm (four numbers) and then by name (random string), but keep the original format
* @Parameters - We are given an array of strings in the format name-yymm
* @Return - We return that same array of strings, but sorted by yymm and then by name
* @Example - ["web-1305","site-1305","web-1304","site-1304"] => ["site-1304", "web-1304", "site-1305", "web-1305"]
* @Pseudo - The first thing i thought of was changing thing string around, sorting it, and then readjusting the string. I was able to do that, but the sort was not quite right due to the string having uppercase and lowercase values. I changed them all to lowercase during the sort comparison to fix that. Found out later that the localecompare() method did the same thing.
*/

const sortme = function( courses ){
  courses = courses.map(value => value.split("-").reverse().join("-"))
  courses = courses.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
    return 0;
  })
  return courses.map(value => value.split("-").reverse().join("-"))
}

/**
* @Description - Given a mathematical expression as a string, you must return the result as a number. Given string will always be a valid expression. Negative numbers will have no white space between the "-" and the number itself.
* @Parameters - We are given a string that represents a valid mathmatical expression
* @Return - We return a number, which is the result of the mathmatical expression
* @Example - '2 / (2 + 3) * 4.33 - -6' => 7.732
* @Pseudo Code - So at first I started with just single digits and one operator. I then slowly added more things like numbers with more than one digit, negative numbers, decimal numbers, etc. Once I got that handles, I added parentheses and found some problems with some special test cases. Fixed that and eventually got it working.
*/

var calc = function (expression) {
  function doMath(expression) {
  //mult and div first
    while (expression.indexOf("*") != -1 || expression.indexOf("/") != -1) { 
      if (expression.indexOf("*") != -1) { //if we can *
        if (expression.indexOf("/") < expression.indexOf("*") != -1 && expression.indexOf("/") != -1) { //check for / and if it is before mult
          //do /
          expression[expression.indexOf("/") - 1] = (Number(expression[expression.indexOf("/") - 1]) / Number(expression[expression.indexOf("/") + 1])).toString()
          expression[expression.indexOf("/") + 1] = " "
          expression[expression.indexOf("/")] = " "
        }
        else { //do * 
          expression[expression.indexOf("*") - 1] = (Number(expression[expression.indexOf("*") - 1]) * Number(expression[expression.indexOf("*") + 1])).toString()
          expression[expression.indexOf("*") + 1] = " "
          expression[expression.indexOf("*")] = " "
        }
      }
      else { //only do /
        expression[expression.indexOf("/") - 1] = (Number(expression[expression.indexOf("/") - 1]) / Number(expression[expression.indexOf("/") + 1])).toString()
        expression[expression.indexOf("/") + 1] = " "
        expression[expression.indexOf("/")] = " "
      }
      expression = expression.filter(value => value != " ")
    }
  
    //add and sub next
    while (expression.length != 1) {
      //just stay on left side and check for + or -
      if (expression[1] === "+") {
        expression[0] = (Number(expression[0]) + Number(expression[2])).toString()
        expression[1] = " "
        expression[2] = " "
      }
      else {
        expression[0] = (Number(expression[0]) - Number(expression[2])).toString()
        expression[1] = " "
        expression[2] = " "
      }
      expression = expression.filter(value => value != " ")
    }
    return expression[0]
  }
    
  //get rid of white space
  expression = expression.split("").filter(value => value != " ")
    
  //add numbers together as strings so "123" will not be ["1", "2", "3"]
  for (let i = 0; i < expression.length; i++) {
    if (!isNaN(Number(expression[i]))) {
      let j = i+1
      while (!isNaN(Number(expression[j])) || expression[j] === ".") { //for decimals
        expression[i] += expression[j]
        expression[j] = " "
        j++
      }
    }
    expression = expression.filter(value => value != " ")
  }
    
  //adjust negative numbers
  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "-") {
      if (expression[i+1] === "-" && !isNaN(Number(expression[i + 1]))) { //if - - 1 and not - -(-4)
        expression[i+1] = " "
        expression[i+2] *= -1
      }
      else if(expression.length === 2) { //if single negative
        expression[i+1] *= -1
        expression[i] = " "
      }
      else if(!isNaN(Number(expression[i + 1]))) { //-5 + 2 and not (1 - 2)   (-5 + 2)
        if (isNaN(Number(expression[i - 1]))) {
          expression[i] = expression[i + 1] * -1
          expression[i + 1] = " "
        }
      }
      else if(expression[i - 1] === "+" || expression[i - 1] === "*" || expression[i - 1] === "/") { // 12 * - 1 etc
        if (!isNaN(Number(expression[i+ 1]))) { //"12* 123/-(-5 + 2)" so it doesn't mess with a (
          expression[i] = expression[i + 1] * -1
          expression[i + 1] = " "
        }
      }
    }
  }
  expression = expression.filter(value => value != " ")
  
  while (expression.indexOf("(") != -1) {
    let i = expression.lastIndexOf("(")
    let j = i + 1
    let temp = []
    while (expression[j] != ")") {
      temp.push(expression[j])
      expression[j] = " "
      j++
    }
    expression[j] = " " //to remove the )
    expression[i] = doMath(temp) //do math inside of ()
    if (expression[i - 1] === "-") { //if -(num)
      if (expression[i - 2] === "+" || expression[i - 2] === "-" || expression[i - 2] === "*" || expression[i - 2] === "/" || expression[i - 2] === "(") { // so (-2.5+ 11.5)-2028.25) / 20) + 11/ 11 and (1 - 2) + -(-(-(-4))) 
      expression[i] *= -1
      expression[i - 1] = " "
      }
    }
    expression = expression.filter(value => value != " ") 
  } 
  
    return Number(doMath(expression))
}

/**
* Description - We are given an object and must return an array of each property and value inside of another array.
* Parameters - We are given an object named data.
* Return - We return an array of values of each key and an array of each property name both nested in another array.
* Example - {a: 1, b: 2, c: 3}) => [['a', 'b', 'c'], [1, 2, 3]]
* Pseudo - Just used a for in loop to access the data inside of the object and pushed them into an array and returned both arrays inside of another array.
*/

function keysAndValues(data){
  let key = [], value = []
  for(const property in data) {
    value.push(property)
    key.push(data[property])
  }
  return[value, key]
}

/**
* Description - Given an array and a function that returns the array without its' last element, find out why some tests work and do not work and adjust the code to work
* Parameters - We are given an array
* Return - We return the given array without the last element
* Example - [1, 2, 3, 4, 5] => [1, 2, 3, 4]
* Pseudo - So the idea behind what pop does is correct, but I knew that the way pop() altered the array was the problem. pop() mutates the array causing two different variables to rely on a single variable, which can have issues in certain use cases. I decided to use slice instead to remove the last element.
*/

const withoutLast = (arr) => arr.slice(0, -1)

/**
* @Description - Return the missing element between two given arrays such that the second array is a copy of the first array without one element.
* @Parameters - We are given two arrays and the second one can be empty
* @Return - We return the value that is missing from array two
* @Example - [1, 2, 3], [1, 3]) => 2
* @Pseudo - I sorted both arrays so I can easily loop through them and find out which index does not match the first index. I used the filter method to return the array when they first do not equal each other and the first element will always be the one that is missing since I filter array1.
*/

function findMissing(arr1, arr2) {
  arr2 = arr2.sort()
  return arr1.sort().filter((value, index) => value != arr2[index])[0]
}

/**
* @Description - given an array of arrays, return a array of nested arrays that contain only one data type, which will be a number or string
* @Parameters - An array of arrays. Nested arrays can be empty, in which we do not include them
* @Return - An array of arrays followed the rules above
* @Example - [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]] => [[1, 5, 4], ['b']]
* @Pseudo - The first thing I thought of using was the map and every methods so I can test all nested arrays to see if they are all the same type. I made two versions. One is just a one liner and the other one just spreads it out more so it is easier to read/understand.
*/

function filterHomogenous(arrays) {
  return arrays.map(val => val.every(value => typeof value === "string") || val.every(value => typeof value === "number") ? val : "").filter(value => value.length != 0)
  
  //or
  
  let temp = []
  for(let i = 0; i < arrays.length; i++) {
    arrays[i].every(value => typeof value === "string") || arrays[i].every(value => typeof value === "number") ? temp.push(arrays[i]) : undefined
  }
  return temp.filter(value => value.length != 0)
}

/**
* @Description - Add the values of the nested arrays together starting at the shift parameter for each array and return the resulting array
* @Parameters - We are given an array of arrays that are all of the same length and contain at least one number
* @Return - We return an array following the steps in the description
* @Example - [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3 => [1,2,3,11,12,13,7,7,7]
* @Pseudo - I think there may be an easier way to use reduce to calculate it, but I ended up making a nested for loop to iterate each array. I just calculated the starting point after each array that we added and made sure we edited or made a new number when adding the next array.
*/

function addingShifted (arrayOfArrays, shift) {
  let size = arrayOfArrays[0].length //keep track of current size for calculations
  let start = shift //assign starting value for each time we add a new array
  
  for(let i = 1; i < arrayOfArrays.length; i++) { //for each nested array other than the first one that we use to return
    let k = 0 //used to determine if we added all of the elements in the nested array
    for(let j = start; j < size + start; j++) { //Start a insert postion and until we added the next nested array
      if (k + shift < size) { //if the value we are updating is currently in the array, we update it
        arrayOfArrays[0][j] += arrayOfArrays[i][k]
      }
      else { //We add a new element since the array does not have an element at that length
        arrayOfArrays[0].push(arrayOfArrays[i][k])
      }
      k++
    }
    start += shift //adjust starting position
  }
  return arrayOfArrays[0]
}

/**
* @Description - given a function that uses splice to remove the element n, find a new way to remove the element and figure out why splice does not work in some cases.
* @Parameters - We are given an array. Given information does not state if it can be empty.
* @Return - we return an array with the element at index n removed.
* @Example - [1, 2, 3, 4, 5], 4 => [1, 2, 3, 4]
* @Pseudo - The reason why it does not work is because splice mutates the array and can cause problems to sometimes occur since it is editing this. I used filter, which creates a new array so we don't have to worry about mutations.
*/

const removeNthElement = (arr, n) => arr.filter((value, index) => index != n)

/**
* @Description - We are given two arrays of strings and must return if they have the same number of unique values regardless of the value itself.
* @Parameters - We are given two arrays of strings that could be empty it seems
* @Return - We return true or false depending on the info above
* @Example - ["a","a","a","a","a","b","b","b"], ["c","c","c","c","c","d","d","d"] => true
* @Pseudo - So the first thing I needed to do is get the number of times each string occurs. I used two objects as maps to keep track of that information. I then looped both objects and pushed the value of each property into an array. I then sorted and looped through each array and if they did not equal the same value at the same index, I return false. Otherwise I returned true. Had to include a if statement in the beginning to just return false if the given arrays were of different size

Found an example online that actually used a map that was easier
  if(arr1.length !== arr2.length) return false;  
   return new Set(arr1).size == new Set(arr2).size ? true : false
*/

function balance (arr1, arr2){
  if (arr1.length != arr2.length) {return false}
  
  //obj map
  let objOne = {}, objTwo = {}
  
  arr1.forEach(value => {
    if (value in objOne) {objOne[value]++}
    else {objOne[value] = 1}
  })
    arr2.forEach(value => {
    if (value in objTwo) {objTwo[value]++}
    else {objTwo[value] = 1}
  })
  
  //shove values in an array
  let arrOne = []
  for (const property in objOne) {
    arrOne.push(objOne[property])
  }
  
  let arrTwo = []
  for (const property in objTwo) {
    arrTwo.push(objTwo[property])
  }
  
  //reduce and checking length won't work because 3,3 and 2,4 would be true. Just loop both sorted arrays and make sure they are ===
  arrOne = arrOne.sort((a, b) => a - b)
  arrTwo = arrTwo.sort((a, b) => a - b)
  
  
  for (let i = 0; i < arrOne.length; i++) {
    if (arrOne[i] != arrTwo[i]) {return false}
  }
  return true
}

/**
* @Description - We are given an array of values and must return the sum of all numbers in the array
* @Parameter - We are given an array that can have nested arrays of any depth and values that are not numbers
* @Return - We return the sum of all numbers in the array
* @Example - [1, "apple", 2, [1, 2]] => 6
* @Pseudo - So the first thing I needed to do was find a way to recursively flatten the array and I needed to keep track of the sum. There may be a shorter way to do it with map and reduce, but it would be quite complex. Ending up figuring out that I can recursively do it if I keep flatteneing it by one level when I loop through the original array and then I would just need to keep track of the sum.

Found a recursive answer: return arr.reduce((n, x) => n + (Array.isArray(x) ? arraySum(x) : isNaN(x) ? 0 : x), 0)
*/

function arraySum(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {sum += arr[i]} //only add numbers
    else if (Array.isArray(arr[i])) {
      arr = arr.reduce((prev, curr) => prev.concat(curr), []) //if value is an array, add it and reduce i by 1 to start at the front of the added array. If multiple nested arrays, the next array will just be another element later in the loop.
      i--
    }
  }
  return sum
}

/**
* @Description - make two array methods range and sum. Range will return an array starting at a specific number and will increment count times. Sum will return a number that is the sum of all of the numbers in your array
* @Parameters - we are given two numbers that can be 0 or negative for the range method. we are given an array of numbers for the Sum array that can be empty.
* @Return - we return an array for the range method. We return a number for the sum method.
* @Example - Array.range(-3,5) => [-3,-2,-1,0,1] , [-3,-2,-1,0,1,2,3].sum() => 0
* @Pseudo - The sum method was easy to make since it can be done with the reduce method, but there would need to be adjustments made if the array has anything that is not a number. The range function was a little tricky since the problem added a extra challenge of not using for loop if possible. I used Array to generate an empty array of the correct size. I used fill to give it some numbers, most importantly the starting number. Then I used map to properly increment the values after the start value.
*/

Array.range = function(start, count) {
  return Array(count).fill(start, 0, count).map((value, index) => index != 0 ? value += index : value);
}

Array.prototype.sum = function() {
  return this.reduce((prev, curr) => prev + curr, 0);
}

/**
 * @Description - Write a function that combines two arrays by alternatingly taking elements from each array in turn
 * @Parameters - We are given two arrays a and b that each have at least one element and only contain numbers
 * @Return - We return an array following the information above
 * @Example - ['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5] => ['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]
 * @Pseudo - The easiest way I thought of was just using a for loop and then pushing each element at i into a new array while pushing in the correct order
 */

function mergeArrays(a, b) {
  let length

  if (a.length >= b.length) {length = a.length}
  else {length = b.length}

  let mergedArray = []

  for (let i = 0; i < length; i++) {
    if (i <= a.length - 1) {mergedArray.push(a[i])}
    if (i <= b.length - 1) {mergedArray.push(b[i])}
  }
  return mergedArray
}

/**
* @Description - We are given a first and last name as a string and must return the initials of the name capitalized with a "." in between them
* @Parameter - We are given a string with a space inbetween some characters
* @Return - We return a string following the rules above
* @Example - "Sam Harris" => "S.H"
* @Pseudo - I know I could do this on one line by using split and map so I did. I would just need to use map to change the first character of the names into uppercase and then filter out everything that is not uppercase. Then I would just join it back into a string and return it.
*/

const abbrevName = name => name.split(" ").map(names => names.split("").map((value, index) => index === 0 ? value.toUpperCase() : value.toLowerCase()).filter(value => value === value.toUpperCase()).join("")).join(".")

/**
* @Description - We are given a number and must return the number reversed in an array
* @Parameter - We are given a number that is not negative, but can be 0
* @Return - We return an array following the rules above
* @Example - 35231 => [1,3,2,5,3]
* @Pseud - I decided to change the number into a string so I can use split to separate each number into an array element and then I used the reverse method to reverse the order
*/
function digitize(n) {
  return String(n).split("").map(value => Number(value)).reverse()
}

/**
* @Description - Given an array integers, return each number in the array * 2
* @Parameter - An array of integers
* @Return - An array of integers following the rules above
* @Example - [4, 1, 1, 1, 4] => [8, 2, 2, 2, 8]
* @Pseudo - I chose to use map since I could easily adjust every value in an array with the method
*/

function maps(x){
  return x.map(value => value * 2)
}

/**
* @Description - You are given an array and must return an array such that the first element is the count of positive numbers in the array and the second element is the sum of all of the negative numbers
* @Parameter - We are given an array of numbers that could be empty, null, have only positive numbers, or have only negative numbers
* @Return - We return an array following the rules above. If it is null, has no positive numbers, has no negative numbers, or is empty, we return an empty array
* @Example - [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] => [10, -65]
* @Pseudo - I used filter to filter out positive and negative numbers of the array and then return the length of the positive numbers array and used reduce to add the negative numbers together. I chose to add a if statement before the return to handle some of the exceptions.
*/

function countPositivesSumNegatives(input) {
  if (input === null) {return []}
  if (input.length === 0 && input.filter(value => value > 0).length === 0 && input.filter(value => value < 0).length === 0) {return []}
  return [input.filter(value => value > 0).length, input.filter(value => value < 0).reduce((prev, curr) => prev + curr, 0)]
}

/**
* @Description - We are given two arrays that are not empty and of the same length. The first array is the answer key to the second array. The string in each element of the key array will be a single letter string. The second array will have a letter for each element of the array or a "". Return the score they student has such that they get 4 points for each correct answer, -1 for each incorrect answer, and +0 for no answers. If the score is below 0, return 0.
* @Parameter - We are given two arrays of strings. The second array can have empty strings
* @Return - We return a number, which is calculated by the amount of answers in array2 that match array1
* @Example - ["a", "a", "c", "b"], ["a", "a", "b",  ""] => 7
* @Pseudo - The first thing that came to mind was using a variable to keep track of the points and then using a for loop or forEach method to add the points depending the values in the array. Will use a if statement to make sure we do not return anything less than 0
*/

function checkExam(array1, array2) {
  let points = 0
  array1.forEach((value, index) => value === array2[index] ? points += 4 : array2[index] === "" ? points += 0 : points -= 1)
  if (points < 0) {return 0}
  return points
}

/**
* @Description - You are given a string that contains dots on either side of a math operator (+,-,*,//) and must return a string with the resulting amount of dots
* @Parameters - We are given a string wuch that there is at least one dot on either side of a math operator and there is a space on each side of the math operator as well
* @Return - We return a string of dots that is the result of the math calculation
* @Example - "... + ....." => "........"
* @Pseudo - I chose to put it in an array instead of using a loop to count because it is easy to use split to separate the two rows of dots, get the length, and do the math. After I got the result, I just used repeat to return the correct amount of dots.
*/

function dotCalculator (equation) {
	if (equation.indexOf("+") != -1) {
    equation = equation.split(" + ")
    return ".".repeat((equation[0].length) + (equation[1].length))
  }
  else if (equation.indexOf("-") != -1) {
    equation = equation.split(" - ")
    return ".".repeat((equation[0].length) - (equation[1].length))
  }
  else if (equation.indexOf("*") != -1) {
    equation = equation.split(" * ")
    return ".".repeat((equation[0].length) * (equation[1].length))
  }
  else {
    equation = equation.split(" // ")
    return ".".repeat((equation[0].length) / (equation[1].length))
  }
}

/**
* @Description - We are given a url and must remove everything after the anchor tag if it is present and return the url. If there is not an anchor tag, just return the url
* @Parameter - We are given a string. It does not state what should happen if it is empty or if it may give an empty one.
* @Return - We a string that is the url of the website without anything after the anchor tag.
* @Example - 'www.codewars.com#about' => 'www.codewars.com'
* @Pseudo - Since the url might not have to be changed, I can use a if statement and check if there is an index of "#" and if not, return it. Else I could use slice to grab the part of the url I want and return it.
*/

function removeUrlAnchor(url){
  if (url.indexOf("#") != -1) {
    url = url.slice(0, url.indexOf("#"))
  }
  return url
}

/**
* @Description - We are given two strings that coudl be empty. We return the first string as if it is a title (first letter only capitalized), but we do not capitalize words if they are in the second string.
* @Parameters - We are given two strings that may be empty
* @Return - We return the first string as a title following the rules above
* @Example - 'THE WIND IN THE WILLOWS', 'The In' => 'The Wind in the Willows'
* Pseudo - Since they can be empty, I will need a couple of checks since I want to use string and array methods. I will first change it so all words are title cased using map. Then I will check if the second string includes a word in the first string and if it does, will change it to all lowercase.
*/

function titleCase(title, minorWords) {
  if (title.length === 0) {return title}
  title = title.split(" ").map(word => word.split("").map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase()).join(""))
  if (!minorWords) {return title.join(" ")}
  return title.map((word, index) => minorWords.toLowerCase().split(" ").includes(word.toLowerCase()) && index != 0 ? word.toLowerCase() : word).join(" ")
}

/**
* @Description - given a string, each player gets points depending on each character in the string. Can use the resulting code for the table on which letters give points and how many points. Return who wins or if it is a tie
* @Parameter - We are given a string. It does not state that it could be empty, but that case is handled anyway. Characters that do not give any points may be in the string.
* @Return - We return "Left side wins!"m "Right side wins!", or "Let's fight again!" depending on the result
* @Example "zdqmwpbs" => "Let's fight again!"
* @Pseudo - Since there are so many options, I chose to do for loop and check each character since I would have to use a couple of different methods at least to give the result and that would result in quite a bit more memory being used
*/

function alphabetWar(fight) {
  let left = 0, right = 0
  for (let i = 0; i < fight.length; i++) {
    if (fight.charAt(i) === "w") {left += 4}
    else if (fight.charAt(i) === "p") {left += 3}
    else if (fight.charAt(i) === "b") {left += 2}
    else if (fight.charAt(i) === "s") {left += 1}
    else if (fight.charAt(i) === "m") {right += 4}
    else if (fight.charAt(i) === "q") {right += 3}
    else if (fight.charAt(i) === "d") {right += 2}
    else if (fight.charAt(i) === "z") {right += 1}
  }
   
  if (left > right) {return "Left side wins!"}
  else if(right > left) {return "Right side wins!"}
  else {return "Let's fight again!"}
}

/**
* @Description - Given a string of words separated by a space, remove all duplicate words
* @Parameter - We are given a string of words that is not empty
* @Return - We return the same string without any duplicate words
* @Example - 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta' => 'alpha beta gamma delta'
* @Pseudo - I have done this before and one of the neat ways I figured out how to do it was using indexOf in an array and making sure it matches the current index and if not, then it is a duplicate
*/

const removeDuplicateWords = s => s.split(" ").filter((word, index, array) => array.indexOf(word) === index).join(" ")

/**
* @Description - We are given a string and must return an array where the first element is each even numbers character being uppercase and the second element having each odd character being uppercase.
* @Parameter - We are given a string. It does not state it can be empty or if all elements are lowercase.
* @Return - We need to return an array of two strings following the rules above.
* @Example - "codewars" => ['CoDeWaRs', 'cOdEwArS']
* @Pseudo - The first way I thought to do this was to map and check the index to see if it is even or odd and return the correct value as needed
*/

const capitalize = s => [s.split("").map((value, index) => index % 2 === 0 ? value.toUpperCase() : value.toLowerCase()).join(""), s.split("").map((value, index) => index % 2 === 1 ? value.toUpperCase() : value.toLowerCase()).join("")]

/**
 * @Description - Given an array and value, check to see if the value is in the array and return true or false.
 * @Parameter - We are given an array and value. Does not state whether than can be empty or null.
 * @Return - We return true or false.
 * @Example - [66, 101], 66 => true
 * @Pseudo - Used include since it would be easy to use for this situation.
 */

 const check = (a, x) => a.includes(x)

/**
 * @Description - Given a string, reverse all the words of the string and return it.
 * @Parameter - We are given a string. Does not say if it could be empty or null.
 * @Return - We return a string.
 * @Example - "hello world!" => "world! hello"
 * @Pseudo - Since reverse would be an easy way to adjust the words, I decided to convert the string to an array, use reverse, and then change it back to a string.
 */

 const reverseWords = str => str.split(" ").reverse().join(" ")

/**
 * @Description - Given a name, return whether or not the person play bangjo if the first character is "r" or "R"
 * @Parameter - We are given a valid string
 * @Return - We return the name and whether that person plays a banjo or not
 * @Example - "Adam" => "Adam does not play banjo"
 * @Pseudo - I will check to see if the first character of the string starts with an r with charAt and toLowerCase and then return the string dependong on that info
 */

 const areYouPlayingBanjo = name => name.charAt(0).toLowerCase() === "r" ? `${name} plays banjo` : `${name} does not play banjo`

/**
 * @Description - We are given a number and a boolean value. If the boolean value is true, we return the the number * 10 with the European currency character or just the salary with the character
 * @Parameter - We are given a number and a boolean value. Both values seem to always be valid in the given tests
 * @Return - We return the salary * 10 if the boolean is true or just the salaray otherwise. You also add the European currency character before the number as well
 * @Example - 10000, true => '£100000'
 * @Pseudo - If bonus, then return character + salary * 10, else character + salary
*/

 const bonusTime = (salary, bonus) => bonus ? `£${salary*10}` : `£${salary}`

 /**
  * @Description - Given a year, return the century it is in.
  * @Parameters - a whole number, no funny business
  * @Return - a century the number is in
  * @Example - 1901 => 19, 2000 => 20
  * @Pseudo - Since a century is the year / 100 rounded up, I used basic math to do the calculations and then used Math.ceil to round up to the nearest whole number, which also does not round up a number that is already whole
*/

const century = year => Math.ceil(year/100)

/**
 * @Description - We are given the length and width of a rectangle and must reutrn all squares within that triangle. If the length and width do not make a rectangle, return null.
 * @Parameters - We are given two numbers. They will always be numbers, but they may not always make a rectangle.
 * @Return - We return an array of numbers such that each number is the length and width of the square inside the given rectangle.
 * @Example - 5, 3, => [3, 2, 1, 1]
 * @Pseudo - Look at code below
 */

 function sqInRect(lng, wdth){
  if (lng === wdth) {return null}
  let smallTotal = Math.min(lng, wdth) //to keep track of the largest square we can have in the rectangle at the moment
  let largestSquare = Math.max(lng, wdth) //largest square/rectangle, smallTotal must fit inside of it. If the two values are equal, then there are no more squares left
  let small = smallTotal //smallest square that we can have inside of the rectangle
  
  let answer = []
  while (smallTotal != largestSquare) { //While the rectangle is not a square
    if (smallTotal + small > largestSquare) { //if you cannot fit any more squares inside the rectangle, we need to change the largest square
      answer.push(small)
      let tempLarge = largestSquare
      largestSquare = answer[answer.length-1]
      smallTotal = tempLarge - smallTotal
      small = smallTotal
    }
    else { //push another small square in since it can fit
      answer.push(small)
      smallTotal += small
    }
  }
  answer.push(small) //Need to push one last time since the while loop ends on the final square
  return answer
}

/**
 * @Description - We are given three numbers n, x, and y and must return true or false on whether or not n is evenly divisible by x and y.
 * @Parameters - Three numbers with no funny business.
 * @Return - True or false depending on the above conditions.
 * @Example - 12,3,4 => true.
 * @Pseduo - I chose to use % since I can just check if the remainder is just 0 and I can use && to check both at the same time and return whether it is true or false.
 */

 const isDivisible = (n, x, y) =>
 n%x === 0 && n%y === 0 ? true : false

 /**
  * @Description - We are given two numbers and a string that is the operator. Depending on the value of the stirng (operator), return a and b using that operator.
  * @Parameters - We have a and b that are always a number and operator that will always be "add", "subtract", "multiply", or "divide"
  * @Return - We return a number that is caclulated based off of the info above
  * @Example - (5, 6, "add") => 11
  * @Pseudo - I decided to use an if statement for each operation to make the code look cleaner and just checked what the value of the operator was and return the appropriate value.
  */

  function arithmetic(a, b, operator){
    if (operator === "add") {return a + b}
    else if (operator === "subtract") {return a - b}
    else if (operator === "multiply") {return a * b}
    return a / b
  }

  /**
   * @Description - A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock. Your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.
   * @Parameters - We are given two arrays that can be empty. Each value in the first array is a string consisting of 3-5 characters all capitalized, a space, and then a number. The second array is an array of strings, which are all just a single letter and capitalized.
   * @Return - We return a string containing all of the values of the categories in the second array. It is also in the same order of the array. The format of the string is in Haskell/Clojure/Racket/Prolog list of pairs ((A : 20) - (B : 114) - (C : 50) - (W : 0)).
   * @Example - 
   * listOfArt = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
    listOfCat = ["A", "B", "C", "D"]
    Result => "(A : 0) - (B : 1290) - (C : 515) - (D : 600)"
   */

   function stockList(listOfArt, listOfCat){
    //Handle empty arrays
    if (listOfArt.length === 0 || listOfCat.length === 0) {return ""}
    
    //separate book info
    let books = []
    listOfArt.forEach(value => value.split(" ").forEach(val => books.push(val)))
    
    //sum all values by mapping and store in object
    let bookObj = {}
    books.forEach((value, index, array) => {
      if (index % 2 === 0) {
        if (value.slice(0,1) in bookObj) {bookObj[value.slice(0,1)] += Number(array[index+1])}
        else {bookObj[value.slice(0,1)] = Number(array[index+1])}
      }
    })
    
    //return all values in string
    let answer = ""
    for(let i = 0; i < listOfCat.length; i++) {
      if (listOfCat[i] in bookObj) {answer += `(${listOfCat[i]} : ${bookObj[listOfCat[i]]})`}
      else {answer += `(${listOfCat[i]} : 0)`}
      
      if (i != listOfCat.length - 1) {answer += " - "}
    }
    
    return answer
  }

  /**
   * @Description - Given the start, end, and accumulator of a sequence, return the sum of the sequence. If the start of the sequence is greater than the end, return 0
   * @Parameter - We have three parameters that are all numbers and will always be numbers
   * @Return - We will return a number that is the sum of the sequence
   * @Example - (2,6,2) => 12
   */

   const sequenceSum = (begin, end, step) => {
    //If we do not need to loop, just return begin
    if (begin === end) {return begin}
    //Invalid sequence
    if (begin > end) {return 0}
    
    //Sum the sequence
    let sum = 0
    for (let i = begin; i <= end; i += step) {
      sum += i
    }
    
    return sum
  }

/**
 * @Description - We are given an array of ages that has at least two values. We must return the two oldest people from the list
 * @Parameters - We are given an array of at least length 2. Description did not say if the values could be invalid, but test cases did not have any invalid data
 * @Return - We return an array of the two oldest people with the first element being the second oldest and the oldest person being the second element
 * @Example - [1, 5, 87, 45, 8, 8] => [45, 87]
 */

 function twoOldestAges(ages){
  //Could check to verify all ages are greater than zero
  //Gather oldest
  let oldest = Math.max(...ages)
  //Set oldest to invalid age value
  ages[ages.indexOf(oldest)] = -1
  return [Math.max(...ages), oldest]
}

/**
 * @Description - Return the name of the winner in the fight when given two objects that are fighters with the name, health, and damage they deal. We are also given another variable that contains the name of who attacks first
 * @Parameters - We are given two objects, each with a name, health, and damage properties. They also have a method that returns the name. The third parameter is just a string that will match the name in one of the objects for who attacks first
 * @Return - We return the name of the person who wins, which the string in the object
 * @Example - Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
 * 
 * My solution is of complexity O(N), the following example I found as well that is of complexity O(1)
 * function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
 * 
 */

function declareWinner(fighter1, fighter2, firstAttacker) {
  //If fighter 1 is first to attack
  if(fighter1.name === firstAttacker) {
    while (fighter1.health > 0) { //Breaks when fighter 1 loses
      fighter2.health -= fighter1.damagePerAttack //Fighter 1 attacks first
      if (fighter2.health <= 0) {return fighter1.name} //Check if fighter 2 lost
      fighter1.health -= fighter2.damagePerAttack
    }
    return fighter2.name
  }
  //If fighter 2 is first to attack
  else {
    while (fighter2.health > 0) {
      fighter1.health -= fighter2.damagePerAttack
      if (fighter1.health <= 0) {return fighter2.name}
      fighter2.health -= fighter1.damagePerAttack
    }
    return fighter1.name
  }
}

/**
 * @Description - Return true or false whether the two strings are anagrams of each other. Test as if they are case insensitive.
 * @Parameters - We are given two strings. Test is usually random jumble of letters where original is the actual word. They may random capitalization. Doesn't state whether they will ever be empty
 * @Return - We return true or false depending on the info above
 * @Example - ("foefet", "toffee") => true, ("apple", "pale") => false
 */

 var isAnagram = function(test, original) {
  //changed to arrays because slice and charAt are O(n) compared to being able to use constant time with arrays
  original = original.toLowerCase().split("")
  test = test.toLowerCase().split("")
  for (let i = 0; i < original.length; i++) { //original.length because it may be shorter than test.length
    let isChar = test.indexOf(original[i])
    if (isChar === -1) {return false}
    else {
      test[isChar] = 0 //so we can filter it and see if there are any extra characters given. Could just do a length check in the beginning though.
    }
  }
  return test.filter(value => value != 0).length === 0 ? true : false //if test has more characters in it, return false, else true.
}

/**
 * @Description - When given an array of numbers, return them sorted in ascending order
 * @Parameters - We are given an array or some falsey value
 * @Return - We return an array of sorted numbers or an empty array if the parameter was falsey
 * @Example - [4,2,3,1,5] => [1,2,3,4,5], null => []
 * @Pseudo - Chose to just use an arrow function. When using sort, had to use a - b or stuff like [1, 2, 3, 11] would be [1, 11, 2, 3]. Returned [] if the value was falsey.
 */

 const solution = nums => nums ? nums.sort((a, b) => a - b) : []

 /**
  * @Description - Given an array of numbers and a limit, return true or false on whether or not all values are below or equal to the limit
  * @Parameter - We are given an array of numbers and a limit that is a number. Array is never empty. All values are numbers. No funny business
  * @DReturn - We return true or false if all values are below or equal to the value
  * @Example - [66, 101], 200 => true, [120, 10, 50], 100 => false
  * @Pseudo - I used every to make sure each value in the array is <= limit
  */

  const smallEnough = (a, limit) => a.every(value => value <= limit)

/**
 * @Description - We are given an array of arrays that each have two numbers. The first number is the customer's age and the second is their handicap in croquet. We need to return an array of strings Open or Senior depending on if they meet the requirements. To be Senior, you must have a handicap of 8 or greater and be at least 55 or greater in age. Else you are part of Open
 * @Parameters - An array of arrays. The nested arrays each have to values that are numbers. No funny business or falsey values
 * @Return - We return an array of strings that are either Senior or Open
 * @Example - [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]] => ["Open", "Open", "Senior", "Open", "Open", "Senior"]
 * @Pseudo - I used map to check each value and checked the info. I would then return return the proper string afterwards and return the mapped array 
 */

  const openOrSenior = data => data.map(value => value[0] >= 55 && value[1] > 7 ? "Senior" : "Open")

  /**
   * @Description - We are given a string. For each i you increment the number. For each d you decrement the number. For each s you square the number. For each o you push the current number to an array.
   * @Parameter - We are given a string. We were not told what to do if it was empty and just that we ignore any other characters
   * @Return - We return an array of values. We were not told what to do if there was nothing outputed to the array. Right now it just returns an empty array.
   * @Example - ("iiisdoso") => [ 8, 64 ]
   */

   function parse( data ) {
    let answerArray = [] //store answers
    let num = 0 //initial number
    data = data.split("").forEach(value => { //ignore all other characters from the giving string
      if (value === "i") {num++}
      else if (value === "d") {num--}
      else if (value === "s") {num = num**2}
      else if (value === "o") {answerArray.push(num)}
    })
     return answerArray
   }

   /**
    * @Description - Given an array of arrays and must return the number of unique arrays that can be formed by picking exactly one element from each subarray.
    * @Parameters - We are given an array of arrays. We are not told whether or not it could be empty or have any other special conditions
    * @Return - We return the numer of unique arrays that can be formed by picking one element from each sub array, which will be a number
    * @Example - ([[1,2],[4,4],[5,6,6]]) => 4
    * Another way of doing it - const solve = (arr) => arr.reduce((res, a) => res * new Set(a).size, 1)
    */

    function solve(arr) {
      let sum = 1
      //Chose to use filter to filter out any duplicates. I then used forEach to multiply the length of each sub array since each value was unique
      arr.map(arrays => arrays.filter((val, index, nestedArray) => index === nestedArray.indexOf(val))).forEach(val => sum *= val.length)
      return sum 
    };

    /**
     * @Description - Given an array/list of integers, find the Nth smallest element in the array.
     * @Parameters - The given array will always be a number and of size 3. The second parameter seems to always be a number.
     * @Return - We return the smallest Nth number
     * @Example - [2,169,13,-5,0,-1], 4 => 2
     * @Pseudo - I chose to use the sort method since it most likely is O(log(n)) at least. Then I just accesed the array at constant time to return the correct value
     */

     const nthSmallest = (arr, pos) => arr.sort((a, b) => a - b)[pos-1]

     /**
      * @Description - Given a string, return a string such that if the character only shows up once in the string, replace it with (. If it appears more than once, replace it with ). The checks are not case sensative
      * @Parameters - We are given a string. We are not told whether or not it can be empty.
      * @Return - We return a string of parentheses following the above information
      * @Example - "recede" => "()()()"
      * @Pseudo - I change the string to lowercase first so it is case insensative. I then change it to an array and map it since it is easier to work with and check if the first index is equal to the last index and if it is, we return ( or we return ). Then we just join it back into a string.
      */
     const duplicateEncode = word => word.toLowerCase().split("").map((value, index, array) => array.indexOf(value) === array.lastIndexOf(value) ? "(" : ")").join("")

     /**
      * @Description - Given a string that holds an operation, return the result of the first value and the second value using that operation 
      * @Paramters - We are given a string that will never be empty and only have one character, which is the operator +, -, *, or /. We are also given two variables that are two numbers and will never be empty
      * @Return - We return the result of the two given values using the given operation
      * @Example - ("+", 5, 4) => 9
      * @Pseudo - I just used 3 conditionals for three of the operators and an else statement for the last one and return the value produced using the two values and operator
      */

      function basicOp(operation, value1, value2) {
        if (operation === "+") {return value1 + value2}
        else if (operation === "-") {return value1 - value2}
        else if (operation === "*") {return value1 * value2}
        else {return value1 / value2}
      }

/**
 * @Description - We are given a divisor and a max number. We are to return the highest number > 0 and <= the highest bound such that the remainder is 0.
 * @Parameters - We are given two numbers that are whole numbers. No tricky business.
 * @Return - We return a number following the info above
 * @Example - (2, 7) => 6
 * @Pseudo - Even though it is not required, I made a default case to return false if a divisor was not found. I made a loop that started from the highest number to see if it can evenly divide by the divisor and I decrement until it does and return the number.
 * 
 * Found that you can also just use the math below
 * return bound - bound % divisor
 */

 function maxMultiple(divisor, bound){
  for (let i = bound; i > 0; i--) {
    if (i % divisor === 0) {return i}
  }
  return false
}

/**
 * @Description - given a string, reverse the string and remove any non-alphabetic characters
 * @Parameters - We are given a string. No information about what to do when it is empty
 * @Return - We return the string reversed and with all non-alphabetic characters removed
 * @Example - "ultr53o?n" => "nortlu"
 * @Pseudo - All test cases only included lowercase letters, but I made sure to include upper and lower cased letters in my regex when removing non-alphabetic characters. After that, I just changed it to an array to reverse the characters and then return it as a string.
 */

const reverseLetter = str => str.replace(/[^a-zA-Z]/gi, '').split("").reverse().join("")

/**
 * @Description - We are given a number and must return the factorial of it. If the number is 0, return 1. If the number is greater than 12 or less than 0, throw RangeError
 * @Paramter - We are given a number. No funny business
 * @Return - We return the factorial of the given number, return 1 if it is 0, or return RangeError is the value is > 12 or < 0
 * @Example - (5) => 120, (13) => RangeError(), (0) => 1
 * @Pseudo - I used a couple of if statements to handle the exceptions. I then used a while loop that started at n - 1 until > 1 and returned the factorial that way
 */

function factorial(n) {
  if (n === 0) {return 1}
  if (n < 0 || n > 12) {throw RangeError()}
  let sum = n
  n--
  
  while (n > 1) {
    sum *= n
    n--
  }
  
  return sum
}

/**
 * @Description - Given an array of numbers, return the smallest number that contains all of the numbers in the array excluding dupliates
 * @Parameters - We are given an array of numbers. The numbers that are given seem to be only single digit. There can be duplicates in the array, but we need to ignore them
 * @Return - We return a the smallest number made of the numbers in the array, ignoring duplicates
 * @Example - ([1, 3, 1]) => 13
 * @Pseudo - So the first thing I wanted to do was filtering out the duplicate numbers. Then I sorted it so have the smallest numbers first. Then I just changed it to a number instead of having an array.
 */

 function minValue(values){
  return Number(values.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => a - b).join(""))
}

/**
 * @Description - We are given a number and must return the sum of each digit. If the number is negative, we just ignore it and sum up the digits as normal 
 * @Parameter - We are given a number that is a whole number. It can be negative, 0, or positive
 * @Return - We return a number that is the sum of all of the digits of the given number
 * @Example - -345 => 12
 * @Pseudo - I first had to make sure that we changed any negative numbers to positive numbers so I can just change my number to an array and then reduce it to get the sum.
 */

 function sumDigits(number) {
  return number < 0 ? (number * -1).toString().split("").reduce((prev, current) => prev + Number(current), 0) :
  number.toString().split("").reduce((prev, current) => prev + Number(current), 0)
}

/**
 * @Description - We are given a string of numbers and need to return the largest substring of 5 digits.
 * @Parameter - We are given a string of at least five digits and nothing else.
 * @Return - We return a number, which is the largest substring of numbers in the given string.
 * @Example - ("731674765") => 74765
 * @Pseudo - I used a for loop to search every 5 values of the string that I changed into an array and check if it is greater than the current total. This code is not efficient. If I needed to make it efficient, I would use findIndex and find the largest number in the string and then check if there is a substring of 5 starting from that index. If there is, then I would check the string for any more values of the largest number and only compare those strings and ingore any other checks. This would get me the largest number since starting with a 9 will be greater than anything starting with a lesser number. We would just make the max number decrement if there is no index starting with a 9 and indexOf can have a second parameter to start the search from.
 */

function solution(digits){
  let total = 0
  digits = digits.split("")
  
  for (let i = 0; i < digits.length; i++) {
    let temp = []
    for (let j = i; j < i + 5; j++) {
      temp.push(digits[j])
    }
    let tempTotal = Number(temp.reduce((prev, current) => prev + current, ""))

    if (tempTotal > total) {total = tempTotal}
  }
  return total
}

/**
 * @Description - We are given an array of numbers from 1 to N and another array of the same numbers with the exception that one is removed and the values are mixed up. You are to return the number missing from the second array compared to the first array.
 * @Parameter - We are given two arrays of numbers. No funny business. The arrays can be empty.
 * @Return - We return the missing number or 0 if the arrays are empty or if an item was not deleted.
 * @Example - ([1, 2, 3, 4, 5], [2, 4, 1, 5]) => 3
 * @Pseudo - Made a couple of different versions. First version was just a brute force where I sorted the fixed array and then looped through it until I found the missing index. Second one actually just added up the two arrays and then return the different between the difference.
 */

 function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) {return 0}
  mixArr = mixArr.sort((a, b) => a - b)
  for (let i = 1; i < arr.length + 1; i++) {
    if (mixArr[i - 1] != i) {return i}
  }
}

function findDeletedNumber(arr, mixArr) {
  if (arr.length === mixArr.length) {return 0}
  return arr.reduce((prev, curr) => prev + curr, 0) - mixArr.reduce((prev, curr) => prev + curr, 0)
}

/**
 * @Description - We need to check if the coupon code is correct and not expired when given the code and expiration date.
 * @Paramters - All parameters are a string. The coupon code seems to only be numbers. No empty strings or funny business. Date format: Month Day, Year. See example below for info.
 * @Return - We return true or false on whether or not the coupon is valid
 * @Example - ("123", "123", "July 9, 2015", "July 2, 2015")  =>  false
 * @Pseudo - For the first two paramters, you just need to check if they are equal to or not. For the date, you need to convert it to a Date object in order to use operators to compare them using getTime. Otherwise you could parse the string, but it would be a lot of overhead. Return false if the current date is > expiration date. 
*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if (enteredCode !== correctCode) {return false}
  if (new Date(currentDate).getTime() > new Date(expirationDate).getTime()) {return false}
  return true
}

/**
 * @Description - We are given an array of bytes and must return an array of the bytes reversed as well as the bits reversed. (8 bits === 1 byte)
 * @Parameters - We are given an array of bytes. The total number of bits will always be a multiple of 8. Assuming that means it could be empty as well due to that.
 * @Return - We return an array such that the order of bits and bytes are reversed.
 * @Example - ([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]) => [0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0]
 */

 function dataReverse(data) {
  let tempArr = []
  let answer = []
  for (let i = data.length - 1; i >= 0; i--) {
    
    tempArr.unshift(data[i]) //store the reversed 8 bits and they are reversed by starting at the end of the array and unshifting
    
    if (i % 8 === 0) { //used this way to reverse the order of 8 bit strings
      answer = answer.concat(tempArr)
      tempArr = []
    }
    
  }
  return answer
}

/**
 * @Description - We are given an array of strings that represent what people voted for. We must return the winner of the vote, but if there is a tie or if the winner does not have more than half of the votes, we return null.
 * @Parameter - We are given a list of strings. Doesn't seem to be empty. If it is, we can just return null.
 * @Return - We return the winner of the vote, which is a string, or null if there is no winner
 * @Example - (["A", "A", "A", "B", "B", "B", "A"]) => "A", (["A", "A", "A", "B", "B", "B", "C"]) => null
 */

 function getWinner(listOfBallots) {
  let cache = {}
  
  //sum up the ballots
  for (let i = 0; i < listOfBallots.length; i++) {
    if (listOfBallots[i] in cache) {
      cache[listOfBallots[i]]++
    }
    else {
      cache[listOfBallots[i]] = 1
    }
  }
  
  let max = 0
  let winner = ""
  
  //determine max
  for (const property in cache) {
    if (cache[property] > max) {
      max = cache[property]
      winner = property
    }
  }

  //Check for majority (ie max > half of the array), do here because it doesn't matter if there is a tie or not if it is not the majority
  if (max <= listOfBallots.length/2) {return null}
  
  //make sure there are no ties for first place
  for (const property in cache) {
    if (cache[property] === max && winner !== property) {
      return null}
  }
  
  return winner
}

/**
 * @Description - We are given an array and must return whether or not the array of numbers is in ascending order or not
 * @Parameter - We are given an array of numbers that could be empty, but always contains numbers.
 * @Return - We return true if the array is sorted in ascending order or false if not. An array that is empty or of 1 element does count as a sorted array.
 * @Example - ([1, 2, ,3 ,4 ,5]) => true, ([1, 2, 3, 2, 5]) => false
 * @Pseudo - Could use arr.every, but I just used a for loop to check each value and the for loop lets you start with index 1 instead of 0 
 */

 function inAscOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i-1]) {return false} //If they are equal to, would still be ascending order
  }
  return true
}

/**
 * @Description - Given two arrays, find the largest length difference of string lengths between the arrays.
 * @Parameter - We are given two arrays that could be empty. Otherwise they are valid strings.
 * @Return - We return a number. It will either being the max of a1 - min of a2 or max of a2 - min of a1. If one of the arrays is empty, we return -1
 * @Example - (["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"] => 13)
 * @Pseudo - There are ways to do this with less code, but it seems to have a more comples Big O. One option is to adjust the arrays using map and replace the string with the length of the string and just use Math.max(...a1), but that would require two loops for each array.
 */

 function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) {return -1}
  
  //Declare min and max for both arrays
  let min1 = a1[0].length, max1 = 0
  let min2 = a2[0].length, max2 = 0
    
  //Set min and max for array 1
  for (let i = 0; i < a1.length; i++) {
    if (a1[i].length > max1) {max1 = a1[i].length}
    if (a1[i].length < min1) {min1 = a1[i].length}
  }
  
  //Set min and max for array 2
  for (let i = 0; i < a2.length; i++) {
    if (a2[i].length > max2) {max2 = a2[i].length}
    if (a2[i].length < min2) {min2 = a2[i].length}
  }
  
  //Return largest difference
  if (max1 - min2 > max2 - min1) {return max1 - min2}
  else {return max2 - min1}
}

/**
 * @Description - When given an array that contains arrays of numbers, return the sum of all of the minimum values in the nested arrays. 
 * @Parameters - We are given an array of nested arrays. The nested arrays contains numbers only. No funny business in any of the test cases of this question.
 * @Return - We return a number, which is the sum of the min values in the nested arrays.
 * @Example - ([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]) => 9).
 * @Pseudo - There's not really a way to make this too efficent since the nested arrays are not sorted. I used map to adjust the value in the original array to just be the min values and then I used reduce to add them together.
 */

 function sumOfMinimums(arr) {
  return arr.map(val => Math.min(...val)).reduce((prev, curr) => prev + curr, 0)
}

/**
 * @Description - Given an array that contains arrays of numbers, return the array flattened and sorted.
 * @Parameter - We are given an array that contains an undefined amount of nested arrays with numbers. It doesn't say if anything could be empty. It always be 2 dimensional.
 * @Return - We return an array of numbers sorted.
 * @Example - ([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) => [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * @Pseudo - I used the flat method to put it into a 1d array and sorted it. If it was was greater than 2d, I could just use .flat(infinity) and that would flat from any depth.
 */

 function flattenAndSort(array) {
  return array.flat().sort((a, b) => a - b)
}

/**
 * @Description - Given a number, create a N x N mutliplication table and return it
 * @Paramter - We are given a number. No funny business.
 * @Return - We return an array of arrays match a N x N multiplication table
 * @Example - (3) => [[1,2,3], [2,4,6], [3,6,9]]
 */

 multiplicationTable = function(size) {
  let answer = []
  
  for (let i = 1; i <= size; i++) { //create an array for each number until size
    let temp = [] //set array to empty
    for (let k = 1; k <= size; k++) {temp.push(i * k)} //multiply the current number for each number until size and store it in temp
    answer.push(temp) //add to answer array
  }
  
  return answer
}

/**
 * @Description - Given an array of numbers, return only even numbers and using the filter method.
 * @Parameters - You are given an array of numbers. No funny business
 * @Return - We return an array of numbers taht are even, if any
 * @Example - [1, 2, 3] => [2]
 * @Pseudo - I used the modulo operator to check if 2 can evenly go into the number
 */

 function getEvenNumbers(numbersArray){
  return numbersArray.filter(value => value % 2 === 0)
}

/**
 * @Description - Given an array, return whether or not the array is sorted in ascending order, descending order, or not sorted. It will always be one of these three answers.
 * @Parameter - We are given an array of numbers. Assuming they should not be empty since it must be one of three options. No funny business with it not being a number.
 * @Return - We return a string depending on how it is sorted or if it is not sorted in one of those ways.
 * @Example - [3, 6] => "yes, ascending"
 * @Pseudo - I just sorted an array to check if the string of it will be equal to the string of original array and returned based on that answer.
 */

 function isSortedAndHow(array) {
  let cloneArray = [...array].join("") //used because sort() alters the original array
  let ascString = array.sort((a, b) => a - b).join("")
  let descString = array.sort((a, b) => b - a).join("")

  if (ascString === cloneArray) {return "yes, ascending"}
  else if (descString === cloneArray) {return "yes, descending"}
  else {return "no"}
}

/**
 * @Description - Given an array of numbers, return only the even numbers and in the same order as they were given.
 * @Parameters - We are given an array of numbers. It will always have numbers and will only be numbers.
 * @Return - We return an array of numbers following the instructions above
 * @Example - [1, 2, 3, 4, 5] => [2, 4]
 * @Pseudo - I used filter since it removes items and does not change the order of the items
 */

function noOdds( values ){
  return values.filter(val => val % 2 === 0)
}

/**
 * @Description - Given an array and a length, return the last numbers of the given length that are even in the array. The array will always have the given length of even numbers. The order of numbers in the given array must be in the same order.
 * @Parameter - We are given an array of numbers and a number representing the length of the array we will return. I suppose the length could be 0 and the given array could be empty or have no even numbers.
 * @Return - We return an array of numbers of the given length
 * @Example - ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
 * @Pseudo - It is a waste to go through the entire array if it is not needed so I started from the end and used my while statement to determine when my new array is the correct length to return. I also used unshift to put the items in the correct order in my new array.
 */

function evenNumbers(array, number) {
  let answerArr = []
  
  let i = array.length - 1
  while (answerArr.length != number) {
    if (array[i] % 2 === 0) {answerArr.unshift(array[i])}
    i--
  }
  
  return answerArr
}

/**
 * @Description - Given a string of words separated by a space, remove any duplicate consecutive words in the string.
 * @Parameter - We are given a string of words separated by a space. No funny business.
 * @Return - We return a string following the rules above
 * @Example - "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta" => "alpha beta gamma delta alpha beta gamma delta"
 * @Pseudo - I used filter to remove any values that are equal to the next value.
 */

 const removeConsecutiveDuplicates = s => s.split(" ").filter((val, ind, arr) => val != arr[ind + 1]).join(" ")

 /**
  * @Description - Given an array of at least two numbers, return the largest sum of two numbers.
  * @Parameter - We are given an array of at least two numbers. They will always be numbers.
  * @Return - We return a number, which is the largest sum of two numbers in the given array.
  * @Example - [10, 14, 2, 23, 19] =>  42
  * @Pseudo - I chose to just make a for loop to keep track of the largest numbers because using sort or Math.max will most likely take longer.
  */

  function largestPairSum (numbers) {
  
    if (numbers[0] > numbers[1]) {
      var num1 = numbers[0]
      var num2 = numbers[1]
    }
    else {
      var num1 = numbers[1]
      var num2 = numbers[0]
    }
    
    for (let i = 2; i < numbers.length; i++) {
      if (numbers[i] > num1) {
        num2 = num1
        num1 = numbers[i]
      }
      else if (numbers[i] > num2) {
        num2 = numbers[i]
      }
    }
    
    return num1 + num2
  }

  /**
   * @Description - Given an array of numbers, return an object with two arrays such that one array is the list of every peak in the given array and the second array is the index of that peak. If that peak is a plateu, return the index of the first peak number. 
   * @Parameters - We are given an array of numbers that can be empty or will always have numbers in it
   * @Return - We return an object like shown below in the example. The arrays can be empty if the given array is empty.
   * @Example - [1,2,3,6,4,1,2,3,2,1]) => {pos:[3,7], peaks:[6,3]}
   */

   function pickPeaks(arr){
    let position = []
    let peaksArr = []
    
    for (let i = 1; i < arr.length-1; i++) { //First element cannot be a peak so we just start with 1
      if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) { //if a peak
        position.push(i)
        peaksArr.push(arr[i])
      }
      else if (arr[i - 1] < arr[i] && arr[i + 1] === arr[i]) { //check for possible plateu [1, 2, 2, 2, 1]
        let tempVal = arr[i]
        let tempIndex = i
        while (arr[i + 1] === tempVal) { //go to end of plateu
          i++
        }
        if (arr[i + 1] < arr[i]) { //if plateu
          position.push(tempIndex)
          peaksArr.push(tempVal)
        }
      }
    }
    
    return {pos:position, peaks:peaksArr}
  }

  /**
   * @Description - How many liters would someone drink if they drink .5 litres per hour rounded down.
   * @Parameters - We are given a number that could be a float, but never seems to be negative or any other value.
   * @Return - We return a number following the rules above
   * @Example - (12.3) => 6
   * @Pseudo - I just used multiplication to find the number and Math.floor to round it down.
   */

   function litres(time) {return Math.floor(time*.5)}

  /**
   * @Description - Given multiple numbers as parameters, return the number after they have all been multiplied by 2, added together, square reooted, and divided by 2
   * @Parameter - We are gievn 8 numbers. No funny business
   * @Return - We return a number following the steps above in order.
   * @Example - (65,60,75,55,60,63,64,45) => 86
   * @Pseudo - I used ...arguments to put all of them into an array so I can easily manipulate it with methods. Everything was pretty straight forwards, but when you square rooted the number, it gives a decimal most of the time. I learned after a few tests that they wanted the final number rounded down after everything was done or it would give the incorrect answer.
   */

   function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    return Math.floor(Math.sqrt([...arguments].map(value => value *= value).reduce((prev, curr) => prev + curr, 0))/2)
  }

  /**
   * @Description - Given an array of objects that contains at least two properties continent and language, return the amount of people with the continent being Europe and language being JavaScript.
   * @Parameter - We are given an array of objects. Doesn't say whether or not it can be empty.
   * @Return - We return a number following the rules above.
   * @Exmaple - [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
  ] => 1
   * @Psuedo - Could use filter, but decided to just use a for loop to make it a little easier to read
   */

   function countDevelopers(list) {
    let euroPeople = 0
    for (let i = 0; i < list.length; i++) {
      if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
        euroPeople++
      }
    }
    return euroPeople
  }

  /**
   * @Description - Given a string of "_" and "n", return "Car Dead" if you hit more than 15 "n"s or return "Woohoo!"
   * @Parameters - We are given a string. We are not told whether it can be empty. It does not seem to test any other characters.
   * @Return - We return a string depending on the given string.
   * @Example - "n_n_n_n" => "Woohoo!"
   * @Pseudo - You can filter it and just check if the length is <= 15 to return the results, but I used a while loop to possibly shorten it so you may not have to go through the entire string.
   */

   function bump(x){
    let bumps = 0
    x = x.split("")
    let i = 0
    
    while (bumps <= 15 && i < x.length) {
      if (x[i] === "n") {bumps++}
      i++
    }
  
    if (bumps <= 15) {return "Woohoo!"}
    return "Car Dead"
  }

  /**
   * @Description - We are given a string of characters and must return a number dependng on which vowel is missing in the string.
   * @Parameter - We are given a string that will always result in one answer.
   * @Return - We return a number depending on the vowel missing, a = 0, e = 1, i = 2, o = 3, u = 4.
   * @Example - "Bb Smith sent us six neatly arranged range bicycles" => 3
   * @Pseudo - There are a few different ways to do it, but I think my code is quite efficient. I don't loop through the string multiple times for each letter. I used an array to store the vowels so I can remove vowels that I have found and don't have to search for them still. Then the last vowel remaining will be my answer. This allows me to just go through the string one time to get the answer and it may be less than the length of string as well.
   */

   function absentVowel(x){
    let vowelArray = ["a", "e", "i", "o", "u"]
    
    let i = 0
    while (vowelArray.length != 1) {
      if (vowelArray.includes(x.charAt(i))) {vowelArray = vowelArray.filter(val => val != x.charAt(i))}
      i++
    }
      
    if (vowelArray[0] === "a") {return 0}
    else if (vowelArray[0] === "e") {return 1}
    else if (vowelArray[0] === "i") {return 2}
    else if (vowelArray[0] === "o") {return 3}
    else {return 4}
  }

  /**
   * @Description - Given a string, return an array of the vowel indexes.
   * @Parameters - We are given a string. No specific rules when it is empty. Will always be a string.
   * @Return - We return an array of numbers that are indexes of the words. The index that we return starts with 1 and not 0. so we return 1 instead of 0 if the first character is a vowel. It is not case sensative either.
   * @Example - "orange" => [1,3,6]
   * @Pseudo - I chose to make an array of vowels to make it cleaner to search if the current character is a string. Make all the characters lowercase as well and then looped through them. I pushed them into a new array, which automatically puts the index numbers in order as well since I started at index of 0 on the string with my loop.
   */

   function vowelIndices(word){
    word = word.toLowerCase()
    let vowelArray = ["a", "e", "i", "o", "u", "y"]
    let answerArray = []
    
    for (let i = 0; i < word.length; i++) {
      if (vowelArray.includes(word.charAt(i))) {answerArray.push(i + 1)}
    }
    
    return answerArray
  }

  /**
   * @Description - Given a string, return that string reversed without use the reverse method. This is not a CodeWars problem.
   * @Paramter - We are given a string, no funny business.
   * @Return - We return a string following the rules above
   * @Example - "Hello" => "olleH"
   * @Pseudo - I decided to use a loop starting at the last index to add each character to another string that I return.
   */

   function reverseString(str) {
    let answer = ""
    for (let i = str.length-1; i >= 0; i--) {
      answer += str.charAt(i)
    }
    return answer
  }

  /**
   * @Description - Given a string jewels and stones, return how many jewels are in your stones.
   * @Paramters - We are given two strings of English letters between the length of 1 and 50. All characters in jewels are unique so if the string is "aA", there are two total jewels "a" and "A".
   * @Return - We return a number following the rules above.
   * @Example - ("aA", "aAAbbbb") => 3
   * @Pseudo - I made a couple of different programs. The one where I changed jewels into an array was actually faster when using includes, but that is probably due to the small amounts of data.
   */

   var numJewelsInStones = function(jewels, stones) {
    let jewelsArray = jewels.split("")
    let answer = 0

    for(let i = 0; i < stones.length; i++) {
        if (jewelsArray.includes(stones.charAt(i))) {answer++}
    }
    
    return answer
};

var numJewelsInStones = function(jewels, stones) {
  let answer = 0  
  const jewelObj = {}

  for (let i = 0; i < jewels.length; i++) {
    jewelObj[jewels.charAt(i)] = true
  }

  for(let i = 0; i < stones.length; i++) {
      if (jewelObj[stones.charAt(i)]) {answer++}
  }

  return answer
}

/**
 * @Description - We are given a string of characters and return the character that repeats the most.
 * @Parameter - We are given a string of characters.
 * @Return - We return a character that repeats the most
 * @Example - "Hello World" => "l"
 * @Pseudo - I made an object to keep track of each character in the string since it is quick and easy to use. Then I just looped through the object to find the character with the largest number and return it.
 */

function maxChar(str) {
  const cache = {}

  for (const i of str) {
    if (cache[i]) {cache[i]++}
    else {cache[i] = 1}
  }

  let char = "", count = 0

  for (const i in cache) {
    if (cache[i] > count) {
      count = cache[i]
      char = i
    }
  }
  
  return char
}

/**
 * @Description - Given an array of at least two numbers, return the max product of numbers next to each other.
 * @Parameter - We are given an array of numbers that can be negative, 0, or positive and will be at least of length two.
 * @Return - We return a number, which is the largest product of numbers next to each other.
 * @Example - [1, 2, 3] => 6, [2, 1, 3] => 3
 * @Pseudo - I used a loop to check i and i + 1 until the end of the loop and if it is bigger than the largest product so far, I make it the largest product.
 */

function adjacentElementsProduct(array) {
  let maxNum = array[0] * array[1]
  
  for (let i = 1; i < array.length - 1; i++) {
    let tempMax = array[i] * array[i + 1]
    if (tempMax > maxNum) {maxNum = tempMax}
  }
  
  return maxNum
}

/**
 * @Description - Non CodeWars problem. Given a string (magazine) and another string (str), return whether or not you can make each word in a ransom note (str) from the words in the magazine. It is not case sensative and we ignore spaces. The words from the string must be exactly the same and not just part of the word in the magazine.
 * @Paramters - We are given two strings that are not empty.
 * @Return - We return true to false whether or not you can make the string from the magazine
 * @Example - "Hello World", "world" => true, "Hello World", "or" => false
 * @Pseudo - I used an object to keep track of all of the words in the magazine. Then I looped through each word of the string and if it did not exist in the object or there was not enough word available, I returned false.
 */

function ransom(magazine, str) {
  note = magazine.toLowerCase().split(" ")
  str = str.toLowerCase().split(" ")

  const magazineMap = {}

  for (const i in magazine) {
    if (magazineMap[note[i]]) {magazineMap[note[i]]++}
    else {magazineMap[note[i]] = 1}
  }

  for (const i in str) {
    if (magazineMap[str[i]] && magazineMap[str[i]] > 0) {magazineMap[str[i]]--}
    else {return false}
  }

  return true
}

/**
 * @Description - Given a number, return an array from 1 to that number and if the number is divisable by 5 and 3, the value is FizzBuzz, if divisiable by 5, the value is Buzz, and if the value is divisable by 3, the value is Fizz. Else the value is just the number itself.
 * @Parameter - We are given a number that will be 1 or larger.
 * @Return - We return an array of numbers and possibly strings.
 * @Example - 5 => [1, 2, Fizz, 4, Buzz]
 * @Pseudo - Just look at the code.
 */

function fizzbuzz(n) {
  let array = []
  
  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {array.push("FizzBuzz")}
    else if (i % 5 === 0) {array.push("Buzz")}
    else if (i % 3 === 0) {array.push("Fizz")}
    else {array.push(i)}
  }
  
  return array
}

/**
 * @Description - We are given a two numbers and must return 1 if there is a single digit number that is repeated three times next to each other in the first number AND two times next to each other in the second number. It must be the same single digit number repeated in both numbers. Else return a 0.
 * @Parameters - We are given two numbers that are not negative.
 * @Return - We return 1 or 0 depending on the rules above.
 * @Example - 10560002, 100 => 1
 * @Pseudo - I decided to use loop through both arrays once. I used an array to keep track of which numbers are three in a row in the first number and then checked every double repeats in the second number and see if they existed in the array of triplets. I made sure to return right away if I found any that were. Probably should have used an object instead of an array to keep track of the numbers that were triplets.
 */

function tripledouble(num1, num2) {
  num1 = num1.toString().split("")
  num2 = num2.toString().split("")
  
  let triple = 0
  let tripleArr = []
  
  for (let i = 0; i < num1.length; i++) {
    if (num1[i] === num1[i+1]) {
      if (num1[i] === num1[i+2]) {
        triple = 1
        if (!tripleArr.includes(num1[i])) {tripleArr.push(num1[i])} //if not already in the array of triples
        i += 2 //increment since we checked these already
      }
    }
  }
  
  if (triple === 0) {return 0}
  
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] === num2[i+1]) {
      if (tripleArr.includes(num2[i])) {return 1} //if a double and the number is in the triples array
    }
  }
  
  return 0
}

/**
 * @Description - We are given three numbers that represent hours, minutes, and seconds and return the amount of milliseconds that equals.
 * @Parameter - We are given three numbers. The numbers are seem to be in 24 hour format, but it is not specifically said.
 * @Return - We are return a number depending on the numbers given.
 * @Example - 0, 1, 0 => 60000
 * @Pseudo - I chose to convert each number separately and add them together.
 */

function past(h, m, s){
  let total
  
  total = s * 1000
  
  total = total + m * 60 * 1000
  
  total = total + h * 60 * 60 * 1000
  
  return total
}

/**
 * @Description - We are given an array of numbers and must return the inverse of each number in the array.
 * @Parameter - We are given an array of numbers that can be negative, positive, or 0.
 * @Return - We return an array of numbers following the rules above.
 * @Example - [1, -2, 3] => [-1, 2, -3]
 * @Pseudo - Not really needed
 */

function invert(array) {
  return array.map(val => val * -1)
}

/**
 * @Description - Given an array of numbers (your class's scores) and a number (your score), return true if the number is greater than the average of the numbers in the array.
 * @Parameters - We are given an array of numbers and a number. We are not told whether the array can be empty or not. All test cases did not test whether there could be some other variable.
 * @Return - We return true or false depending on the rules above.
 * @Example - [50, 40, 30], 80 => true
 * @Pseudo - I used reduce to sum all the numbers in the array and divided it by the length to get the average to compare the numbers.
 */

const betterThanAverage = (classPoints, yourPoints) => classPoints.reduce((prev, curr) => prev + curr, 0) / classPoints.length > yourPoints ? false : true

/**
 * @Description - Given two numbers, return the numbers multiplied together if both numbers are positive. Otherwise, return 0.
 * @Parameters - We are given two numbers that can be positive, 0, or negative.
 * @Return - We return a number depending on the rules above.
 * @Example - 5, -5 => 0
 * @Pseudo - I handled the special case with two negatives that would be > 0 when returning m * n. Otherwise I return m * n as long as it is > 0.
 */

function paperwork(n, m) {
  if (n < 0 && m < 0) {return 0}
  let num = n * m
  return num > 0 ? num : 0
}

/**
 * @Description - Make a function and return a string that says "hello world!" 
 * @Parameter - There are no parameters that are given.
 * @Return - We return a string no matter what
 * @Example - "hello world!"
 */

function greet() {
  return "hello world!"
}

/**
 * @Description - Given an array of numbers, return the average of the numbers. If the array is empty, return 0.
 * @Parameters - We are given an array of numbers that may be empty.
 * @Return - We return a number following the rules above.
 * @Example - [1, 2, 3, 4, 5] => 3
 */

function findAverage(array) {
  return array.length === 0 ? 0 : array.reduce((prev, curr) => prev + curr) / array.length
}

/**
 * @Description - Given a number, return an array of numbers starting from that number until 1.
 * @Parameters - We are given a number. Number always seems to be positive or 0.
 * @Return - We return an array of numbers.
 * @Example - 5 => [5, 4, 3, 2, 1]
 */

const reverseSeq = n => {
  let reverseArr = []
  
  for (let i = n; i > 0; i--) {
    reverseArr.push(i)
  }
  
  return reverseArr
};

/**
 * @Description - Given a non-empty array of numbers, return a number such that each number of the array is multiplied in ascending order.
 * @Parameter - We are given an array of numbers that will not be empty.
 * @Return - We return a number following the rules above.
 * @Example - [1, 2, 3, 4] => 24
 */

function grow(x){
  return x.reduce((prev, curr) => prev * curr)
}

/**
 * @Description - Given an string, return the string capitalized.
 * @Parameter - We are given a string. No funny business.
 * @Return - We return a string following the rules above
 * @Example - "Hello World" => "HELLO WORLD"
 */

function makeUpperCase(str) {
  return str.toUpperCase()
}

/**
 * @Description - Given three numbers, distance to the pump, mpg, and gallons left, return true or false on whether or not you can make it to the gas station. 
 * @Parameter - We are given three numbers. All numbers in given tests are >= 0.
 * @Return - We return true or false depending on whether or not you will make it to the gas station with the given inforamtion.
 * @Example - (50, 25, 2) => true
 */

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump ? true : false
 };

 /**
  * @Description - When given two numbers that represents the number of bullets you have and the amount of dragons you must defeat, return true or false on whether or not you can defeat all the dragons if each dragon takes two bullets to defeat.
  * @Parameters - We are given two numbers. The given tests only show cases where the number is 0 or greater and that they are only numbers.
  * @Return - We return true or false depending on the info above
  * @Example - (6, 2) => true
  */

 function hero(bullets, dragons){
  return bullets / 2 >= dragons ? true : false
}

/**
 * @Description - When given a name return a specific string when the name is a certain name, else it returns another string for everyone else.
 * @Parameters - We are given a string. No funny business.
 * @Return - We return a string depending on the given string.
 * @Example - "Bob" => "Hello, Bob!", "Johnny" => "Hello, my love!"
 */

function greet(name){
  if(name === "Johnny") {return "Hello, my love!"}
  else {return "Hello, " + name + "!"}
}

/**
 * @Description - When given a string of DNA values, change the DNA values to RNA values.
 * @Parameter - We are given a string of letters that are capitalized and it could be an empty string.
 * @Return - We return a string that converts the "T" values (DNA) to "U" (RNA) since that is the only change.
 * @Example - "GCAT" => "GCAU"
 */

function DNAtoRNA(dna) {
  return dna.split("").map(val => val === "T" ? "U" : val).join("")
}

/**
 * @Description - When given a number, return a string repeated that many times where i would be the amount of times repeated so far. `${i} sheep...`
 * @Parameter - We are given number that will be >= 0
 * @Return - We return a string that varies depending on the given parameter.
 * @Example - 3 => "1 sheep...2 sheep...3 sheep..."
 */

var countSheep = function (num){
  let str = ""
  for(let i = 1; i <= num; i++) {str += `${i} sheep...`}
  return str
}

/**
 * @Description - Given an array of numbers, return the average of the numbers combined rounded down.
 * @Parameter - We are given an array of numbers. The array will never be empty. No funny business from the test cases we are given.
 * @Return - We return a number following the rules above.
 * @Example - [1,2,3,4,5] => 3
 */

function getAverage(marks){
  return Math.floor(marks.reduce((prev, curr) => prev + curr) / marks.length)
}

/**
 * @Description - We are given two arrays of numbers and must return the sum of both arrays together.
 * @Parameter - We are given two arrays of numbers. No funny business.
 * @Return - We return a number, which is the sum of all numbers in both arrays.
 * @Example - [1, 2, 3, 4], [1, 2, 3, 4] => 20
 */

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((prev, curr) => prev + curr, 0) + arr2.reduce((prev, curr) => prev + curr, 0)
}

/**
 * @Description - We are playing a game of rock, paper, scissors and must return the winner or if they drawed.
 * @Parameter - We are given two strings. No funny business.
 * @Return - We return a string depending on who wins or if it is a draw.
 * @Example - "rock", "paper" => "Player 2 won!"
 */

const rps = (p1, p2) => {
  if (p1 === p2) {return "Draw!"}
  else if (p1 === "scissors" && p2 === "paper") {return "Player 1 won!"}
  else if (p1 === "rock" && p2 === "scissors") {return "Player 1 won!"}
  else if (p1 === "paper" && p2 === "rock") {return "Player 1 won!"}
  else {return "Player 2 won!"}
};

/**
 * @Description - We are given an array of strings that are formatted as "x:y" where x is your team's points and y is your opponents team's points. If x > y, you gain 3 points towards the championship. If x === y, you gain 1 point towards the championship. Else you gain no points. Return how many points you have towards the championship after 10 games.
 * @Parameters - We are given an array of strings of length 10. The strings are formatted as x:y where x is your points and y is your oppenent's points.
 * @Return - We return a number following the rules above.
 * @Example ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"] => 15
 */

function points(games) {
  let total = 0
  
  for (let i = 0; i < 10; i++) {
    let team1 = games[i].charAt(0)
    let team2 = games[i].charAt(2)
    
    if (team1 > team2) {total += 3}
    else if (team1 === team2) {total++}
  }
  
  return total
}

/**
 * @Description - Given a number, return an array from 1 to that number.
 * @Parameters - We are given a number. It always seems to be greater than 1.
 * @Return - We return an array of numbers.
 * @Example - 3 => [1, 2, 3]
 */

function monkeyCount(n) {
  let arr = []
  
  for(let i = 1; i <= n; i++) {
    arr.push(i)
  }
  
  return arr
}

/**
 * @Description - When given an array of numbers and strings that contain digits, return the sum of all digits as if they are numbers. 
 * @Parameters - We are given an array of numbers and string that are digits. No funny business otherwise.
 * @Return - We return the sum of all of the numbers.
 * @Example - [9, 3, '7', '3'] => 22
 */

function sumMix(x){
  return x.reduce((prev, curr) => prev + Number(curr), 0)
}

/**
 * @Description - Given three numbers that are your grades on tests, return the letter grade based on the average of the three scores. A >= 90, B >= 80 && < 90, C >= 70 && < 80, D >= 60 && < 70, or F if lower. 
 * @Parameters - We are given three numbers. No funny business.
 * @Return - We return a string depending on the average of the three given numbers.
 * @Example - 70,70,100 => 'B'
 */

function getGrade (s1, s2, s3) {
  let avg = (s1 + s2 + s3) / 3
  
  if (avg >= 90) {return "A"}
  else if (avg >= 80) {return "B"}
  else if (avg >= 70) {return "C"}
  else if (avg >= 60) {return "D"}
  else {return "F"}
}

/**
 * @Description - We are given two strings, a visitor name and the bosses name. If the visitor's === the bosses name, return "Hello boss", else return "Hello guest" 
 * @Parameter - We are given two strings. Names are case sensative. No funny business otherwise.
 * @Return - We return a string depending on the names given.
 * @Example - "Bob", "Bob" => "Hello boss"
 */

function greet (name, owner) {
  if (name === owner) {return `Hello boss`}
  else {return "Hello guest"}
}

/**
 * @Description - We are given two numbers that represent the length and width of a quadrilateral. If the quadrilateral is a sqaure, return the area of it, else return the perimiter.
 * @Parameter - We are given two numbers. No funny business.
 * @Return - We return a number depending on the values of the given numbers.
 * @Example - 3, 3 => 9
 */

const areaOrPerimeter = function(l , w) {
  return l === w ? l * w : l * 2 + w * 2
};

/**
 * @Description - Given an string of characters, return the string without any exclamation points in it. 
 * @Parameters - We are given a string. No funny business with it.
 * @Return - We return the given string without any exclamation points.
 * @Example - "!Hello!!" => "Hello"
 */

function removeExclamationMarks(s) {
  return s.split("!").join("")
}

/**
 * @Description - We are given two strings, an animal and a food dish. If the first and last letter of the animal and dish is the same, return true, else false
 * @Paramters - We are given two strings. The first one is the name of an animal and the other is a food dish. No funny business.
 * @Return - We return true or false following the instructions above.
 * @Example - "bear", "macaroni and cheese" => false     "chickadee", "chocolate cake" => true
 */

function feast(beast, dish) {
  return (beast.charAt(0) === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1))
}

/**
 * @Description - We are given a number of days that you will be renting a car. We need to return the total cost of the rental if each day it costs $40 dollars to rent it. In addition, if it is rented for 3 or more days, they get a $20 discount. Also, if it is rented for 7 or more days, they get a $50 discount. If you get the $50 dollar discount, you do not get the $20 discount.
 * @Parameters - We are given a number. It does not say it is >= 0, but all tests were.
 * @Return - We return a number following the instructions above.
 * @Example - 7 => 230
 */

function rentalCarCost(d) {
  let total = d * 40
  if (d > 2 && d < 7) {total -= 20}
  if (d >= 7) {total -= 50}
  
  return total
}

/**
 * @Description - We are given a string that is the current state of a stop light. We need to return the next state of the light.
 * @Parameters - We are given a string that seems to always be lowercase and will always be a correct state of the light.
 * @Return - We return a string that is the next state of the light.
 * @Example - "red" => "green"
 */

function updateLight(current) {
  if (current === "green") {return "yellow"}
  else if (current === "yellow") {return "red"}
  else {return "green"}
}

/**
 * @Description - Given a string of characters, return that string such that each character is repeated twice right after it. 
 * @Paramater - We are given a string of characters that may be empty, but otherwise no funny business.
 * @Return - We return a string following the rules above.
 * @Example - "Hello" => "HHeelllloo"
 */

function doubleChar(str) {
  return str.split("").map(val => val + val).join("")
}

/**
 * @Description - We are given a number that represents the current month it is and must return a number that represents the quarter of the year it is part of.
 * @Parameter - We are given a number between 1 and 12. No funny business.
 * @Return - We return a number follwing the rules above.
 * @Example - 5 => 2
 */

const quarterOf = (month) => {
  if (month <= 3) {return 1}
  else if (month <= 6) {return 2}
  else if (month <= 9) {return 3}
  else {return 4}
}

/**
 * @Description - We are given an array of values and must return the array such that every even indexed value is removed. 
 * @Parameter - We are given an array. It will always be an array.
 * @Return - We return an array following the rules.
 * @Example - [1, 2, 3, 4, 5] => [1, 3, 5]
 */

function removeEveryOther(arr){
  return arr.filter((val, ind) => ind % 2 === 0)
}

/**
 * @Description - When given an array, return the value of the first non consecutive number in the array. If they are all consecutive numbers, return null.
 * @Parameter - We are given an array of at least two numbers. No funny business otherwise.
 * @Return - We return a number that is the value of the first non consecutive number in the array.
 * @Example [1, 2, 3, 5, 6, 7] => 5
 */

function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {return arr[i + 1]}
  }
  return null
}

/**
 * @Description - When given a number represented in km/h, return the number as cm/sec rounded down.
 * @Parameters - We are given a number greather than or equal to 0. No funny business.
 * @Return - We return a number following the rules above/
 * @Example - 1.08 => 30
 * @Pseudo - I wrote it out as an equation (1.08 / 100,000)x = 30. x = 27.7777777778. Then I used the answer for x to multiply the given number.
 */

function cockroachSpeed(s) {
  return Math.floor(s * 27.7777777778)
}

/**
 * @Description - Given the capacity, the amount of people on the bus, and the amount of people waiting, return 0 if all of the people can board the bus, else return the amount of people over the capicity that cannot get on.
 * @Parameters - We are given three numbers. All tests were positive numbers that produced proper results. Don't have to worry problems like the capcity being larger than the amount of people on the bus.
 * @Return - We return 0 or the amount of people who cannot fit on the bus that are waiting.
 * @Example - 100, 60, 50 => 10
 */

function enough(cap, on, wait) {
  return cap - on >= wait ? 0 : wait - (cap - on)
}