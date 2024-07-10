"use strict";
let animals = ['Lion', 'Tiger', 'Leopard'];
for (let i = 0; i < animals.length; i++) {
    if (animals[i] === 'Lion') {
        console.log(`${animals[i]} is the king of the jungle!`);
    }
    else if (animals[i] === 'Tiger') {
        console.log(`${animals[i]}s hunt alone & at night time.`);
    }
    else {
        console.log(`${animals[i]}s have beautiful stripes.`);
    }
}
;
console.log('\nThey are all dangerous wild animals.');
animals.forEach(elements => {
    if (elements === 'Lion') {
        console.log(`\n${elements} is the king of the jungle!`);
    }
    else if (elements === 'Tiger') {
        console.log(`${elements}s hunt alone & at night time.`);
    }
    else {
        console.log(`${elements}s have beautiful stripes.`);
    }
});
console.log('\nThey are all dangerous animals!');
