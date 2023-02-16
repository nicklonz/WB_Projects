console.log('It works Nick!!!');
console.log('Wow NL !!!');
console.log(doctorize2('Nick L'));

// eslint-disable-next-line no-unused-vars
const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
};

function doctorize2(firstName) {
  return `Dr. ${firstName}`;
  // eslint-disable-next-line prettier/prettier
};

// eslint-disable-next-line no-unused-var

inchToCM(inches); {
  const cm = inches * 2.54;
  return cm;
}

function inchToCM(inches) {
  return inches * 2.54;
}

// eslint-disable-next-line no-unused-vars
function inchToCM10(inches) {
  return inches * 2.54;
}



function aIsForApple (fruit) {
  return `The name of the fruit is ${fruit}!!!`;
};

console.log(fruit);
console.log(aIsForApple("bananna"));

// function definition
function calculateBill2() {
  // this is the function body
  console.log("Running Calculate Bill!!");
  const total = 100 * 1.13;
  console.log(total);
  return total;
}
// function call or function invocation
calculateBill2();

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

