'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator.
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//AND Assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);

/*
// Nullish coalescing operator
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

//Nullish: null and undefined. (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
console.log('--------- OR -----------');
// Use ANY data type, return ANY datatype, short-circuiting
console.log(3 || 'Jonas'); //If the first value is a "truthy" value, it will return that value.
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'hello' || 23 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------- AND -----------');
console.log(0 && 'Jonas'); // If the first value is a "Falsy" value, it will return that value.
console.log(7 && 'Jonas');

console.log('hello' && 23 && null && 'Jonas');

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
*/
/*
///////////////////////////////////////////////////////////////////
// Rest operator

// Destructuring

// SPREAD, because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because of left side of the =
const [a, b, ...others] = [1, 2, 3, 4, 5];

console.log(a, b, others);

// Rest element must be the last element. and only one Rest element
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekdays } = { ...restaurant.openingHours };
console.log(sat, weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 5, 7, 8, 5, 2, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('cheese', 'mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
*/

/*
///////////////////////////////////////////////////////////////////////
//Spread operator (...)

const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]]; //Bad way of doing it
console.log(badNewArray);

const newArray = [1, 2, ...arr]; //The good way of doing it.
console.log(newArray);

console.log(...newArray); // Spreading the array with the "spread" operator

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenyCopy = [...restaurant.mainMenu];

//join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);

//Real world example
const ingredients = [
  // prompt("let's make pasta! Ingredient 1?"),
  // prompt("let's make pasta! Ingredient 2?"),
  // prompt("let's make pasta! Ingredient 3?"),
];

console.log(ingredients);

restaurant.orderPasta(...ingredients); //Using the spread operator so you dont have to write EVERYTHING

//Objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);
*/

/*
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

//Object destructuring
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // HAd to wrap in (), because JS dont like when you start with brackets
console.log(a, b);

// NEsted objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//Destructuring the array (arr) into three new seperate variables x, y, z
//The original array is not affected
const [x, y, z] = arr;

console.log(x, y, z);

//Just use space to "skip" an element
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//SWITCHING TWO VARIABLES IN THE ARRAY
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

//Recieve 2 return values from a function.
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
