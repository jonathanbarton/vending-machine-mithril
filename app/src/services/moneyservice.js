var MoneyService = {
		currentTransaction: {total:0, coins:[]},
		deposited: 0,
		status: m.prop("INSERT COIN"),
		updateStatus: function(message){
			var finalMessage;
			if(!message){
				finalMessage = MoneyService.currentTransaction.total.toFixed(2)
			}else {
				finalMessage = message;
			}
			MoneyService.status(finalMessage);
		},
		insert: function(coin) {
			var updateAmount = 0;
			if(coin.weight() >= 250) {
				updateAmount = 0.25;
			}else if(coin.weight() >= 100 && coin.weight() < 250){
				updateAmount = 0.1;
			}else if(coin.weight() >= 50 && coin.weight() < 100){
				updateAmount = 0.05;
			}
			MoneyService.currentTransaction.coins.push(updateAmount);
			MoneyService.currentTransaction.total += updateAmount;
			MoneyService.updateStatus();
		},
		dispense: function(item) {
			var currentTotal = MoneyService.currentTransaction.total; 
			if(currentTotal - item.cost < 0) {
				MoneyService.updateStatus("PRICE: " + item.cost.toFixed(2));
				return false;
			}else {
				MoneyService.currentTransaction.total -= item.cost;
				MoneyService.updateStatus("THANK YOU");
				console.log(MoneyService.currentTransaction.coins);	
				return true;			
			}
		},
		makeChange: function() {
		},
};

module.exports = MoneyService;