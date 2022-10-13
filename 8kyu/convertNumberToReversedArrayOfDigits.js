/*

Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

*/

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/
// https://www.codewars.com/kata/reviews/558309189bfb9444fb000250/groups/5b791aae8b60b71809000a1a/

const digitize = n => n.toString().split("").reverse().map(i => Number(i));
