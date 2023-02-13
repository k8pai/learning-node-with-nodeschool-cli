const val = process.argv;

console.log(val.slice(2).reduce((res, el) => Number(res) + Number(el)));
