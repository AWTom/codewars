/*

You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"

/*

// https://www.codewars.com/kata/56747fd5cb988479af000028/
// https://www.codewars.com/kata/reviews/567486aaed8cf6cf5600000c/groups/635cb4f55d2b2400014881e8/

const getMiddle = s => s.split("").slice(Math.floor(s.length / 2 - 0.5), Math.floor(s.length / 2 + 1)).join("");
