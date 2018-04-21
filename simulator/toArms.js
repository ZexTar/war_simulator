const searchTarget = require('./searchTarget.js');

const isDivActive = (army) => {
		return army.divisions.filter(division => division.health > 0);
}

const toArms = (army1, army2) => {
	let [firstArmy, secondArmy] = [army1, army2];
	while (firstArmy.divisions.length > 0 && secondArmy.divisions.length > 0){
		let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(firstArmy, secondArmy);
		if (attArmy === firstArmy)
		 	secondArmy.divisions[vicDivision].health -= firstArmy.divisions[attDivision].damage;
		else
		 	firstArmy.divisions[vicDivision].health -= secondArmy.divisions[attDivision].damage;
		firstArmy.divisions = isDivActive(firstArmy);
		secondArmy.divisions = isDivActive(secondArmy);
		console.log(firstArmy, secondArmy);
	}
	return (firstArmy.divisions.length === 0)? secondArmy: firstArmy;
};

module.exports = toArms;


