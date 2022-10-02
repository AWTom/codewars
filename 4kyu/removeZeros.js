/*

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

*/

// https://www.codewars.com/kata/52aae14aa7fd03d57400058f/
// https://www.codewars.com/kata/reviews/52aae14ca7fd03d574000592/groups/633a0994c9198d0001d2f397/

function removeZeros(array) {
  let zeroesEncountered = 0;
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0 && array[i] !== "0") {
      for (let j = 0; j < zeroesEncountered; j++) {
        let temp = array[i-j-1];
        array[i-j-1] = array[i-j];
        array[i-j] = temp;
      }
    } else {
      zeroesEncountered++;
    }
  }
  
  return array;
}
