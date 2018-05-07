const Division = require('./division.js');

class Army {
	constructor(armyName){
		this.armyName = armyName;
		this.divisions = [];
		this.strategy = 'default';

	}
	deployDivisions(number){
  		while (number){
  			this.divisions.push(new Division());
  			number--;
  		}
	}
	changeStrat(stratname){
		this.strategy = stratname;
	}
}
module.exports = Army;