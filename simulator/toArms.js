const searchTarget = require('./searchTarget.js');

const isDivActive = (army) => {
		return army.divisions.filter(division => division.health > 0);
}

const toArms = (army1, army2) => {
	let [firstArmy, secondArmy] = [army1, army2];
	const aBit = () => new Promise((res, rej) => setTimeout(res, 5000));
	(async function fighToDeath(){
		while (firstArmy.divisions.length > 0 && secondArmy.divisions.length > 0){
			let [[attArmy, attDivision], [vicArmy, vicDivision]] = searchTarget(firstArmy, secondArmy);
			if (attArmy === firstArmy){
			 	secondArmy.divisions[vicDivision].health -= firstArmy.divisions[attDivision].damage;
			 	console.log([`Conflict -> Division ${attDivision} of ${firstArmy.armyName} dealt`,
			 	`${firstArmy.divisions[attDivision].damage} damage to ${vicDivision} division of`,
			 	`${secondArmy.armyName}`].join(' '));
			}
			else{
			 	firstArmy.divisions[vicDivision].health -= secondArmy.divisions[attDivision].damage;
			 	console.log([`Conflict -> Division ${attDivision} of ${secondArmy.armyName} dealt`,
			 	`${secondArmy.divisions[attDivision].damage} damage to ${vicDivision} division of`,
			 	`${firstArmy.armyName}`].join(' '));
			}
			firstArmy.divisions = isDivActive(firstArmy);
			secondArmy.divisions = isDivActive(secondArmy);
			console.log(firstArmy, secondArmy);
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


