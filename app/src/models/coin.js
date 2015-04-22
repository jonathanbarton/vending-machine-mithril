var MoneyHandler = MoneyHandler || {};

MoneyHandler.Coin = function(amount) {
	this.weight = m.prop("weight", amount*100);
};

module.exports = MoneyHandler.Coin;