let message = 'Hi there!';
const PI = 3.14;

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('John Wick'));

// function expression
const square = function (x) {
  return x * x;
};
console.log(square(15));

// Arrow function
const cube = x => x * x * x;
console.log(cube(3));
