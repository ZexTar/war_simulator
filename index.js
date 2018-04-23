const Division = require('./units/division.js');
const Army = require('./units/army.js');
const toArms = require('./simulator/toArms.js');
const searchTarget = require('./simulator/searchTarget.js');


//testing units creation

const divisionGenerator = () => {
	return Math.ceil(Math.random() * 4) + 1;
}

let b = new Division();
let Europe = new Army('SRB ARMY');
Europe.deployDivisions(divisionGenerator());
let Isil = new Army('CRO ARMY');
Isil.deployDivisions(divisionGenerator());

/*testing search engine
console.log(searchTarget(Europe, Isil));
*/

//testing battle engine
let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(Europe, Isil);
toArms(Europe, Isil);



