/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

package kata

func CountPositivesSumNegatives(numbers []int) []int {
  var length = len(numbers)
  var count = 0
  var sum = 0
  
  for i := 0; i < length; i++ {
    if numbers[i] > 0 {
      count++
    } else {
      sum += numbers[i]
    }
  }
  
  return []int{count, sum}
}
