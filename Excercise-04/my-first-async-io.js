const fs = require('fs');

const data = fs.readFile(process.argv[2], 'utf8', (err, data) => {
	if (err) throw new Error('Error occured : ' + err);
	console.log(data.split('\n').length - 1);
});
