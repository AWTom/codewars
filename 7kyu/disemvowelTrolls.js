/*

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

// https://www.codewars.com/kata/52fba66badcd10859f00097e/
// https://www.codewars.com/kata/reviews/52fba700adcd10b182000980/groups/632bc5912ac2a700012d9b28/

function disemvowel(str) {
  return str.split("").filter(c => ["a", "e", "i", "o", "u"].every(v => v !== c.toLowerCase())).join("");
}
