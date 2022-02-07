// *** List of falsy values ****
//
// false
// 0 - the number zero
// "", '' or - empty strings
// null
// undefined
// Nan - Not a Number

// Everything else is Truly

// If we are trying to check if a value exists (if it isn't null or undefined) for example,
// we can do this:

//TODO write example

// rather than having to check for both null and undefined like this:

//TODO write example

// That applies to all the falsy values,
// so we can check that a variable's value is not one of the falsy values
// by writing an if statement like this:

// Example 1 Play with truly and falsy values

const test = ''; // falsy
const test2 = 0; // falsy
const test3 = null; // falsy
const test4 = false; // falsy
const test5 = undefined; // falsy
const test6 = NaN; // falsy
const test7 = ' '; // truly

if (test7) {
  console.log('truly');
} else {
  console.log('falsy');
}

// Example 2 Real life example

// some data from API can look like this:
const carsData = [
  {
    make: 'Tesla',
    isElectric: true,
  },
  {
    make: 'BMW',
    isElectric: false,
  },
];

// we can check if isElectric is true or false by looping like this:
carsData.forEach(function (car) {
  console.log(car);
  if (car.isElectric) {
    console.log('car make is a ' + car.make + ' and it is electric');
  } else {
    console.log(car.make + ' is not electric');
  }
});
