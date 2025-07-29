// in javascript opearators are specail symbols and keywords that are used to perform oprations on variables and values 
//they allow you to manipulate data compare values or assign values to variables 


// Airthmetic operators 
// These operators are used to perform basic mathematical operations like addition, subtraction, multiplication, and division.

// Addition	5 + 2 → 7
// Subtraction	5 - 2 → 3
// Multiplication	5 * 2 → 10
// Division	5 / 2 → 2.5
// Modulus (Remainder)	5 % 2 → 1
// Exponentiation	2 ** 3 → 8

// Assignment operators
// These operators are used to assign values to variables. They can also perform operations while assigning.

// Assign	let a = 5;
// Add and assign	a += 2; → a = a + 2
// Subtract and assign	a -= 2; → a = a - 2
// Multiply and assign	a *= 2; → a = a * 2
// Divide and assign	a /= 2; → a = a / 2
// Modulus and assign	a %= 2; → a = a % 2
// Exponentiate and assign	a **= 2; → a = a ** 2

// Comparison operators
// These operators are used to compare two values and return a Boolean result (true or false).

// Equal to	5 == '5' → true
// Strict equal to (checks type and value)	5 === '5' → false
// Not equal to	5 != 3 → true
// Strict not equal to (checks type and value)	5 !== '5' → true
// Greater than	5 > 3 → true
// Less than	5 < 3 → false
// Greater than or equal to	5 >= 3 → true
// Less than or equal to	5 <= 3 → false

// Logical operators

// These operators are used to combine multiple conditions or expressions and return a Boolean result.

// Logical AND	true && false → false
// 	`
// Logical NOT	!true → false



// bitwise operators

// Bitwise AND	5 & 1 → 1
// `	Bitwise OR
// Bitwise XOR	5 ^ 1 → 4
// Bitwise NOT	~5 → -6
// Left shift	5 << 1 → 10
// Right shift	5 >> 1 → 2
// Unsigned right shift	5 >>> 1 → 2


// unary operators
// Unary plus	+5 → 5

// Unary plus (converts operand to a number)	+true → 1
// Unary minus (converts operand to a negative number)	-5 → -5
// Increment (adds 1 to operand)	a++ → a = a + 1
// Decrement (subtracts 1 from operand)	a-- → a = a - 1
// Logical NOT (negates operand)	!false → true
// Returns the type of operand	typeof 42 → "number"
// Evaluates an expression without returning a value	void 0 → undefined

// Ternary operator

// If condition is true, expr1 is executed; otherwise, expr2 is executed.	let result = (5 > 3) ? 'Yes' : 'No';

// spread operator
// Expands elements from arrays or objects	let arr = [1, 2, 3]; let newArr = [...arr, 4];

//destructuring assignment
// Unpacks values from arrays or properties from objects into distinct variables.	let [a, b] = [1, 2]; let {x, y} = {x: 10, y: 20};

// Unpacks object properties into variables.	const person = { name: 'John', age: 30 }; const { name, age } = person;
// Unpacks array elements into variables.	const arr = [1, 2]; const [x, y] = arr;




// pratical problems using operators 

let statusCode = 200;
let isSuccess = (statusCode == 201);
console.log(isSuccess);



let Statuscode = 401;
let ifSucess = (Statuscode === 200) ;
console.log(ifSucess); // Output: Failure



let passedTest = 5;
let totaltest = 10;

let passPercentage = (passedTest /totaltest) * 100;
console.log(passPercentage); // Output: 50 



let marks = 85;
let studentGrade = (marks >= 90) ? 'A' : (marks >= 80) ? 'B' : (marks >= 70) ? 'C' : (marks >= 60) ? 'D' : 'F';
console.log(studentGrade); // Output: B


let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum); // Output: 15



// test commit 

// test commit 2  

let num = 27;

// Step 1: Check if odd or even
if (num % 2 !== 0) {
  // It's odd → Add 5
  num += 5;
}

if (num > 20) {
  // Step 3: Divide by 2
  num = num / 2;
}

console.log("Final result:", num);  // Output will be 16



let age = 22;
let hasLicense = true;
let finalCost;

if (age >= 21 && hasLicense) {
  let baseCost = 500;
  let youngDriverFee = (age < 25) ? 150 : 0;
  finalCost = baseCost + youngDriverFee;

  console.log("Eligible to rent a car");
  console.log("Final cost:", finalCost);
} else {
  console.log("Not eligible to rent a car");
}

let userRole = 'admin';
let accessLevel;
if (userRole === 'admin') {
  accessLevel = 'full';
}
else if (userRole === 'editor') {
  accessLevel = 'partial';
} else {
  accessLevel = 'none';
}
console.log("Access Level:", accessLevel); // Output: Access Level: full


// let userAge = 16;

// if (userAge >= 18) {
//     console.log("this person can vote");
// } else {
//     console.log("this person cannot vote");
// }


// write some problems for operators 

// Problem 1: Check if a number is even or odd and perform an operation based on the result

let number = 15; 
if (number % 2 === 0) {
    // If even, multiply by 2
    number *= 2;
}
else {
    // If odd, subtract 3
    number -= 3;
}

console.log("Result after operation:", number); // Output will be 12

// Problem 2: Calculate the final price of a product after applying a discount based on the price range
let productPrice = 120; // Price of the product
let discount;
if (productPrice > 100) {
    // If price is greater than 100, apply a 20% discount
    discount = productPrice * 0.20;
}

else if (productPrice > 50) {
    // If price is between 50 and 100, apply a 10% discount
    discount = productPrice * 0.10;
} else {
    // If price is 50 or less, no discount
    discount = 0;
}
let finalPrice = productPrice - discount;

console.log("Final price after discount:", finalPrice); // Output will be 96


// Problem 3: Determine the grade based on marks using a nested ternary operator

let studentMarks = 75; // Marks obtained by the student
let grade = (studentMarks >= 90) ? 'A' :
            (studentMarks >= 80) ? 'B' :
            (studentMarks >= 70) ? 'C' :
            (studentMarks >= 60) ? 'D' : 'F';
console.log("Grade:", grade); // Output will be C
// Problem 4: Determine the access level based on user role using a switch statement



// problems on operators
let userRole1 = 'editor'; // Role of the user
let accessLevel1;
switch (userRole1) {
    case 'admin':
        accessLevel1 = 'full';
        break;
    case 'editor':
        accessLevel1 = 'partial';
        break;
    case 'viewer':
        accessLevel1 = 'read-only';
        break;
    default:
        accessLevel1 = 'none';
}

console.log("Access Level:", accessLevel1); // Output: Access Level: partial

