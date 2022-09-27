/*

Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

*/

// https://www.codewars.com/kata/5949481f86420f59480000e7/
// https://www.codewars.com/kata/reviews/59494829a557fecd1500008d/groups/633351f068b0080001b9b0e1/

function oddOrEven(array) {
  return (array.length ? array : [0]).reduce((i, j) => i += j) % 2 ? "odd" : "even";
}
