/*

Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/
// https://www.codewars.com/kata/reviews/51f2d1cafc9c0f745c000380/groups/575cd0b881ce1de7af00013f

function solution(str, ending){
  return str.endsWith(ending);
}
