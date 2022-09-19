/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/
// https://www.codewars.com/kata/reviews/516f302a7c907a79f200069f/groups/516f302a7c907a79f20006ad

function solution(str){
  return str.split('').reverse().join('');  
}
