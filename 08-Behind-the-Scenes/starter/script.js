'use strict';

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
