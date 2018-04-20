const attProbArmy = () => {
	return (Math.random() > 0.5) ? 'firstArmy' : 'secondArmy' ;
};

//divNumAA - number of divisions in ATACKING ARMY
//divNumVA - number of divisions in VICTIM ARMY
const attProbDivision = (divNumAA, divNumVA) => {
	let attDivision = Math.round(Math.random() * divNumAA);
	let vicDivision = Math.round(Math.random() * divNumVA);
	return [attDivision, vicDivision];
}; 

const searchTarget = (firstArmy, secondArmy) => {
  let [attArmy, vicArmy] = (attProbArmy() === 'firstArmy') ? 
  [firstArmy, secondArmy] : [secondArmy, firstArmy]; 
  let [attDivision, vicDivision] = attProbDivision(attArmy.divisions.length, vicArmy.divisions.length);
  return [[attArmy, attDivision], [vicArmy, vicDivision]]; 
}

module.exports = searchTarget;












