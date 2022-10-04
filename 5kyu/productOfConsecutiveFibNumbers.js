/*

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)

depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod you will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)

F(n) being the smallest one such as F(n) * F(n+1) > prod.

*/

// https://www.codewars.com/kata/5541f58a944b85ce6d00006a/
// https://www.codewars.com/kata/reviews/554398d646002df491000183/groups/633ba8f04adce20001ea6ce5/

function productFib(prod){
  let f1 = 0;
  let f2 = 1;
  
  while (true) {
    let f3 = f1 + f2;
    
    if (f2 * f3 === prod) {
      return [f2, f3, true];
    } else if (f2 * f3 > prod) {
      return [f2, f3, false];
    }
    
    f1 = f2;
    f2 = f3;
  }
}
