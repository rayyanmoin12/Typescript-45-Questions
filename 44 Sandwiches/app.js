"use strict";
function order(items) {
    console.log('\nHere is the summary of your order:');
    for (let i = 0; i < items.length; i++) {
        console.log('-' + items[i]);
    }
}
console.log("Order 1:");
order(['Ketchup', 'Mustard']);
console.log("\nOrder 2:");
order(['Beef', 'Chicken', 'Lemon']);
console.log("\nOrder 3:");
order(['Rice', 'Pudding', 'Lime']);
