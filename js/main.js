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