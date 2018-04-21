const Division = require('./units/division.js');
const Army = require('./units/army.js');
const toArms = require('./simulator/toArms.js');
const searchTarget = require('./simulator/searchTarget.js');


//testing units creation

const divisionGenerator = () => {
	return Math.ceil(Math.random() * 4) + 1;
}

let b = new Division();
let Europe = new Army('EU');
Europe.deployDivisions(divisionGenerator());
let Isil = new Army('jihad');
Isil.deployDivisions(divisionGenerator());

/*testing search engine
console.log(searchTarget(Europe, Isil));
*/

//testing battle engine
let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(Europe, Isil);
let winner = toArms(Europe, Isil);
console.log(`Army ${winner.armyName} HAS WON THE BATTLE!`)


