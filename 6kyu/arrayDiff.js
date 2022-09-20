/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

// https://www.codewars.com/kata/523f5d21c841566fde000009/
// https://www.codewars.com/kata/reviews/523f5d21c841566fde00000c/groups/61fde4f0fb076500017bd2e6/

function arrayDiff(a, b) {
  return a.filter((i) => b.every((j) => j != i))
}
