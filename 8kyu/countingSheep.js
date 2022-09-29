/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

// https://www.codewars.com/kata/54edbc7200b811e956000556/
// https://www.codewars.com/kata/reviews/54edbd5b33c74608a10001fa/groups/633515f98bc1b5000121e244/

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((i, j) => i + (j ? 1 : 0), 0);
}
