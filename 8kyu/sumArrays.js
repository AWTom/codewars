/*

Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

*/

// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/
// https://www.codewars.com/kata/reviews/53dc581021a252c4890000bc/groups/57b2ba088491f9ce59000035/

const sum = numbers => numbers.reduce((prev, curr) => prev + curr, 0);
