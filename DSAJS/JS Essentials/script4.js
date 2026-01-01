function calculateCompoundInterest(p, r, t, n) {
  let amount = p * (1 + (r / n)) ** (n * t);
  let ci = amount - p;
  return ci.toFixed(2);
}

let principal = 1000;
let rate = 0.5;
let time = 10;
let noOfYears = 4;

calculateCompoundInterest(principal, rate, time, noOfYears) // expected output 110199.00



