import { reverse } from "dns";

let places :string[] = ['Prague', 'Melbourne', 'Beijing', 'Vienna', 'Baku'];

console.log("\nOriginal order")
console.log(places); // Original order

let sortedPlaces = places.slice(); // Create a copy of the array using slice()

sortedPlaces.sort(); // Sort the copied array in alphabetical order

console.log("\nAlphabetical order")
console.log(sortedPlaces); // Alphabetical order

console.log("\nOriginal order")
console.log(places); // Original order

let reverseOrder = places.slice();

reverseOrder.sort(); // Sort the copied array in alphabetical order

reverseOrder.reverse(); // Reverse the alphabetical order

console.log("\nReverse alphabetical order")
console.log(reverseOrder); // Reverse alphabetical order

console.log("\nOriginal order")
console.log(places);

let reversePlaces = places.reverse();

console.log("\nReverse order");
console.log(reversePlaces);

let againReverse = places.reverse();

console.log("\nReverse order again");
console.log(againReverse);

places.sort();

console.log("\nAlphabetical order");
console.log(places);

places.reverse();

console.log("\nReverse alphabetical");
console.log(places);


places.splice(1,0,'Zurich'); // Add zurich to index 1
console.log(places); 

places.splice(3,1); // Remove Melbourne from index 3
console.log(places);


