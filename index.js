var chalk = require('chalk');

module.exports = (function() {
	
	function aiyo() {
		console.log(chalk.red('Aiyo !!!'));
	}

	function shaa() {
		console.log(chalk.green('Shaa !!!'));	
	}

	return {
		aiyo: aiyo,
		shaa: shaa
	}

})();