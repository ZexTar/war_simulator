const attProbArmy = () => {
	return (Math.random() > 0.5) ? 'firstArmy' : 'secondArmy' ;
};

//divNumAA - number of divisions in ATACKING ARMY
//divNumVA - number of divisions in VICTIM ARMY
const attProbDivision = (divNumAA, divNumVA) => {
	let attDivision = Math.ceil(Math.random() * divNumAA) - 1;
	let vicDivision = Math.ceil(Math.random() * divNumVA) - 1;
	return [attDivision, vicDivision];
}; 

const highestDmgDiv = (army) => {
	let divDmg = army.divisions.map(division => division.damage);
	let highestDmg = divDmg [0];
	highestDmgIndex = 0;
	for (let i = 0; i < divDmg.length; i++){
		if (divDmg[i] > highestDmg){
			highestDmg = divDmg[i];
			highestDmgIndex = i;
		}
	}
	return highestDmgIndex;
}

const searchTarget = (firstArmy, secondArmy) => {
	console.log(firstArmy, secondArmy);
	let [attArmy, vicArmy] = (attProbArmy() === 'firstArmy') ? 
	[firstArmy, secondArmy] : [secondArmy, firstArmy];
	let [attDivision, vicDivision] = (attArmy.strategy === 'default')?
	attProbDivision(attArmy.divisions.length, vicArmy.divisions.length)
	let [attDivision, vicDivision] = (attArmy.strategy === 'attack strongest')?
	[highestDmgDiv(attArmy), highestDmgDiv(vicArmy)];
	:null
	console.log(attDivision, vicDivision);
	return [[attArmy, attDivision], [vicArmy, vicDivision]]; 
};

module.exports = searchTarget;












