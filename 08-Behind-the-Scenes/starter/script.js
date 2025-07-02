'use strict';
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `Your name is ${firstName}, and you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str); NOT POSSIBLE
    console.log(millenial); //POSSIBLE BECAUSE VAR
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/

/*
//Example

if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}
//This is a small example of why you should NOT use var
//Use const to declare variables, use let if you know you need to change it later. ALWAYS declare variables at the top of each scope. declare functions first, use them after the declarations.
// BEST PRACTICES ^^

var x = 1;
let y = 2;
const z = 3;
*/

/*
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  // console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};

calcAgeArrow(1980);
// Arrow functions are not getting their own "this" keyword. so it will give the "window"

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();
//Method borrowing. Borrowed the calcAge funtion from Jonas to Matilda

const f = jonas.calcAge;
//will show UNDEFINED error message^⏫
*/

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // const self = this; //Setting this keyword to jonas
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    // };

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //Arrow function in this case uses the "this" keyword from the PARENT scope.
    };
    isMillenial(); // Inside a regular function call the "this" keyword is undefined.
  },

  greet: () => console.log(`Hey ${this.firstName}`),
  //Arrow function is NOT getting their own "this" So you're getting "undefined" because its targeting the "window" object.
};

// DONT USE VAR
// Dont use arrow funtion as a method.
jonas.calcAge();
