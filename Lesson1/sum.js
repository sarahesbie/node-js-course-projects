/* ‘Simple mathematics’ program in node.js */
console.log("Assignment1: Sum of two numbers in Node.js");

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

const sum = num1 + num2;

// Print the result
console.log(`The sum of ${num1} and ${num2} is ${sum}.`);
