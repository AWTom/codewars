/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false

*/

// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/
// https://www.codewars.com/kata/reviews/55f8abdcb692958d4800000f/groups/57608fcff147f44add000060/

const validatePIN = pin => Boolean(pin.match(/^(\d{4}|\d{6})$/));
