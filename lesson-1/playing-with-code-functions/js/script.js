// Function expression
const myFunction = function (carName) {
  console.log('My car is a: ' + carName);
};

myFunction('BMW');

// Arrow Function
const myFunction2 = (petName) => {
  console.log('My pet is a: ' + petName);
};

myFunction2('cat');

// Possible to write without curly braces and parentheses
// only possible to write without parentheses if you have
// ONE argument
const myFunction3 = (myCity) => console.log('I live in: ' + myCity);

myFunction3('Oslo');

//
const helloWorld = () => console.log('Hello world');

helloWorld();

// Two arguments with arrow function
const myPetAndCity = (myPet, myCity) =>
  console.log('My pet is a ' + myPet + ' and I live in ' + myCity);

myPetAndCity('monkey', 'Oslo');

// concatenation
const firstName = 'Emil';
const myAge = '29';
console.log(`My name is ${firstName} and I am ${myAge} years old`);
const greeting = `My name is ${firstName + ' Backlund'} 
and I am ${myAge - 10} years old`;
console.log(greeting);

// Global scope
// functional scope aka local scope
// block scope

// Global scope:

// This variable is in the global scope
const cityName = ['Stockholm', 'Oslo', 'Copenhagen'];

function showCityName() {
  console.log(cityName);
}

function isScania(arg1) {
  for (let i = 0; i < cityName.length; i++) {
    if (arg1 === cityName[i]) {
      console.log(arg1 + ' is in Scandinavia');
    } else if (arg1 !== cityName[i]) {
      console.log(cityName[i] + ' is not in Scandinavia');
    }
  }
}

isScania('Berlin');

// functional scope
function showMeCityName() {
  // This is a local scope that can't be used
  // outside the function
  const cityName2 = 'Stockholm';
  console.log(cityName2);
}

// show error because it's declared inside a function
// console.log(cityName2);

// Block scope
{
  const name = 'Emil';
  const car = 'Tesla';
  var someAge = 30;
  let country = 'Sweden';
  console.log(name);
  console.log(car);
}

//
// console.log(car);
// console.log(country);
// bindings declared with var don't comprehend with block scope.
// but bindings with let and const will not show outside block scope.
console.log(someAge);

// 'this'

// console.log(this);

// this is always targeting the parent

const myObject = {
  number: 10,
  age: 30,
  myFunction: function () {
    console.log(this);
  },
};

myObject.myFunction();

// ternary operator

// not ternary:
const somePet = 'rhino';

let isDangerous; // boolean

if (somePet === 'rhino') {
  isDangerous = true;
} else {
  isDangerous = false;
}

console.log(isDangerous);

// ternary:

const somePetTwo = 'cat';

// condition ? true : false
// this example is the same as the "not ternary" example above
const isAlsoDangerous = somePetTwo === 'lion' ? true : false;
console.log(isAlsoDangerous);
