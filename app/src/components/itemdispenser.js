var ItemDispenser = ItemDispenser || {};

ItemDispenser.controller = function() {
	var MoneyService = require("../services/moneyservice");
	var items = [
		{
			name: 'candy',
			cost: 0.65,
			stock: 10
		},
		{
			name: 'cola',
			cost: 1.0,
			stock: 10
		},
		{
			name: 'chips',
			cost: .5,
			stock: 10
		}
	];

	var _this = this;

	this.inStock = function (item) {
		return item.stock > 0;
	}
	this.destock = function (item) {
		var selectedItem = _.find(items, {name: item.name});
		selectedItem.stock -= 1;
		console.log(item.name, ": ", selectedItem.stock);
	};

	this.handleItem = function(item) {
		if(_this.inStock(item)) {
			if(MoneyService.dispense(item)) {
				_this.destock(item);
			}
		}else {
			console.log("OUT OF STOCK");
		}
	};

	this.onCandy = function () {
		var candy = items[0];
		_this.handleItem(candy);
	};

	this.onCola = function () {
		var cola = items[1];
		_this.handleItem(cola);
	};

	this.onChips = function () {
		var chips = items[2];
		_this.handleItem(chips);
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