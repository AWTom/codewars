/*

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

// https://www.codewars.com/kata/54ff3102c1bad923760001f3/
// https://www.codewars.com/kata/reviews/54ff35d3c1bad9fbfb00021d/groups/632e682bee1c3f00017f68b2

function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  return str.length - str.split("").filter(c => vowels.every(v => c !== v)).join("").length;
}
