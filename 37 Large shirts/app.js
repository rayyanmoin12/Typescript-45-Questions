"use strict";
function make_shirt(size = 'Large', message = 'I love Typescript') {
    console.log(`The size of your T-shirt is ${size} and your message is: "${message}".`);
}
// Prints default size and message
make_shirt();
//Prints Medium and default message: 'I love Typescript.'
make_shirt('Medium');
// Prints new size and new message
make_shirt('X-large', 'I love running');
