/*

Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:

spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test"

*/

// https://www.codewars.com/kata/5264d2b162488dc400000001/
// https://www.codewars.com/kata/reviews/5264d41ce218b86cb90000df/groups/633a45c624a93300018a482f/

const spinWords = string => string.split(" ").map(w => w.length < 5 ? w : w.split("").reverse().join("")).join(" ");
