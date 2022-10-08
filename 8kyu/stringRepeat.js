/*

Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/
// https://www.codewars.com/kata/reviews/57f78c4be0da82645b00009c/groups/57f7a38e97d62ff05d0000a6/

const repeatStr = (n, s) => s.repeat(n);
