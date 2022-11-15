var num = 23;
var bit_num = num.toString(2);

function bitwiseAND(num1, num2) {
	return (num1 & num2);
	//return (num1 & num2).toString(2);
}


function bitwiseOR(num1, num2) {
	return (num1 | num2);
	//return (num1 | num2).toString(2);
}

function bitwiseXOR(num1, num2) {
	//return (num1 ^ num2);
	return (num1 ^ num2).toString(16);
}

console.log(bitwiseAND(7, 12));
console.log(bitwiseOR(7, 12));
console.log(bitwiseXOR(7, 12));
