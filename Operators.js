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
let grade = (marks >= 90) ? 'A' : (marks >= 80) ? 'B' : (marks >= 70) ? 'C' : (marks >= 60) ? 'D' : 'F';
console.log(grade); // Output: B


let num1 = 10;
let num2 = 5;
let sum = num1 + num2;
console.log(sum); // Output: 15



// test commit 