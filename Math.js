// math object in javascript is a built-in object that has properties and methods for mathematical constants and functions.


//math properties 

// returns the value of pi 

//1 
console.log(Math.PI);
//2
console.log(Math.E);  //returns the euler's number ap[proximately 2.718
//3
console.log(Math.LN2); //returns the natural logarithm of 2
//4
console.log(Math.LN10); //returns the natural logarithm of 10
//5
console.log(Math.LOG2E); //returns the base 2 logarithm of e
//6
console.log(Math.LOG10E); //returns the base 10 logarithm of e
//7
console.log(Math.SQRT2); //returns the square root of 2
//8
console.log(Math.SQRT1_2); //returns the square root of 1/2 
//9
console.log(Math.max(1, 2, 3, 4, 5)); //returns the largest of the given numbers

console.log(Math.min(1, 2, 3, 4, 5)); //returns the smallest of the given numbers


// math methods 

//1 math.abs(x) returns the absolute value of x 
console.log(Math.abs(-5)); // returns 5 


// math.ceil(x) returns the smallest integer greater than or equal to x
console.log(Math.ceil(5.1)); // returns 6
// math.floor(x) returns the largest integer less than or equal to x
console.log(Math.floor(5.9)); // returns 5
// math.round(x) returns the value of x rounded to the nearest integer
console.log(Math.round(5.5)); // returns 6
// math.trunc(x) returns the integer part of x  
console.log(Math.trunc(5.9)); // returns 5
// math.pow(x, y) returns the value of x raised to the power of y
console.log(Math.pow(2, 3)); // returns 8 (2^3)
// math.random 
console.log(Math.random()); // returns a random number between 0 and 1
// math.sqrt(x) returns the square root of x
console.log(Math.sqrt(16)); // returns 4

let num1 = -12;
let num2 = 4.6;
let num3 = 16;

// Absolute value of a negative number
console.log(Math.abs(num1));  // Output: 12

// Round a decimal number
console.log(Math.round(num2));  // Output: 5

// Square root of a number
console.log(Math.sqrt(num3));  // Output: 4

// Generating a random number
let randomNum = Math.random() * 10;
console.log(randomNum);  // Output: A random number between 0 and 10

// Power of a number
console.log(Math.pow(2, 3));  // Output: 8

// Maximum of numbers
console.log(Math.max(10, 20, 5));  // Output: 20

// Minimum of numbers
console.log(Math.min(10, 20, 5));  // Output: 5


