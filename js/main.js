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