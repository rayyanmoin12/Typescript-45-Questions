"use strict";
let current_users = ['Rayyan', 'Faisal', 'Hadi', 'RaMEsh', 'NaThan'];
let new_users = ['Nigel', 'HAdi', 'AkId', 'Ramesh', 'Saad'];
// Convert all current usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(username => username.toLowerCase());
new_users.forEach(newUsername => {
    let new_users_lower = newUsername.toLowerCase();
    if (current_users_lower.includes(new_users_lower)) {
        console.log(`${newUsername} is not available. Please choose a different username.`);
    }
    else {
        console.log(`${newUsername} is available!`);
    }
});
