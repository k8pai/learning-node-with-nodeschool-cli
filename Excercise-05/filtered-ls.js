const fs = require('fs');

fs.readdir(process.argv[2], (err, files) => {
	if (err) throw new Error('Error occured : ', err);
	const data = files
		.filter((val) => val.endsWith(`.${process.argv[3]}`))
		.join('\n');
	console.log(data);
});
