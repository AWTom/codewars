/*

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

*/

// https://www.codewars.com/kata/57eae65a4321032ce000002d/
// https://www.codewars.com/kata/reviews/57eae82bcab4e9eb030000a6/groups/5f73c8d1ec88aa000177fbd2/

const fakeBin = x => x.split("").map(c => Number(c) < 5 ? "0" : "1").join("");
