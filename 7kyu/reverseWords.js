/*

Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/

// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/
// https://www.codewars.com/kata/reviews/5259b20d6021e9e14c0010d7/groups/55f59cec94a2d86e0a000012/

function reverseWords(str) {
  return str.split(" ").map(w => w.split("").reverse().join("")).join(" ");
}
