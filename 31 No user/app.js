"use strict";
let userNames = ['Rayyan', 'Usman', 'Polo', 'Saeed', 'Bilal'];
if (userNames.length === 0) {
    console.log('We need to find some users!');
}
else {
    let removedNames = userNames.splice(0, 5);
    console.log('Username list is empty! ' + userNames.length);
}
