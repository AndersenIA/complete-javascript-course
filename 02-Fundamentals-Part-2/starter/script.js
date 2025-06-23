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

/*
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
*/

/*

//Arrow function

const calcage3 = (birthYear) => 2025 - birthYear;
const age3 = calcage3(1994);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1994, "Anders"));
console.log(yearsUntilRetirement(1963, "Arvid"));
*/

/*

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} Has already retired!😎`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1994, "Anders"));
console.log(yearsUntilRetirement(2001, "Jonas"));
console.log(yearsUntilRetirement(1953, "Bob"));
*/

/*

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win! (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win! (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No one wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
*/

/*

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";

console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2025 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
console.log(ages);

*/

/*
const friends = ["Michael", "Steven", "Peter"];

//Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

//Remove elements
friends.pop(); //Remove the last element
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);
//Remove the first element

console.log(friends.indexOf("Steven"));
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

/*
function calcTip(billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
}

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

const totals = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(totals);
*/
