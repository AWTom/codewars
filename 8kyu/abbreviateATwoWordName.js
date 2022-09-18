/*

Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F

*/

// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/
// https://www.codewars.com/kata/reviews/57eadb85cd143f4c9c0000a5/groups/5c5c5b18052d1c00013b42c9

function abbrevName(name) {
  let names = name.split(" ");
  return (names[0][0] + "." + names[1][0]).toUpperCase();
}

// After submission, I studied the other solutions and liked this one-liner:
// const abbrevName = (name) => name.toUpperCase().split(' ').map(c => c[0]).join(".");
