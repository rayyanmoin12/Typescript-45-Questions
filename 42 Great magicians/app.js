"use strict";
let magicians = ['Houdini', 'Pascal', 'Messi'];
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magicians);
show_magicians(magicians);
