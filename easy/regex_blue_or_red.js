/*Groups and ranges indicate groups and ranges of expression characters. The regular expression x|y matches either "x" or "y".

const REGEXP = /blue|red/

"red flag".match(REGEXP)  // red
"blue flag".match(REGEXP)  // blue

// Matches "blue" in "blue flag" and "red" in "red flag".

Create a regular expression to match all red flag and blue flag in a string. You must use | in your expression. Flags can come in any order.
Examples

"red flag blue flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"yellow flag red flag blue flag green flag".match(REGEXP) ➞ ["red flag", "blue flag"]

"pink flag red flag black flag blue flag green flag red flag ".match(REGEXP) ➞ ["red flag", "blue flag", "red flag"]

Notes

Check the Resources tab if you get stuck. */

//The pipe character is used to match either this or that group of character. Basically it is finding two types of pattern.
//The g or global flag indicates that the regular exp should be tested against all possibilities:-
//Output without g flag:-
//red flag
//red flag
//red flag
//
//Output with g flag:-
//red flag blue flag
//red flag blue flag
//red flag blue flag red flag
const regexp1 = /blue flag|red flag/g;


string1 = "red flag blue flag";
string2 = "yellow flag red flag blue flag green flag";
string3 = "pink flag red flag black flag blue flag green flag red flag ";

console.log(...string1.match(regexp1));
console.log(...string2.match(regexp1));
console.log(...string3.match(regexp1));
