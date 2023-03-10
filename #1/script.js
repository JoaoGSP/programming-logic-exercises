// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

let sum = 0;
let idx = 0;

for (idx = 1; idx < 1000; idx++) {
  if ((idx % 3 === 0) || (idx % 5 === 0)) {
    sum += idx;
  }
}
console.log(sum);
