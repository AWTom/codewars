/*

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/
// https://www.codewars.com/kata/reviews/57cec2caf0fe9cd5df000072/groups/6335a7adb8f5790001cd08f7/

function findShort(s){
  return s.split(" ").map(w => w.length).reduce((prev, curr) => Math.min(prev, curr), 99);
}
