"use strict";
let magicians = ['Houdini', 'Pascal', 'Messi'];
function copy(array) {
    return [...array];
}
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
const copyMagician = copy(magicians);
make_great(copyMagician);
console.log('This is my original copy of the array:');
show_magicians(magicians);
console.log('\nThis is my modified copy of the array:');
show_magicians(copyMagician);
