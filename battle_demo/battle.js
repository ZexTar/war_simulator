const dealDamage = require('./damage.js')

const [rusSol, rusTanks, rusAf, rusNavy] = [30000, 20300, 3914, 352];
const [euSol, euTanks, euAf, euNavy] = [30000, 7700, 2450, 550];

class Army {
	constructor(soliders, tanks, airforce, navy){
		this.soliders = soliders;
		this.tanks = tanks;
		this.airforce = airforce;
		this.navy = navy;
	}
};

const Russia = new Army(rusSol, rusTanks, rusAf, rusNavy);
const Eu = new Army(euSol, euTanks, euAf, euNavy);
console.log(Russia,Eu);

const attProbability = () => {
	return (Math.random() > 0.5) ? 'Russia.soliders' : 'Eu.soliders' ;
};

const rokanje = (army1, army2) => {
	let [firstArmy, secondArmy] = [army1, army2]; 
	while (firstArmy > 0 && secondArmy > 0){
		let attacker = attProbability();
		(attacker === 'Russia.soliders')? 
		secondArmy -= Math.ceil(dealDamage(firstArmy))
		:firstArmy -= Math.ceil(dealDamage(secondArmy));
		console.log(firstArmy, secondArmy)
		return rokanje (firstArmy, secondArmy); //stackoverflow za veci broj jedinica!
	}
};

console.log(rokanje(Russia.soliders, Eu.soliders));

