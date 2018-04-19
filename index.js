const Division = require('./units/division.js');
const Army = require('./units/army.js');

let b = new Division();
let Europe = new Army('EU');
Europe.deployDivisions(4);

console.log(b);	
console.log(Europe);	