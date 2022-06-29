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