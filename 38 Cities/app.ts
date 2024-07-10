function describe_city(city:string, country:string = 'UAE'){
    console.log(`${city} is in ${country}.`);
}

// Calling the function using arguements
// Prints new city & default country
describe_city('Dubai');

// Prints new city & default country
describe_city('Abu Dhabi');

// Prints new city & new country
describe_city('Rome', 'Italy');
