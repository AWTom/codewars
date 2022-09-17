/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
*/

// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/
// https://www.codewars.com/kata/reviews/566770a5e2aefaf7b000002d/groups/5980aac806b0444740000072

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.findIndex((i) => i == 'needle');
}
