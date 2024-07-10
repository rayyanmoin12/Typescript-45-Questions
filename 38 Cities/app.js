"use strict";
function describe_city(city, country = 'UAE') {
    console.log(`${city} is in ${country}.`);
}
// Prints new city & default country
describe_city('Dubai');
// Prints new city & default country
describe_city('Abu Dhabi');
// Prints new city & new country
describe_city('Rome', 'Italy');
