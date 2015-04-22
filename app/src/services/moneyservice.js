var MoneyService = {
		currentTransaction: {total:0},
		insert: function(coin) {
			if(coin.weight >= 250) {
				MoneyService.currentTransaction.total += 25;
			}else if(coin.weight >= 100 && coin.weight < 250){
				MoneyService.currentTransaction.total += 10;
			}else if(coin.weight >= 50 && coin.weight < 100){
				MoneyService.currentTransaction.total += 5;
			}
			console.log(MoneyService.currentTransaction.total);
		}
};

module.exports = MoneyService;