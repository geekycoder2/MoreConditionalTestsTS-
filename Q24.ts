// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array

// 1.Tests for equality and inequality with strings
//  Comparison Operators === , !==

const string1: string = "hello";
const string2: string = "world";

console.log(string1 === string2); // false ( We use this === for equality so Here, string1 and string2 have different values)
console.log(string1 !== string2); // true( We use this !== for inequality so Here, string1 and string2 have different values)

// 2.Tests using the lower case function

const str: string = "Hello";
// Check if the lowercase version of the string is exactly equal to "hello"
console.log(str.toLowerCase() === "hello"); // true
// Check if the lowercase version of the string is NOT exactly equal to "hello"
console.log(str.toLowerCase() !== "hello"); // false

// 3. Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 15;

// Equality 
console.log(num1 === num2); // false (10 is not equal to 15)

// Inequality 
console.log(num1 !== num2); // true (10 is not equal to 15)

// Greater Than 
console.log(num1 > num2); // false (10 is not greater than 15)

// Less Than 
console.log(num1 < num2); // true (10 is less than 15)

// Greater Than or Equal To 
console.log(num1 >= num2); // false (10 is not greater than or equal to 15)

// Less Than or Equal To 
console.log(num1 <= num2); // true (10 is less than or equal to 15)

// 4. Tests using "and" and "or" operators
const x: number = 15;
const y: number = 20;

console.log(x > 0 && y < 20); // true (both conditions are true)
console.log(x > 0 || y > 20); // true (at least one condition is true)

// 5. Test whether an item is in a array
const myArray: number[] = [1, 2, 3, 4, 5];
const itemToCheck: number = 3;

console.log(myArray.includes(itemToCheck)); // true

// 6. Test whether an item is not in a array
const myArr: number[] = [1, 2, 3, 4, 5];
const ArrToCheck: number = 6;

console.log(myArr.includes(ArrToCheck)); // false





