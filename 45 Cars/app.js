"use strict";
function car(manufacturer, model, color, rims) {
    const carObj = {
        manufacturer: manufacturer,
        model: model,
        color: color,
    };
    if (rims !== undefined) {
        carObj.rims = rims;
    }
    return carObj;
}
const car1 = car('Mercedes', 'T-class', 'Black');
console.log(car1);
const car2 = car('Bugatti', 'S-class', 'Red', true);
console.log(car2);
const car3 = car('Toyota', 'Corolla', 'Beige', false);
console.log(car3);