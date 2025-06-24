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
// MY CODE
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

/*
// Jonas' code
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => Bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const bills = [125, 55, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2],
];

console.log(bills, tips, totals);
*/

/*

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2025 - 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

//Does not work. We need to use bracket notation as we did above.
// console.log(jonas."last" + nameKey)

const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
);
//Here you have to use bracket notation.

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("We don't know that about Jonas.");
}

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

//Challenge
// 'Jonas has 3 friends, and his best friend is called Michael'
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);

*/
/*
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2025 - this.birthYear;
  // },
  //Writing "this." to make the function point to the jonas object.

  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    // const canDrive = this.hasDriversLicense
    //   ? "a driver's license"
    //   : "not a driver's license";
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? "a" : "not a"} driver's license.`;
  },
};

console.log(jonas.calcAge());
// console.log(jonas["calcAge"](jonas.birthYear));
console.log(jonas);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//Challenge
// 'Jonas is a 46-year old teacher. and he has a(no) driver's license.'
console.log(jonas.getSummary());
*/

/*
CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2). */

/*
const mark = {
  fullName: "Mark Miller",
  height: 1.69,
  mass: 78,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  height: 1.95,
  mass: 92,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
console.log(
  mark.bmi > john.bmi
    ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
    : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
);
*/

// console.log("Lifting weights repetition 1 💪");
// console.log("Lifting weights repetition 2 💪");
// console.log("Lifting weights repetition 3 💪");
// console.log("Lifting weights repetition 4 💪");
// console.log("Lifting weights repetition 5 💪");
// console.log("Lifting weights repetition 6 💪");
// console.log("Lifting weights repetition 7 💪");
// console.log("Lifting weights repetition 8 💪");
// console.log("Lifting weights repetition 9 💪");
// console.log("Lifting weights repetition 10 💪");

//For loop keeps running while condition is TRUE.
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 💪`);
}
