function shiftToLeft(number, bits) {
    return (number * (2 ** bits));
}

console.log(shiftToLeft(10, 3));
console.log(shiftToLeft(46, 6));
console.log(shiftToLeft(-32, 2));