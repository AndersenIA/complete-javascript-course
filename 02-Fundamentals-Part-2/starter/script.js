"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive!");
*/

/*
function logger() {
  console.log("My name is Anders");
}

// Calling / Running / Invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(`Juice 1 : ${appleJuice}`);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(`Juice 2 : ${appleOrangeJuice}`);
*/

//Function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}

const age1 = calcAge1(1994);

//Function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const age2 = calcAge2(1994);

console.log(age1, age2);
