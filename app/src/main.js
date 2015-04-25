'use strict';
//var _ = require('underscore');


var MoneyHandler = require("./components/moneyhandler");
m.module(document.getElementById("money-handler"), {controller: MoneyHandler.controller, view: MoneyHandler.view});

var ItemDispenser = require("./components/itemdispenser");
m.module(document.getElementById("item-dispenser"), {controller: ItemDispenser.controller, view: ItemDispenser.view});
