/*

It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

*/

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/
// https://www.codewars.com/kata/reviews/56bcf9bc8698152aba000015/groups/5835760a6bdc27602500012c/

const removeChar = str => str.split("").slice(1, -1).join("");
