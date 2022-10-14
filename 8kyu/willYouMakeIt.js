/*

You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

*/

// https://www.codewars.com/kata/5861d28f124b35723e00005e/
// https://www.codewars.com/kata/reviews/5aa6e87978c0e8494900233e/groups/5ed898e1fb137f00012a790f/

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  (distanceToPump / mpg) / fuelLeft <= 1;
