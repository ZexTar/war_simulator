const Division = require('./units/division.js');
const Army = require('./units/army.js');
const searchTarget = require('./simulator/searchTarget.js');

//testing units creation

const divisionGenerator = () => {
	return Math.ceil(Math.random() * 5);
}

let b = new Division();
let Europe = new Army('EU');
Europe.deployDivisions(divisionGenerator());
let Isil = new Army('jihad');
Isil.deployDivisions(divisionGenerator());

//testing searchTargetEngine

let [attacker, victim] = searchTarget(Europe, Isil); 
console.log(attacker, victim);

