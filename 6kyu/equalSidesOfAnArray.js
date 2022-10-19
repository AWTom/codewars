/*

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.

*/

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/
// https://www.codewars.com/kata/reviews/5679c8ba5da43f03ad0000a5/groups/63502a1a9011cf0001468d8b/

function findEvenIndex(arr) {
  let rightPart = arr.reduce((a, b) => a + b, 0);
  let leftPart = 0;
  
  for (let i = 0; i < arr.length; i++) {
    rightPart -= arr[i];
    leftPart += i > 0 ? arr[i - 1] : 0;
    
    if (leftPart === rightPart) {
      return i;
    }
  }
  
  return -1;
}
