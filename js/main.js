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
//test
//Not sure why it is blue now