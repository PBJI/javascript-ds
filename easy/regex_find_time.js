/*The time has a format: hours:minutes. Both hours and minutes have two digits, like 09:00.

Make a regexp to find time in the string: Breakfast at 09:00 in the room 123:456. In this task there’s no need to check time correctness yet, so 25:99 can also be a valid result. The regexp should not match 123:456.
Notes

The solution is in the Resources tab. */

const string1 = 'Breakfast at 25:99 in the room 123:456.';
//A string is a javascript object on which we can apply certain types of method.


const regexp1 = new RegExp('[0-9]{2}:[0-9]{2}');
//A regular expression is a string pattern which we use to match the pattern with a given text.
//Cheatsheet of regular expressions can be found here: https://quickref.me/regex#regex-in-javascript
//In this program I learnt that we can use a lot reg exp functionalities like the character classes [], Quantifiers, Metacharacters ^ { } < > etc, etc.
//So there is a lot to learn yet in the reg exp context.

console.log(string1.match(regexp1)[0]);