//  let new_List :(string | number)[] = ['Moh', 45, 'Pat'];

// new_List.splice(0,0,4); // Adds 4 to the brginnging.
// new_List.splice(2,0,67); // Adds 67 to index 2.
// new_List.push('Rak'); // Adds 'Rak' to last place.

// Datatype of identity object
interface identity {

    name : string,
    age : number,
    blood : string,
    nationality : string,
    Employee : boolean
}

// Identity object
let identity :identity = {

    name : 'Sami',
    age : 23,
    blood : 'O+',
    nationality : 'Polish',
    Employee : true
}

interface car {
    company : string,
    model : number,
    color : string,
    Automatic : boolean
}

let car = {
    company : 'Audi',
    model : 2021,
    color : 'Black',
    Automatic : true
}

console.log(identity);
console.log(car);