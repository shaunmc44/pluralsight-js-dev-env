var jsf = require('json-schema-faker');
var schema = require('./mockDataSchema');
var fs = require('fs');
var chalk = require('chalk');
var faker = require("faker");

jsf.extend("faker", function() {
  return faker
})

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, function (err){
	if (err) {
		return console.log(chalk.red(err));
	} else {
		console.log(chalk.green("Mock data generated."));
	}
});
