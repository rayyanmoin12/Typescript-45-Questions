"use strict";
let guest_List = ['Elon', 'Mark', 'Ronnie', 'Phil'];
guest_List[0] = 'Harry'; // Added to beginning by replacing 'Elon' 
guest_List.push('Rafay'); // Added to the end of the list
guest_List.splice(2, 0, 'Faiq'); // inserts 'Faiq' at index 2 in the guest_List array. 
// The second argument 0 specifies that no elements should be removed.
let message = " You are invited to the new party scheduled on 8-7-24.";
let new_message = " Only the two of you are invited to my party!";
// Remove guests until only two names remain
while (guest_List.length > 2) {
    // Pop a name from the end of the list
    let removedGuest = guest_List.pop();
    // Print a message to the removed guest
    console.log(`\nSorry, ${removedGuest}, you're no longer invited to dinner.`);
}
for (let i = 0; i < guest_List.length; i++) {
    console.log('\n' + guest_List[i] + ',' + new_message);
}
console.log("\nNew table wont arrive on time. I only have space for 2 people.");
// Now, i have removed the remaining 2 guests.
guest_List.splice(0, 2);
console.log(guest_List);
