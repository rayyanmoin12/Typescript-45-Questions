"use strict";
let guest_List = ['Elon', 'Mark', 'Ronnie', 'Phil'];
console.log(`\nUnfortunately, ${guest_List[0]} wont be able to make it.`);
let message = "You are invited to the new party scheduled on 4-7-24.";
guest_List.push('Harry');
guest_List.splice(0, 1); // splice(0, 1) removes 1 element starting from index 0. 
// Since 'Elon' is at index 0, this effectively removes 'Elon' from the array.
for (let i = 0; i < guest_List.length; i++) {
    console.log('\nDear ' + guest_List[i] + ', ' + message);
}
