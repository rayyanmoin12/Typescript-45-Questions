let userName :string = 'rayyan';

let lowercase :string = userName.toLowerCase();
let uppercase :string = userName.toUpperCase();
let title :string = userName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

console.log(lowercase)
console.log(uppercase)
console.log(title)