var MoneyService = {
		currentTransaction: {total:0},
		deposited: 0,
		status: m.prop("INSERT COIN"),
		updateStatus: function(){
			MoneyService.status(MoneyService.currentTransaction.total.toFixed(2));
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
			MoneyService.currentTransaction.total += updateAmount;
			MoneyService.updateStatus();
		},
		dispense: function(item) {
			MoneyService.currentTransaction.total -= item.cost;
			MoneyService.updateStatus();
		}
};

module.exports = MoneyService;