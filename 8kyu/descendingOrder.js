/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
*/

// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/
// https://www.codewars.com/kata/reviews/5485d20fd8325e250a00013e/groups/6322900ccddb610001deea07

function descendingOrder(n){
  let countsOfDigits = new Array(10).fill(0);
  let outputString = "";
  
  // For each digit in input, increment respective count
  for (let c of n.toString())
    countsOfDigits[parseInt(c, 10)]++;
  
  // For each counted digit, add it to the output from greatest to least
  for (let i = 9; i >= 0; i--)
    for (let j = 0; j < countsOfDigits[i]; j++)
      outputString += i.toString();
  
  return parseInt(outputString);
}
