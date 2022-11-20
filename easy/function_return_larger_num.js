/*Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

    If f returns the larger number, return the string f.
    If g returns the larger number, return the string g.
    If the functions return the same number, return the string neither.

Examples

whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f"

Notes

This exercise is designed as an introduction to higher order functions (functions which use other functions to do their work).*/

function whichIsLarger(fun1, fun2) {
    num1 = fun1();
    num2 = fun2(55555);
    if (num1 < num2) {
        return "g";
    } else if (num1 == num2) {
        return "f";
    } else if (num1 > num2) {
        return "neither";
    }
    return [num1, num2];
}

console.log(whichIsLarger(() => 5, () => 10));
console.log(whichIsLarger(() => 10, () => 10));
console.log(whichIsLarger(() => 10, () => 5));