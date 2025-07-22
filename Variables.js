// in javascript variables is a container for storing data values variable's allow you to store iunformation that can be used and manipulated throught the code 

let userName = 'John Doe'; // string variable
let isHappy = true; // boolean variable

userName = 'Naveen'; // reassigning the variable

console.log(userName); // Output: Naveen

// reassignment is allowed we can reassign variables to new valuese. meaning we can change its values after initial assignemtn 
// let is a block scope variable, meaning it is only accessible within the block it is defined
// let cannot be re-declared in the same scope 


// no redecleration in the same scipe meaning same let variable twice with in the same scope will throw an error

let age = 25;
age = 30; // This will throw an error: Identifier 'age' has already been declared

console.log(age); // Output: 30


// blocked scope : let is confied to the block { } whenre its declared makeing its accessible only with in that scope


// example for the blocked scope 
if (true){
    let z = 15;
    console.log(z); // Output: 15
    
}

// console.log(z); // This will throw an error: z is not defined

// not hoisted in the same way as var : although let is technically hoisted it remains in a temporal dead zone
// until it is declared, meaning you cannot access it before its declaration 


// example of temporal dead zone 
// console.log(x); // This will throw an error: Cannot access 'x' before initialization : refernce error
let x = 10; // let is hoisted but not initialized
console.log(x); // Output: 10


// naming conventions for variables in javascript 

//1 Camel case : preffered for most variables 
// start with lowercase letter and capitilize each subsequent word 
//example : userName, userAge, isHappy

//2 Descriptive names : use clear and descriptive names that indicate the purpose of the variable
//variable should have names that clearly indicate what they store 

//example : totalPrice , userEmailm isLoggedIn

//3 Avoid single letter names : avoid using single letter names except for loop counters or temporary variables
//example : i, j, k are acceptable for loop counters but not for other variables

//4 Use meaningful names : use names that are meaningful and easy to understand
//example : userList, productDetails, orderStatus

//5 Use lowercase for variables : use lowercase letters for variable names
//example : userName, userAge, isHappy

//6 Avoid reserved keywords : do not use reserved keywords as variable names
//example : var, let, const, function, if, else, switch, case, break, continue, return, etc.
//7 Use underscores for readability : use underscores to separate words in variable names for better readability
//example : user_name, user_age, is_happy
//8 Use consistent naming conventions : use consistent naming conventions throughout your codebase

//example : if you use camel case for one variable, use it for all variables
//9 Use plurals for arrays : use plural names for arrays to indicate that they contain multiple items
//example : userList, productArray, orderItems

const MAX_LENGTH = 255; // constant variable
let currentIndex = 0; // variable that can change over time
currentIndex = 1; // reassigning the variable
console.log(typeof currentIndex); // Output: 1


// Avoide abbreviations : avoid using abbreviations in variable names as they can make the code harder to read and understand
//example : use userName instead of usrNm, use productDetails instead of prodDtl

// Example: Use totalAmount instead of totAmt, getUserData instead of getUsrData.

// example for good variable naming and best practises 

const MAX_USERS = 100; // constant variable for maximum users
let currentUser = null; // variable to store the current user
let userAge = 25; // variable to store the user's age

const isLoggedIn = true; // boolean variable to check if the user is logged in

let shoppingCartItems = ['apple', 'bannana','mango']; // array variable to store shopping cart items

let totalPrice = 0; // variable to store the total price of items in the shopping cart

function calculateDiscount(price,discountPercentage){
    const discountAmount = price * (discountPercentage / 100); // calculate discount amount

    return price - (price * (discountPercentage / 100)); // function to calculate discount
}

