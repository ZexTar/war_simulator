const Division = require('./division.js');

class Army {
	constructor(armyName){
		this.armyName = armyName;
		this.divisions = [];

	}
	deployDivisions (number){
  		while (number){
  			this.divisions.push(new Division());
  			number--;
  		}
	}
}
module.exports = Army;