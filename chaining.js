
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

//---declared new object representing altered array---//
//---selected div to contain new array(part STEP 4)---//
//---STEP 1: called old array and used .sort method function to descend current array order---//
//---STEP 2: used filter function to remove all numbers greater then 19---//
//---STEP 3: used map method to take "result array" of STEP 2  write function that multiplies each remaing number by 1.5 then subtracts 1---//
//---STEP 4: used reduce function take "result array" of STEP 3 and adds remaining numbers together

let changedIntegers = document.querySelector("div").textContent = integers.sort(function(x, y){return y - x}).filter(num => {return num < 19}).map(function(i) {return(i * 1.5) - 1}).reduce((currentTotal, next)=> currentTotal + next)



