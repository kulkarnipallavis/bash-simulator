var fs = require('fs');

module.exports = {
	pwd : function(str, doneFunc){
		  process.stdout.write(__dirname);	 
		  doneFunc();
	},

	date : function(str, doneFunc){
	  	process.stdout.write(new Date().toString());
	  	doneFunc();
	},

	ls : function(str, doneFunc){
		
		fs.readdir('.', function(err, files) {
		 if (err){
		 	throw err;
		 	doneFunc();
		 }

		  files.forEach(function(file) {
		    process.stdout.write(file.toString() + "\n");
		  });

		  doneFunc();
		 
		});
	},

	echo : function(str, doneFunc){
		process.stdout.write(str + "\n");
		doneFunc();
	},

	cat : function(fileName, doneFunc){

		fs.readFile(fileName, "utf8", (err, data) => {
		  if (err) throw err;
		  process.stdout.write(data);
		  
		 doneFunc();
		});

	},

	head : function (fileName, doneFunc){

		var linesToRead = 5;

		fs.readFile(fileName, "utf8", (err, data) => {
		  if (err) throw err;
		  var lines = data.toString('utf-8').split("\n");
		  for (var i = 0; i < linesToRead; i++) {
		  	process.stdout.write(lines[i]+'\n'); }
		 doneFunc();
		});

	},

	tail : function (fileName, doneFunc){

		var linesToRead = 5;

		fs.readFile(fileName, "utf8", (err, data) => {
		  if (err) throw err;
		  var lines = data.toString('utf-8').split("\n");
		  for (var i = lines.length-linesToRead; i < lines.length; i++) {
		  	process.stdout.write(lines[i]+'\n'); }
		 doneFunc();
		});

	},

	lc : function (fileName, doneFunc){

		fs.readFile(fileName, "utf8", (err, data) => {
		  if (err) throw err;
		  var lines = data.toString('utf-8').split("\n");
		  	console.log("Lines count: "+lines.length);
		  	//process.stdout.write(lines.length);
		 doneFunc();
		});
	},

	sort : function (fileName, doneFunc){

		fs.readFile(fileName, "utf8", (err, data) => {
		  if (err) throw err;
		  var lines = data.toString('utf-8').split("\n").sort();
		  	//console.log("Lines count: "+lines.length);
		  	process.stdout.write(lines.join('\n'));
		 doneFunc();
		});
	}


}

