"use strict";
let userName = 'rayyan';
let lowercase = userName.toLowerCase();
let uppercase = userName.toUpperCase();
let title = userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
console.log(lowercase);
console.log(uppercase);
console.log(title);
