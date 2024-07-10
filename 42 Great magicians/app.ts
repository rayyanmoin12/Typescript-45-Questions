let magicians :string[] = ['Houdini', 'Pascal', 'Messi'];

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

// Modify the array of magicians by adding "the Great"
make_great(magicians);

// Show the modified list of magicians
show_magicians(magicians);