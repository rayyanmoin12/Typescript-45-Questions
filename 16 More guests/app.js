"use strict";
let guest_List = ['Elon', 'Mark', 'Ronnie', 'Phil'];
guest_List[0] = 'Harry'; // Added to beginning by replacing 'Elon' 
guest_List.push('Rafay'); // Added to the end of the list
guest_List.splice(2, 0, 'Faiq'); // inserts 'Faiq' at index 2 in the guest_List array. 
// The second argument 0 specifies that no elements should be removed.
guest_List.splice(1, 1);
let message = "You are invited to the new party scheduled on 8-7-24.";
for (let i = 0; i < guest_List.length; i++) {
    console.log('\nDear ' + guest_List[i] + ', ' + message);
}
console.log(`\nUnfortunately, Elon wont be able to make it.`);
console.log('\nGood news! We got a bigger table to accomodate 3 more people');
// guest_List.splice(0, 1); // Remove 1 element starting from index 0
