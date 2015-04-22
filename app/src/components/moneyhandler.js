var MoneyHandler = MoneyHandler || {};

MoneyHandler.controller = function() {
	var Coin = require("../models/coin");
	var MoneyService = require("../services/moneyservice");
	console.log(MoneyService);
	this.onInsert25 = function() {
		var quarter = new Coin(25);
		console.log(quarter.weight());
		MoneyService.insert(quarter);	
	};

	this.onInsert10 = function() {
		var dime = new Coin(10);
		alert('fuuuuu');	
	};

	this.onInsert5 = function() {
		var nickel = new Coin(5);
		alert('fuuuuu');	
	};
};

MoneyHandler.view = function(controller){
	return m("div", [
		m("button", {onclick: controller.onInsert25}, "Insert 25 cents"),
		m("button", {onclick: controller.onInsert10}, "Insert 10 cents"),
		m("button", {onclick: controller.onInsert5}, "Insert 5 cents"),
		m("br")
	]);
};

module.exports = MoneyHandler;