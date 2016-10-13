var chalk = require('chalk');

module.exports = (function() {
	
	function aiyo(arg) {
		if(arg !== undefined) {
			console.log(chalk.red('Aiyo ' + arg +' !!!'));
		}
		else {
			console.log(chalk.red('Aiyo !!!'));
		}
	}

	function shaa(arg) {
		if(arg !== undefined) {
			console.log(chalk.red('Shaa ' + arg + '!!!'));
		}
		else {
			console.log(chalk.red('Shaa !!!'));
		}
	}

	return {
		aiyo: aiyo,
		shaa: shaa
	}

})();