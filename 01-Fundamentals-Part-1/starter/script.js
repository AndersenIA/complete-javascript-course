/*
let js = "amazing";
console.log(48 + 8 + 23 - 10);

let firstName = "Anders";
console.log(firstName);

let PI = 3.1415;
//By writing in all uppercase letters, we are telling JavaScript that PI is a constant


//Assignment task.
let country = "Norway";
let continent = "Europe";
let population = 5.52;
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Anders");

javascriptIsFun = "YES!";
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1994;
console.log(year);
console.log(typeof year);

console.log(typeof null);
*/
/*
let age = 30;
age = 31;
const birthYear = 1994;
*/
//The value of birthYear cannot be changed once it is declared.

//use const as default unless you are REALLY sure you need to change it.
//var should be avoided unless you are working with older codebases.
// Var works pretty much the same as let, but it has some differences in how it handles scope.

/*
//Math operators
const now = 2025;
const ageAnders = now - 1994;
const ageCelina = now - 1995;
const ageTheo = now - 2019;
const ageNellie = now - 2025;

console.log(ageAnders, ageCelina, ageTheo, ageNellie);

console.log(ageAnders * 2, ageAnders / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3. = 2*2*2

const firstName = "Anders";
const lastName = "Andersen";
console.log(firstName + " " + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 100
console.log(x);

//Comparison operators
console.log(ageAnders > ageCelina); // >, >, >=, <=
console.log(ageTheo >= 18);

const isFullAge = ageAnders >= 18;

console.log(now - 1994 > now - 2019);
*/

/*
const now = 2025;
const ageAnders = now - 1994;
const ageCelina = now - 1995;
const ageTheo = now - 2019;
const ageNellie = now - 2025;

console.log(now - 1994 > now - 2019);
// Javascript has a well defined order of what it does first. This is called the order of operations. It is like a recipe for the computer
let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageAnders + ageCelina) / 2;
console.log(ageAnders, ageCelina, averageAge);
*/

/*
const firstName = "Anders";
const job = "Developer";
const birthYear = 1994;
const year = 2025;

const anders =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(anders);

const andersNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(andersNew);

console.log(
  "String with \n\
  multiple \n\
  lines"
);

console.log(`String
  multiple
  lines`);
*/

/*
const age = 14;

if (age >= 18) {
  console.log("You are old enough!😁");
} else {
  const yearsLeft = 18 - age;
  console.log(`You are not old enough!😒 You have to wait ${yearsLeft} years.`);
}

const birthYear = 1994;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

/*
// Type conversion
const inputYear = "1994";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Anders"));

console.log(String(23), 23);

// Type coercion
console.log("I am " + 30 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // "11"
n = n - 1;
console.log(n);
*/

// 5 falsy values: 0, "", undefined, null, NaN
// Everything else is truthy

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("Anders"));
console.log(Boolean(""));
console.log(Boolean("{}"));

const money = 0;
if (money) {
  console.log("I have money!😁🤑");
} else {
  console.log("I am broke!😢");
}

let height = 0;
if (height) {
  console.log("YAY, height is defined!");
} else {
  console.log("Height is UNDEFINED");
}
*/

/*

const age = "18";
if (age === 18) console.log("Person is 18! (strict)"); // strict equality operator
if (age == 18) console.log("Person is 18! (Loose)"); // loose equality operator

const favorite = Number(prompt("Whats your favorite number?"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log(`${favorite} is awesome!`);
} else if (favorite === 7) {
  console.log(`${favorite} is also awesome!`);
} else {
  console.log(`${favorite} is not awesome`);
}

if (favorite !== 23 && favorite !== 7) {
  console.log(`Why not 23 or 7??🤔`);
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); // A && B
console.log(hasDriversLicense || hasGoodVision); // A || B
console.log(!hasDriversLicense);

if (hasDriversLicense && hasGoodVision) {
  console.log("Sarah can drive!");
} else {
  console.log("Sarah can't drive!");
}

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired); // A || B

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah can drive!");
} else {
  console.log("Sarah can't drive!");
}
*/

/*
const day = "thursday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😁");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :)");
} else {
  console.log("Not a valid day!");
}
*/

/*
3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

console.log(`I'm ${2037 - 1991} years old`);
*/

/*
const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷")
  : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/
