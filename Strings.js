// string is a sequence of one or more characters that may consist of letter 
// numbers or symbols. strings are primitive data types and are immutable which menas they are unchangig



// strings methods and properties in javascript 

// in javascript strings are primitive data types and they come with several methods and properties that allow you to manipulate query and tranform them. here are some of the most commonly used string methods and properties:

//string properties : 
 //1  length: returns the number of characters in a string

 let str = "Hello, World! jsdjf";
 console.log(str.length); // Output: 13  which also includes space 

 //Strings methodds 

 // 1 charAt(index): returns the character at the specified index in a string

 let str1 = "Hello";
 console.log(str1.charAt(2)); // Output: H
 
 
// 2 charcodeaT(index): returns the Unicode value of the character at the specified index in a string

let str2 = "A";
console.log(str2.charCodeAt(0)); // Output: 101 (Unicode value of 'e') 

// 3 concat(string1, string2, ...): concatenates two or more strings and returns a new string
let str3 = "Hello";
let str4 = "World";
let str5 = str3.concat(" ", str4); 
console.log(str5); // Output: "Hello World" 

// 4 includes(searchString, position): checks if a string contains a specified substring and returns true or false
let str6 = "Hello, World!";
console.log(str6.includes("World")); // Output: true

// 5 indexOf(searchString, position): returns the index of the first occurrence of a specified substring in a string, or -1 if not found

let str7 = "Hello, World!";
console.log(str7.indexOf("World")); // Output: 7

// 6 lastIndexOf(searchString, position): returns the index of the last occurrence of a specified substring in a string, or -1 if not foundre

//replace (searchvalue newValue ): replaces the first occurrence of a specified substring with a new substring and returns a new string

let str8 = "Hello, World!";
console.log(str8.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"


// slice (start and end )

let str9 = "Hello, World!";
console.log(str9.slice(0, 5)); // Output: "Hello" (extracts characters from index 0 to 4)

let str10 = "Hello, World!";
console.log(str10.slice(7,12)); // Output: "World!" (extracts characters from index 7 to the end)


// split(separator, limit): splits a string into an array of substrings based on a specified separator and returns the array

let str11 = "apple, banana, orange";
let fruits = str11.split(",");

console.log(fruits); // Output: ["apple", "banana", "orange"]

// toLowerCase(): converts a string to lowercase and returns a new string

let str12 = "Hello, World!";

console.log(str12.toLowerCase()); // Output: "hello, world!"

// toUpperCae(): converts a string to uppercase and returns a new string

let str13 = "ansosjefojs"
console.log(str13.toUpperCase()); // Output: "ANSOSJEOFJS"

// trim(): removes whitespace from both ends of a string and returns a new string
let str14 = "   Hello, World!   ";
console.log(str14.trim()); // Output: "Hello, World!" (removes leading and trailing spaces)

// trimStart(): removes whitespace from the beginning of a string and returns a new string

let str15 = "   Hello, World!   ";
console.log(str15.trimStart()); // Output: "Hello, World!   " (removes leading spaces)

// starts with (search string) 
let str16 = "  Hello, World!   ";
console.log(str16.startsWith("Hello")); // Output: true (checks if the string starts with "Hello")

// ends with (search string)
let str17 = "Hello, World!   ";
console.log(str17.endsWith("World!")); // Output: true (checks if the string ends with "World!")

// reapt ( count   ): returns a new string with the specified number of repetitions of the original string

let str18 = "Hello";
console.log(str18.repeat(3)); // Output: "HelloHelloHello" (repeats the string 3 times)

// search (regexp): searches for a specified regular expression in a string and returns the index of the first match, or -1 if not found
let str19 = "Hello, World!";
console.log(str19.search(/World/)); // Output: 7 (finds the index of "World" in the string)

// substring(start, end): extracts a substring from a string between the specified start and end indices and returns the new string
let str20 = "Hello, World!";
console.log(str20.substring(0, 5)); // Output: "Hello" (extracts characters from index 0 to 4)


// toString(): converts a string to a string (this is useful when you want to ensure that a value is treated as a string)   
let num = 1000;
let str21 = num.toString();
console.log(typeof str21); // Output: "1000" (converts the number to a string)


// valueOf(): returns the primitive value of a string object (this is useful when you want to get the underlying string value)

let str22 = new String("Hello, World!");
console.log(str22.valueOf(1)); // Output: "Hello, World!" (returns the primitive value of the string object)


