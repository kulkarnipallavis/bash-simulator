var commands = require('./commands');
process.stdout.write('\nprompt > ');
process.stdin.on('data', function (data) {
	var cmd = data.toString().trim(); // remove the newline
	if(cmd === "") return process.stdout.write('\nprompt > ');
	var commandParamsArr = cmd.split(" ");
	var commandName =  commandParamsArr.shift();

	commands[commandName](commandParamsArr.join(" "), function(){
			process.stdout.write('\nprompt > ');
		});
});