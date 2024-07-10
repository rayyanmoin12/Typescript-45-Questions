"use strict";
// Equality test
console.log("Equality test with string: ", "Microsoft" === "Microsoft");
// '===' 3 equals sign checks whether the data type match as well.
// Inequality test
console.log("Inequality test with string: ", "Microsoft" != "Microsoft");
console.log("Inequality test with string: ", "Microsoft" != "Apple");
// Test using lowercase function
console.log("Lowercase function test: ", "PILOT".toLowerCase() === "pilot");
// Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to, and less than or equal to.
console.log("is 6 equal to 6? ", 6 === 6);
console.log("is 6 not equal to 6? ", 6 != 6);
console.log("Is 32 not equal to 45? ", 32 != 45);
console.log("Is 6 greater than 4? ", 6 > 4);
console.log("Is 6 less than 3? ", 6 < 3);
console.log("Is 5 greater than or equal to 4? ", 5 >= 4);
console.log("Is 7 less than or equal to 5? ", 7 <= 5);
// • Tests using "and" and "or" operators
console.log("And operator test ", 4 === 4 && 12 > 4);
// Both conditions have to be right for the output to be true.
console.log("Or operator test ", 4 === 3 || 3 > 4);
// Atleast one condition has to be right for the output to be true.
// • Test whether an item is in a array
let countries = ['Turkey', 'Somalia', 'Sudan', 'Egypt'];
console.log("Check if Turkey is in array: ", countries.includes('Turkey'));
// • Test whether an item is not in a array
console.log("Check if Poland is not in array: ", !countries.includes('Poland'));
// !countries.includes('Germany') checks if 'Poland' is not in the array.
