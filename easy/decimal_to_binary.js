/* Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).
Examples

binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10

Notes

    Numbers will always be below 1024 (not including 1024).
    The && operator could be useful.
    The strings will always go to the length at which the most left bit's value gets bigger than the number in decimal.
    If a binary conversion for 0 is attempted, return "0".*/

function binary(num) {
	let quotient = num;
	let bin = "";
	if (num < 1) { return "0";}
	while (quotient >= 1) {
		if (quotient/2 - (parseInt(quotient/2)) > 0) {
			bin = bin + "1";
			quotient = parseInt(quotient / 2);
		}
		else {
			bin = bin + "0";
			quotient = parseInt(quotient / 2);
		}
	}

	//We can split the string into elements
	//We can reverse the array of elements
	//We can join the elements back into a string
	//print(bin);
	let splited = bin.split("");// we have to pass a delimiter encapsulated in double strings. Here we can pass empty strings to split every element.
	//print(splited);
	let reversed = splited.reverse();
	//print(splited);
	let joined = reversed.join("");
	return joined;
}

function print(content) {
	console.log(content);
}

print(binary(5));
print(binary(100));
