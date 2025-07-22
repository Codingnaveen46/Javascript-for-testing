// in javascript stack and heap memory are used to store data.
// Stack memory is used for primitive data types, 
// while heap memory is used for non-primitive data types.

// stack memory is a region of memory that stores data in a last-in, first-out (LIFO) manner.
// Heap memory is a region of memory that stores data in a more flexible manner, allowing for dynamic memory allocation.

// works on a LIFO (last in first out) principle, meaning the last item added is the first one to be removed.

// useage : 

// stores primitive data types like numbers, strings, and booleans.

// undeffined , null, boolean, number, bigtint , string , and symbol 
// are stored in stack memory.

//fast access because stack are quick because of its linear struture

// but is it limited in size and once it is full, it cannot store any more data.

// temporary storage data is cleared when the function execution is comp;ete or the varible goes out of scope.


//example 

function add(a,b){
    let sum = a + b; // sum is stored in stack memory
    return sum; // the function returns the sum
}

console.log(add(5, 10)); // Output: 15


// heap memory stores reference data types such as objects array and functions

let person = {name2: "Naveen", age: 25}; // person is stored in heap memory
let person2 = person; // person2 is a reference to the same object in heap memory
person2.name2 = "Reddy"; // changing person2 affects person because they refer to the same object

console.log(person.name2); // Output: Reddy


// interaction between stack and heap memory:

function greet2(){ 

    let message = " hello bro "; // message is stored in stack memory
    let user = {name: "Naveen"}; // user is stored in heap memory

    return `${message} ${user.name}`; // the function returns a string that combines both
}

console.log(greet2());


 // Output: " hello bro  Naveen"


 // ### **Summary**:
// */ 
// - Stack is for simple, short-lived variables (e.g., numbers, strings, booleans).
// - Heap is for complex, long-lived objects (e.g., arrays, objects).
// - JavaScript’s memory management (including garbage collection) helps developers focus on coding rather than manual memory allocation.

// key difference are as follows 
                // stack                          Heap
// storage ; primitive data and reference : 
// access speed :  Faster                           slower
// size :           limited                         larger 
// memory cleanup :  automatic on scope exit            Garbage collection 



