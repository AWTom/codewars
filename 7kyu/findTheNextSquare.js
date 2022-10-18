/*

You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

*/

// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/
// https://www.codewars.com/kata/reviews/564429e7fc3137d3a300009a/groups/632aec8b684b740001864321/

const findNextSquare = sq => (sq ** 0.5) % 1 ? -1 : (sq ** 0.5 + 1) ** 2;
