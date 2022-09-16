/*
Your task is to add up letters to one letter.

The function will be given a vector of letters, each one being a letter (chars) to add. Return a char.

Notes:
Letters will always be lowercase.
Letters can overflow (see second to last example of the description)
If no letters are given, the function should return 'z'
*/

// https://www.codewars.com/kata/5d50e3914861a500121e1958/
// https://www.codewars.com/kata/reviews/5d5eee0dd442750001a3a3a8/groups/6321149060233f0001e8237e

#include <vector>
char add_letters(std::vector<char> letters) {
  unsigned int sum = 26;
  
  for(auto& i : letters)
    sum += i - 'a' + 1;
  
  return (sum - 1) % 26 + 'a';
}
