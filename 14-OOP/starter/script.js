'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method in a constructor function
  // this.calcAge = function() {
  //   console.log(2025 - this.birthYear);
  // }
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New empty object is created
// 2. function is called, this = the new empty object.
// 3. new object is linked to prototype
// 4. function automatically return the new object

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(jonas instanceof Person);

// Prototypes
console.log(Person.prototype);

// Creating this function outside, so it only exsist one function. But every new object can use this method, like jonas, matilda and jack
Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();

console.log(jonas.__proto__); //Checking the prototype of the new object
console.log(jonas.__proto__ === Person.prototype); // True

console.log(Person.prototype.isPrototypeOf(jonas)); // True
console.log(Person.prototype.isPrototypeOf(Person)); // False
// can think of it as ".prototypeOfLinkedObjects", because its not a prototype of the object "Person" itself

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));
// The object only has access to the property "species", but has not its own property.
