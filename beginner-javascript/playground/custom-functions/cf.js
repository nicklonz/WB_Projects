function calculateBill(billAmount, taxRate) {
  console.log(billAmount, taxRate);
  console.log("Running Calculate Bill Wow!!!");
  const total = billAmount * (1 + taxRate);
  return total;
}

const myTotal = calculateBill(100, 0.06625);
const myTotal2 = calculateBill(200, 0.15);

console.log(myTotal);
console.log(myTotal2);
