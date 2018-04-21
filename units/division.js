const Constants = require('./constants.js');

const{soliderHp, soliderNum} = Constants;

class Division {
	constructor(){
    	this.soliders = soliderNum;
    	this.damage = soliderNum * Math.round(Math.random()*5);
    	this.health = soliderNum * soliderHp;
  };
};

module.exports = Division;

