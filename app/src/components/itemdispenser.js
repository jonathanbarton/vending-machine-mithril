var ItemDispenser = ItemDispenser || {};

ItemDispenser.controller = function() {
	var MoneyService = require("../services/moneyservice");
	var items = [
		{
			name: 'candy',
			cost: 0.65
		},
		{
			name: 'cola',
			cost: 1.0
		},
		{
			name: 'chips',
			cost: .5
		}
	];

	this.onCandy = function () {
		var candy = items[0];
		MoneyService.dispense(candy);
	};

	this.onCola = function () {
		var cola = items[1];
		MoneyService.dispense(cola);
	};

	this.onChips = function () {
		var chips = items[2];
		MoneyService.dispense(chips);
	};
};

ItemDispenser.view = function(controller){
	return m("div", [
		m("br"),
			m("button", {onclick: controller.onCandy}, "CANDY - 0.65"),
			m("button", {onclick: controller.onCola}, "COLA - 1.00"),
			m("button", {onclick: controller.onChips}, "CHIPS - 0.50"),
		m("br")
	]);
};

module.exports = ItemDispenser;