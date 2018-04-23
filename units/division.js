const Constants = require('./constants.js');

const{soliderHp, soliderNum} = Constants;

const recalculateDamage = (army) => {
	
};

class Division {
	constructor(){
		this.lvl = 1;
    	this.soliders = soliderNum;
    	this.damage = Math.floor(soliderNum * (0.2 + Math.round(Math.random()*4) + 
    	Math.floor(this.lvl) / 5));
    	this.health = soliderNum * soliderHp;
  };
  	casualties (damage) {
  		this.health -= damage;
  		this.soliders -= Math.floor(damage / soliderHp);
  		this.damage = Math.floor(this.soliders * (0.2 + Math.round(Math.random()*4) + 
  		Math.floor(this.lvl) / 5));
  	};
};

module.exports = Division;

