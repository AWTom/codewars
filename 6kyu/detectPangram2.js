/*

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

*/

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/
// https://www.codewars.com/kata/reviews/54a5d4af37f43531e900002e/groups/633db189a69a64000163ee14/

const isPangram = string =>
  new Set(string.toLowerCase().split("").filter(c => c >= "a" && c <= "z")).size === 26;
