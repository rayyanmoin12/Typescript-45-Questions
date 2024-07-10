let magicians :string[] = ['Houdini', 'Pascal', 'Messi'];

function copy(array:string[]){
    return [...array];
}

function make_great(magicians: string[]){
    for (let i = 0; i<magicians.length; i++){
        magicians[i] = `The Great ${magicians[i]}`;
    }
}

function show_magicians(magicians: string[]) {
    magicians.forEach(element => {
        console.log(element);
    });
}

// Make a copy of the magicians array
const copyMagician = copy(magicians);

// Modify the copied array
make_great(copyMagician);

// Show the original array
console.log('This is my original copy of the array:');
show_magicians(magicians);

console.log('\nThis is my modified copy of the array:');
show_magicians(copyMagician);
