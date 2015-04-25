var MoneyHandler = MoneyHandler || {};

MoneyHandler.controller = function() {
	var Coin = require("../models/coin");
	var MoneyService = require("../services/moneyservice"); 
	this.onInsert25 = function() {
		var quarter = new Coin(25);
		MoneyService.insert(quarter);
	};

	this.onInsert10 = function() {
		var dime = new Coin(10);
		MoneyService.insert(dime);
	};

	this.onInsert5 = function() {
		var nickel = new Coin(5);
		MoneyService.insert(nickel);
	};

};

MoneyHandler.view = function(controller){
	var MoneyService = require("../services/moneyservice"); 
	return m("div", [
		m("div", MoneyService.status()),
		m("br"),
		m("button", {onclick: controller.onInsert25}, "Insert 25 cents"),
		m("button", {onclick: controller.onInsert10}, "Insert 10 cents"),
		m("button", {onclick: controller.onInsert5}, "Insert 5 cents"),
		m("br")
	]);
};

module.exports = MoneyHandler;