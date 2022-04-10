/* eslint-disable no-console */
function calculateBill() {
  console.log("Running Calculate Bill!!");
  const total = 100 * 1.06625;
  return total;
}

const myTotal = calculateBill();
console.log(`Your Total is $${myTotal}`);

console.log("Wow this stuff really works!");
