let pizzas :string[] = ['Mushroom', 'Peperroni', 'Cheese'];

for (let i = 0; i<pizzas.length; i++){
    console.log(`i like ${pizzas[i]} pizza!`);
}

console.log('\nI love cheesy pizza.');
console.log('\nI love pickle toppings.');
console.log('\nI love mushroom toppings.');
console.log('\nI really love pizza!\n');

pizzas.forEach(element => {
    console.log(`I like ${element} pizza.`);
});