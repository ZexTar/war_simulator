const searchTarget = require('./searchTarget.js');

const isDivActive = (army) => {
	return army.divisions.filter(division => division.health > 0);
};

const armySolNum = (army) => {
	return army.divisions.map(division => division.soliders).reduce((acc, num) => {
		return acc+num;
	}, 0);
};

const armyFirepower = (army) => {
	return army.divisions.map(division => division.damage).reduce((acc, num) => {
		return acc+num;
	}, 0);
};

const toArms = (army1, army2) => {
	let [firstArmy, secondArmy] = [army1, army2];
	console.log([`${firstArmy.armyName} with ${firstArmy.divisions.length} divisions and total of`,
	`${armySolNum(firstArmy)} soliders with firepower of ${armyFirepower(firstArmy)} damage total`,
	`is fighting against ${secondArmy.armyName} with ${secondArmy.divisions.length} divisions and`,
	`total of ${armySolNum(secondArmy)} soliders with firepower of ${armyFirepower(secondArmy)}`,
	'damage total \n'].join(' '));
	const fightEvents = (army1, army2, attDivision, vicDivision) => {
		let attacker = army1.divisions[attDivision];
		let victim = army2.divisions[vicDivision];
		const currentDivLvl = attacker.lvl;
		victim.casualties(attacker.damage);
		console.log([`Conflict -> Division ${attDivision + 1} of ${army1.armyName} dealt`,
		`${attacker.damage} damage to division ${vicDivision + 1} of`,
		`${army2.armyName}`].join(' '));
		console.log([`${Math.floor(attacker.damage / 100)} soliders of ${vicDivision + 1}`,
		`division of ${army2.armyName} has been killed`,
		`, ${armySolNum(army2)} still in combat! \n`].join(' '));
		attacker.lvl += 0.2;
		if (currentDivLvl < Math.floor(attacker.lvl))
		console.log(`division ${attDivision + 1} of ${army1.armyName} has just lvled up!!! \n`);	
};
	const aBit = () => new Promise((res, rej) => setTimeout(res, 100));
	(async function fighToDeath(){
		while (firstArmy.divisions.length > 0 && secondArmy.divisions.length > 0){
			let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(firstArmy, secondArmy);
			(attArmy === firstArmy)?
			fightEvents(firstArmy, secondArmy, attDivision, vicDivision)
			:fightEvents(secondArmy, firstArmy, attDivision, vicDivision);
			firstArmy.divisions = isDivActive(firstArmy);
			secondArmy.divisions = isDivActive(secondArmy);
			if (firstArmy.divisions.length === 0){
				let winner = secondArmy;
				console.log(`Army ${winner.armyName} HAS WON THE BATTLE!`);
			}
			else if (secondArmy.divisions.length === 0) {
				let winner = firstArmy;
				console.log(`Army ${winner.armyName} HAS WON THE BATTLE!`);
			}
			await aBit();
		}
	})();
};

module.exports = toArms;


