/*

Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

*/

// https://www.codewars.com/kata/578553c3a1b8d5c40300037c/
//https://www.codewars.com/kata/reviews/57856f74bf6a1ede3f000406/groups/63439ba32575f00001cf3cd5/

const binaryArrayToNumber = arr =>
  arr.reduce((sum, bit, index) =>
    sum + bit * Math.pow(2, arr.length - index - 1), 0);
