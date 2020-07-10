function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	if(arr.length === 0){
		return 0;
	}
	
	let sum = 0;
	arr.forEach(num => sum += num);
	return sum;
}

function multiply (arr) {
	if(arr.length === 0) {
		return 0;
	}
	
	let product = 1;
	arr.forEach(num => product *= num);
	return product;
}

function power(num,pow) {
	if(pow === 0)
		return 1;
	
	let result = 1;
	for(let i=0; i<pow; i++){
		result *= num;
	}
	return result;
}

function factorial(num) {
	if(num===1 || num === 0)
		return 1;
	else
		return num * factorial(num-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}