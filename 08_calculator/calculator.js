const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentVal) => total + currentVal, 0)
};

const multiply = function(...args) {
  return Number(args.reduce((total, currentMultiplier) => total * currentMultiplier));
};

const power = function(num, pow) {
	return num ** pow;
};

const factorial = function(num) {
	if(num === 0) return 1;
  let product = 1;
  for(let i = num; i > 0; i--){
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
