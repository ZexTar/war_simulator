const Division = require('./division.js');

class DivisionInArms extends Division {
	constructor(soldiers, damage, health){
		super (soldiers, damage, health);
	}
}
module.exports = DivisionInArms;