/*

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/

// https://www.codewars.com/kata/52597aa56021e91c93000cb0/
// https://www.codewars.com/kata/reviews/52597aa56021e91c93000cb3/groups/6339d969795f6900018c1ea1/

function moveZeros(arr) {
  let sumOfZeros = 0;
  return arr.filter(e => e !== 0 || !++sumOfZeros).concat(Array(sumOfZeros).fill(0));
}
