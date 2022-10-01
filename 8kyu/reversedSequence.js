/*

Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

*/

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
// https://www.codewars.com/kata/reviews/5a04987104e7fea23a0026c5/groups/6337c916f278a70001b304c8/

const reverseSeq = n => {
  return !n.length ? reverseSeq([n]) : n[n.length - 1] > 1 ? reverseSeq(n.concat(n[n.length - 1] - 1)) : n;
};
