const Division = require('./units/division.js');
const Army = require('./units/army.js');
const toArms = require('./simulator/toArms.js');
const searchTarget = require('./simulator/searchTarget.js');


//testing units creation

const divisionGenerator = () => {
	return Math.ceil(Math.random() * 4) + 1;
}

let b = new Division();
let Serbia = new Army('SRB ARMY');
Serbia.deployDivisions(divisionGenerator());
let Croatia = new Army('CRO ARMY');
Croatia.deployDivisions(divisionGenerator());

/*testing search engine
console.log(searchTarget(Serbia, Croatia));
*/

//testing battle engine
let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(Serbia, Croatia);
toArms(Serbia, Croatia);

//testing strats
Serbia.changeStrat('attack strongest');

console.log(Serbia);


