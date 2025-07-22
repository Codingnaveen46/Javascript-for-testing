// PRIMITIVE DATA TYPES 
const string = "Hello, World!"; // String 
const number = 42; // Number
const boolean = true; // Boolean
// SYMBOL DATA TYPE
const symbol = Symbol("uniqueIdentifier"); // Symbol
// BIGINT DATA TYPE
const bigInt = BigInt(9007199254740991); // BigInt
// OBJECT DATA TYPE
const object = {
    name: "John Doe",
    age: 30,
    isEmployed: true
}; // Object


// primitive data types are the most basic data types of the javascript language.

//characteriscts 

// primitive data types are immutable, meaning they cannot be changed once created. 
// stored directly in the memory (stack)
// compared by values 


//types of the primitive

// 1 number : represents numerical values both integers and flotating point numbers

let age = 25;
let price = 99.99;

// 2 string : represents a sequence of characters enclosed in single or double quotes 

let name = "John Doe";

// 3 boolean : represents a logical value that can be either true or false 

let isActive = true; 
let isAdmin = false;

// 4 null : represents the intentional absence of any object value
let emptyValue = null;

// 5 undefined : represents a variable that has been declared but has not been assigned a value yet
let uninitializedValue; // undefined
console.log(uninitializedValue); // Output: undefined

// 6 symbol : represents a unique and immutable value, often used as object property keys // whic is introduced in 
// ES6 used to create a unique identifier for object properties

let sym = Symbol("description");
console.log(sym); // Output: Symbol(description)  

// what is the purpose of this symbol? any real world use case 


// bigint // represents integers with arbitrary precision, allowing for very large numbers

let bigIntValue = BigInt(1234567890123456789012345678901234567890);
console.log(bigIntValue); // Output: 1234567890123456789012345678901234567890n  


//Non primitive data types 

//1 object : represents a collection of key-value pairs, where keys are strings or symbols and values can be of any data type

let person = {name2: "Naveen", age2: 27, isEmployed2: true, job: {title: "Software Engineer", company: "Moolya"}};
console.log(person.isEmployed2); // Output: true


//2 Array: represents an ordered collection of values, which can be of any data type, including other arrays or objects

let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[1]); // Output: banana

// Function : A block of resuable code 
function greeting(){
    console.log("Hello, World!");
}

greeting(); // Output: Hello, World!

// Date : Represents a specific point in time, including date and time information

let currentDate = new Date();
console.log(currentDate); // Output: Current date and time

//set and map : collections introduced in es6 for unique values and key value pairs respectively 

let set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(3)); // Output: true

//const numbers = [1, 2, 2, 3, 4, 4, 5];
const  numbers = ["apple", "apple","apple", "banana", "cherry", "date"];
const uniqueNumbers = new Set(numbers);
console.log([...uniqueNumbers]); // [1, 2, 3, 4, 5]

//waht is the real world use case of set and map?

// let map = new Map(["key", "value"],["naveen","reddy"]);

// console.log(map.get("key")); // Output: value
// console.log(map.get("reddy")); // Output: reddy

//Yes, but not directly using .get(), because Map only allows lookup by key, not by value.

// Map: Represents a collection of key-value pairs, where keys can be of any data type and values can also be of any data type

let map = new Map([
    ["key", "value"],
    ["naveen", "reddy"]
]);

// Function to get key by value
function getKeyByValue(map, value) {
    for (let [key, val] of map.entries()) {
        if (val === value) {
            return key;
        }
    }
    return undefined; // Return undefined if value is not found
}

console.log(getKeyByValue(map, "value")); // Output: "key"
console.log(getKeyByValue(map, "reddy")); // Output: "naveen"
console.log(getKeyByValue(map, "unknown")); // Output: undefined


const cache = new Map();
function fibonacci(n) {
    if (cache.has(n)) return cache.get(n);
    if (n <= 1) return n;
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache.set(n, result);
    return result;
}
console.log(fibonacci(10)); // 55

// key difference of the primitive and non primitive data types 

// 1. Mutability: Primitive data types are immutable, meaning their values cannot be changed once created. 
// Non-primitive data types, like objects and arrays, are mutable and can be modified after creation.

// 2. Memory Storage: Primitive data types are stored directly in the stack memory, 
// while non-primitive data types are stored in the heap memory, with references to them stored in the stack.

// 3. Comparison: Primitive data types are compared by value, meaning two variables with the same value are considered equal.
// Non-primitive data types are compared by reference, meaning two variables are equal only if they refer to the same object in memory.

// 4. Data Structure: Primitive data types represent single values (like numbers, strings, booleans),
// while non-primitive data types can represent complex structures (like objects, arrays, functions) that can hold multiple values and properties.



// practical example of primitive and non-primitive data types

//1 primitive 

let x = 10; // primitive number
let y = x; // y is a copy of x
y = 20; // changing y does not affect x
console.log(x); // Output: 10 10

//Non- primitive

let obj1 = {key: "value"}; // non-primitive object
let obj2 = obj1; // obj2 is a reference to obj1 it is the copy of the reference 
let obj3 = obj2; // obj3 is also a reference to obj1
obj3.key = "newvalue"; // changing obj3 affects obj1 and obj2
obj2.key = "Naveen reddy"; // changing obj2 affects obj1 

console.log(obj1.key); // Output: newValue 
console.log(obj2.key); // Output: newValue

// string to number 

// using number

let str = "123";
let num = Number(str); // Converts string to number 

console.log( typeof num); // Output: 123

// using parseInt

let str1 = "456";
let num1 = parseInt(str1); // Converts string to integer with base 10

console.log(typeof num1); // Output: 456

// using parseFloat 

let str3 = "123.45";
let num4 = parseFloat(str3); // Converts string to floating-point number

console.log(typeof num4); // Output: 123.45


// using unary plus operator

let str5 = "1233";
let num5 =- +str5; // Converts string to number using unary plus operator
console.log(typeof num5); // Output: 1233


// using Math.floor() (for integers) 

let str6 = "124.45";
let num6 = Math.floor(str6); // Converts string to integer by rounding down
console.log(typeof num6); // Output: 124

// using Math.ceil() (for integers)
let str7 = "124.45";
let num7 = Math.ceil(str7); // Converts string to integer by rounding up
console.log(typeof num7); // Output: 125

// using parseInt() with a radix (for specific base conversions  )

let str8 = "1010";
let num9 = parseInt(str8, 2); // Converts binary string to integer (base 2)

console.log(num9); // Output: 10 (decimal representation of binary 1010) 


