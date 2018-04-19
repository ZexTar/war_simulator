const dealDamage = (numSoliders) => {
	let damage = numSoliders*(Math.random()/10);
	return damage;
};

module.exports = dealDamage;
