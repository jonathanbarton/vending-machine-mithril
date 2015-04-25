var MoneyHandler = MoneyHandler || {};

MoneyHandler.Coin = function(amount) {
	this.weight = m.prop(amount*10);
};

module.exports = MoneyHandler.Coin;